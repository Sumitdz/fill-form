import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';

export async function fillN400Pdf(data) {
  const existingPdfBytes = await fetch('/n-400.pdf').then(res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();

  const draw = (pageIndex, text, x, y, size = 10) => {
    const page = pages[pageIndex];
    const { height } = page.getSize();
    page.drawText(text || '', {
      x,
      y: height - y,
      size,
      color: rgb(0, 0, 0),
    });
  };


  /*const checkEligibilityBox = (letter) => {
    const yBase = 487; 
    const offset = 14.5; 
    const letterMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
    const index = letterMap[letter];
    if (index !== undefined) {
      draw(0, "Y", 64, yBase + index * offset, 12); 
    }
  };

  checkEligibilityBox(data.eligibilityReason);*/

  
  draw(0, data.currentLastName, 138, 655);
  draw(0, data.currentFirstName, 330, 655);
  draw(0, data.currentMiddleName, 480, 655);

  draw(0, data.otherLastName, 138, 720);
  draw(0, data.otherFirstName, 330, 720);
  draw(0, data.otherMiddleName, 480, 720);


  draw(1, data.lastName, 138, 175);
  draw(1, data.firstName, 330, 175);
  draw(1, data.middleName, 480, 175);


  const uscis = (data.uscisNumber || "").toString().padEnd(12); 
  const boxXStart = 80;  
  const boxY = 210;      
  const boxSpacing = 14;

  for (let i = 0; i < uscis.length; i++) {
    draw(1, uscis[i], boxXStart + i * boxSpacing, boxY);
  }



  draw(1, data.dob, 90, 248);
  draw(1, data.countryofbirth, 150, 351);
  draw(1, data.countryofcitizenship, 150, 386);

  const ssnNo = (data.ssn || "").toString().padEnd(9); 
  const boxXStart1 = 290;  
  const boxY1 = 655;     
  const boxSpacing1 = 15; 

  for (let i = 0; i < ssnNo.length; i++) {
    draw(1, ssnNo[i], boxXStart1 + i * boxSpacing1, boxY1);
  }


  draw(2, data.careofname, 70, 440);
  draw(2, data.street, 70, 478);
  draw(2, data.city, 70, 512);
  draw(2, data.state, 450, 512);
  draw(2, data.zip, 520, 512);
  draw(2, data.province, 70, 546);
  draw(2, data.postalcode, 224, 546);
  draw(2, data.country, 360, 547);
  draw(2, data.date, 234, 572);

  draw(3, data.careofname1, 70, 121);
  draw(3, data.street1, 70, 159);
  draw(3, data.city1, 70, 193);
  draw(3, data.state1, 450, 193);
  draw(3, data.zip1, 520, 193);
  draw(3, data.province1, 70, 227);
  draw(3, data.postalcode1, 224, 227);
  draw(3, data.country1, 360, 228);

  draw(3, data.slastName, 70, 559);
  draw(3, data.sfirstName, 274, 559);
  draw(3, data.smiddleName, 455, 559);

  draw(3, data.sdob, 70, 606);
  draw(3, data.mdate, 245, 606);
  draw(3, data.sdate, 330, 740);


  
  const aNo = (data.ano || "").toString().padEnd(9); 
  const boxXStart2 = 370; 
  const boxY2 = 90;     
  const boxSpacing2 = 15; 

  for (let i = 0; i < aNo.length; i++) {
    draw(4, aNo[i], boxXStart2 + i * boxSpacing2, boxY2);
  }
  draw(4, data.sno, 545, 116);
  draw(4, data.sCompanyName, 260, 173);
  draw(4, data.name1, 70, 415);
  draw(4, data.dob1, 245, 415);
  draw(4, data.residence1, 300, 415);
  draw(4, data.relationship1, 410, 415);

  draw(4, data.name2, 70, 450);
  draw(4, data.dob2, 245, 450);
  draw(4, data.residence2, 300, 450);
  draw(4, data.relationship2, 410, 450);
  
  draw(4, data.n1, 70, 698);
  draw(4, data.c1, 165, 698);
  draw(4, data.s1, 225, 698);
  draw(4, data.z1, 268, 698);
  draw(4, data.cr, 300, 698);
  draw(4, data.f1, 380, 698);
  draw(4, data.t1, 245, 698);
  draw(4, data.o1, 505, 698);


  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, 'n-400-filled.pdf');
}


