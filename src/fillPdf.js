import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import NotoFont from "./fonts/NotoSansSymbols2-Regular.ttf";
import { saveAs } from "file-saver";

export async function fillN400Pdf(data) {
  const existingPdfBytes = await fetch("/n-400.pdf").then((res) =>
    res.arrayBuffer()
  );
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  pdfDoc.registerFontkit(fontkit);
  const notoFontBytes = await fetch(NotoFont).then((res) => res.arrayBuffer());
  const customFont = await pdfDoc.embedFont(notoFontBytes);

  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();

  const draw = (pageIndex, text, x, y, size = 8, font = helveticaFont) => {
    const page = pages[pageIndex];
    const { height } = page.getSize();
    page.drawText(text || "", {
      x,
      y: height - y,
      size,
      color: rgb(0, 0, 0),
      font,
    });
  };

  const drawTick = (pageIndex, x, y, size = 8) => {
    draw(pageIndex, "✔", x, y, size, customFont);
  };

  const checkEligibilityBox = (letter) => {
    const yPositions = {
      A: 346.5,
      B: 365.5,
      C: 382.5,
      D: 412.5,
      E: 501.5,
      F: 531.5,
      G: 564.5,
    };
    const y = yPositions[letter];
    if (y !== undefined) {
      drawTick(0, 85, y, 8);
    }
    if (letter === "G" && data.eligibilityReasonOther) {
      draw(0, data.eligibilityReasonOther, 290, y, 8);
    }
  };

  checkEligibilityBox(data.eligibilityReason);

  const aNumber = (data.aNumber || "").toString().padEnd(9);
  const aX1 = 460,
    aY1 = 300,
    aSpacing1 = 13;
  for (let i = 0; i < aNumber.length; i++) {
    draw(0, aNumber[i], aX1 + i * aSpacing1, aY1);
  }

  draw(0, data.currentLastName, 138, 655);
  draw(0, data.currentFirstName, 330, 655);
  draw(0, data.currentMiddleName, 480, 655);
  draw(0, data.otherLastName, 138, 720);
  draw(0, data.otherFirstName, 330, 720);
  draw(0, data.otherMiddleName, 480, 720);

  const checkLegalNameChange = (answer) => {
    drawTick(1, answer === "Yes" ? 397.5 : 439.5, 123);
  };
  checkLegalNameChange(data.legalNameChange);

  draw(1, data.lastName, 138, 175);
  draw(1, data.firstName, 330, 175);
  draw(1, data.middleName, 480, 175);

  const uscis = (data.uscisNumber || "").toString().padEnd(12);
  for (let i = 0; i < uscis.length; i++) {
    draw(1, uscis[i], 80 + i * 14, 210);
  }

  const checkgender = (answer) => {
    drawTick(1, answer === "Male" ? 283.5 : 330.5, 210);
  };
  checkgender(data.gender);

  const ssnNo = (data.ssn || "").toString().padEnd(9);
  for (let i = 0; i < ssnNo.length; i++) {
    draw(1, ssnNo[i], 290 + i * 15, 655);
  }

  const checkssa = (answer) => {
    drawTick(1, answer === "Yes" ? 499.5 : 541.5, 675);
  };
  checkssa(data.ssa);

  draw(1, data.dob, 90, 248);
  draw(1, data.countryofbirth, 150, 351);
  draw(1, data.countryofcitizenship, 150, 386);

  const checkpCitizen = (answer) => {
    drawTick(1, answer === "Yes" ? 499.5 : 541.5, 435);
  };
  checkpCitizen(data.pCitizen);

  const checkdisability = (answer) => {
    drawTick(1, answer === "Yes" ? 499.5 : 541.5, 472);
  };
  checkdisability(data.disability);

  const checkwantssa = (answer) => {
    drawTick(1, 62, answer === "Yes" ? 614.5 : 633);
  };
  checkwantssa(data.wantssa);

  draw(2, data.careofname, 70, 440);
  draw(2, data.street, 70, 478);
  draw(2, data.city, 70, 512);
  draw(2, data.state, 450, 512);
  draw(2, data.zip, 520, 512);
  draw(2, data.province, 70, 546);
  draw(2, data.postalcode, 224, 546);
  draw(2, data.country, 360, 547);
  draw(2, data.date, 234, 572);

  if (data.ethnicity === "Hispanic") drawTick(2, 63, 132);
  if (data.ethnicity === "NotHispanic") drawTick(2, 170.5, 132);

  const raceXPositions = {
    "American Indian": 62.5,
    Asian: 170,
    Black: 224,
    "Pacific Islander": 327,
    White: 446,
  };

  (data.race || []).forEach((race) => {
    if (raceXPositions[race]) drawTick(2, raceXPositions[race], 168);
  });

  draw(2, data.heightFeet || "", 123, 198);
  draw(2, data.heightInches || "", 212, 198);

  const weight = (data.weight || "").toString().padEnd(3);
  for (let i = 0; i < weight.length; i++) {
    draw(2, weight[i], 380 + i * 18, 198);
  }

  const eyeColorPositions = {
    Black: 62.5,
    Blue: 127.5,
    Brown: 176,
    Gray: 230.5,
    Green: 284.5,
    Hazel: 338.5,
    Maroon: 386.5,
    Pink: 446.5,
    Unknown: 493.5,
  };
  if (eyeColorPositions[data.eyeColor])
    drawTick(2, eyeColorPositions[data.eyeColor], 233.5);

  const hairColorPositions = {
    Bald: 62.5,
    Black: 127.5,
    Blond: 176,
    Brown: 230.5,
    Gray: 284.5,
    Red: 338.5,
    Sandy: 386.5,
    White: 446.5,
    Unknown: 493.5,
  };
  if (hairColorPositions[data.hairColor])
    drawTick(2, hairColorPositions[data.hairColor], 270);

  const checkmailAdd = (answer) =>
    drawTick(2, answer === "Yes" ? 61.5 : 266.5, 741);
  checkmailAdd(data.mailAdd);

  draw(3, data.careofname1, 70, 121);
  draw(3, data.street1, 70, 159);
  draw(3, data.city1, 70, 193);
  draw(3, data.state1, 450, 193);
  draw(3, data.zip1, 520, 193);
  draw(3, data.province1, 70, 227);
  draw(3, data.postalcode1, 224, 227);
  draw(3, data.country1, 360, 228);

  const maritalStatusPositions = {
    Single: 61.5,
    Married: 175.5,
    Divorced: 235.5,
    Widowed: 301.5,
    Separated: 366.5,
    MarriageAnnulled: 432.5,
  };
  if (maritalStatusPositions[data.maritalStatus]) {
    drawTick(3, maritalStatusPositions[data.maritalStatus], 303);
  }

  const checkarmedF = (answer) =>
    drawTick(3, answer === "Yes" ? 499.5 : 541.5, 339);
  checkarmedF(data.armed);

  draw(3, data.slastName, 70, 559);
  draw(3, data.sfirstName, 274, 559);
  draw(3, data.smiddleName, 455, 559);
  draw(3, data.sdob, 70, 606);
  draw(3, data.mdate, 245, 606);
  draw(3, data.sdate, 330, 740);

  const checksameAdd = (answer) =>
    drawTick(3, 61.5, answer === "Yes" ? 645.5 : 663.5);
  checksameAdd(data.sameAdd);

  const checksCitizenship = (answer) =>
    drawTick(3, 61.5, answer === "Yes" ? 699 : 716);
  checksCitizenship(data.sCitizenship);

  const aNo = (data.ano || "").toString().padEnd(9);
  for (let i = 0; i < aNo.length; i++) {
    draw(4, aNo[i], 370 + i * 15, 90);
  }

  draw(4, data.sno, 545, 116);
  draw(4, data.sCompanyName, 260, 173);

  for (let i = 1; i <= 3; i++) {
    draw(4, data[`name${i}`], 70, 415 + 35 * (i - 1));
    draw(4, data[`dob${i}`], 245, 415 + 35 * (i - 1));
    draw(4, data[`residence${i}`], 300, 415 + 35 * (i - 1));
    draw(4, data[`relationship${i}`], 410, 415 + 35 * (i - 1));
    const dep = data[`dep${i}`];
    if (dep === "Yes") drawTick(4, 505.5, 412.5 + 30 * (i - 1));
    else if (dep === "No") drawTick(4, 544.5, 412.5 + 30 * (i - 1));
  }

  for (let i = 1; i <= 3; i++) {
    const y = 698 + (i - 1) * 22;
    draw(4, data[`n${i}`], 70, y);
    draw(4, data[`c${i}`], 165, y);
    draw(4, data[`s${i}`], 225, y);
    draw(4, data[`z${i}`], 268, y);
    draw(4, data[`cr${i}`], 325, y);
    draw(4, data[`f${i}`], 380, y);
    draw(4, data[`t${i}`], 435, y);
    draw(4, data[`o${i}`], 505, y);
  }

  draw(8, data.applicantSignature, 100, 100);
  draw(8, data.signatureDate, 100, 120);

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  saveAs(blob, "n-400-filled.pdf");
}
