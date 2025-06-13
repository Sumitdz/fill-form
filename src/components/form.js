import React, { useState } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
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
    if (step < 7) {
      setStep(step + 1);
    } else if (step === 7) {
      fillN400Pdf(formData);
      setStep(8);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderPage = () => {
    switch (step) {
      case 1:
        return <Page1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Page2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Page3 formData={formData} handleChange={handleChange} />;
      case 4:
        return <Page4 formData={formData} handleChange={handleChange} />;
      case 5:
        return <Page6 formData={formData} handleChange={handleChange} />;
      case 6:
        return <Page8 formData={formData} handleChange={handleChange} />;
      case 7:
        return <Page14 formData={formData} handleChange={handleChange} />;
      case 8:
        return (
          <div className="text-center p-4">
            <h3 className="mb-4 text-success">PDF generated successfully</h3>
            <button
              className="btn btn-primary"
              onClick={() => {
                setFormData({});
                setStep(1);
              }}
            >
              Fill New Form
            </button>
          </div>
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                {renderPage()}

                {step < 8 && (
                  <>
                    {step === 1 ? (
                      <div className="text-center mt-4">
                        <button
                          type="button"
                          className="btn btn-primary nav-button px-5"
                          onClick={next}
                        >
                          Next
                        </button>
                      </div>
                    ) : (
                      <div className="mt-4 row gx-2">
                        {step > 1 && (
                          <div className="col-12 col-md-auto mb-2 mb-md-0">
                            <button
                              type="button"
                              className="btn btn-secondary w-100 nav-button"
                              onClick={prev}
                            >
                              Back
                            </button>
                          </div>
                        )}
                        <div className="col-12 col-md-auto ms-md-auto">
                          <button
                            type="button"
                            className="btn btn-primary w-100 nav-button"
                            onClick={next}
                          >
                            {step === 7 ? "Generate PDF" : "Next"}
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
