import React, { useState } from "react";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page8 from "./pages/page8";
import Page14 from "./pages/page14";

import { fillN400Pdf } from "../fillPdf";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  const next = () => {
      console.log("Next clicked on step", step); 
    if (step < 8) {
      setStep(step + 1);
    } else if (step === 8) {
      fillN400Pdf(formData);
      setStep(9); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderPage = () => {
    switch (step) {
      case 1: return <Page1 formData={formData} handleChange={handleChange} />;
      case 2: return <Page2 formData={formData} handleChange={handleChange} />;
      case 3: return <Page3 formData={formData} handleChange={handleChange} />;
      case 4: return <Page4 formData={formData} handleChange={handleChange} />;
      case 5: return <Page5 formData={formData} handleChange={handleChange} />;
      case 6: return <Page6 formData={formData} handleChange={handleChange} />;
      case 7: return <Page8 formData={formData} handleChange={handleChange} />;
      case 8: return <Page14 formData={formData} handleChange={handleChange} />;
      case 9:
        return (
          <div style={{ textAlign: "center" }}>
            <h2>PDF generated successfully!</h2>
            <button onClick={() => setStep(1)}>Fill New Form</button>
          </div>
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-container">
      {renderPage()}

      {step < 9 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          {step > 1 && (
            <button
              type="button"
              onClick={prev}
              style={{ marginRight: "10px" }}
            >
              Back
            </button>
          )}

          <button type="button" onClick={next}>
            {step === 8 ? "Generate PDF" : "Next"}
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
