import React from "react";

const Page1 = ({ formData, handleChange }) => (
  <div>
    <h4 className="mb-4 text-center">Eligibility and Basic Information</h4>

    <div className="mb-3">
      <label className="form-label">1. A Number</label>
      <input
        type="text"
        name="aNumber"
        className="form-control"
        value={formData.aNumber || ""}
        onChange={handleChange}
      />
    </div>

    <div className="mb-4">
      <label className="form-label fw-bold">
        2. Select your reason for eligibility:
      </label>
      <div className="border rounded p-3 bg-light">
        <div className="row gy-2">
          {[
            { value: "A", label: "A) General Provision" },
            { value: "B", label: "B) Spouse of U.S. Citizen" },
            { value: "C", label: "C) VAWA" },
            { value: "D", label: "D) Spouse of U.S. Citizen Abroad" },
            { value: "E", label: "E) Military Service" },
            { value: "F", label: "F) 1 Year Honorable Military" },
            { value: "G", label: "G) Other Reason" },
          ].map(({ value, label }) => (
            <div className="col-12" key={value}>
              <label
                htmlFor={`eligibility-${value}`}
                className={`d-flex align-items-center p-3 rounded border ${
                  formData.eligibilityReason === value
                    ? "border-primary bg-white shadow-sm"
                    : "bg-light"
                }`}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="radio"
                  className="form-check-input me-2"
                  name="eligibilityReason"
                  id={`eligibility-${value}`}
                  value={value}
                  checked={formData.eligibilityReason === value}
                  onChange={handleChange}
                />
                <span className="flex-grow-1">{label}</span>
              </label>
            </div>
          ))}

          {formData.eligibilityReason === "G" && (
            <div className="col-12">
              <input
                type="text"
                className="form-control mt-2"
                name="eligibilityReasonOther"
                placeholder="Please specify"
                value={formData.eligibilityReasonOther || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="mb-3">
      <label className="form-label">3. Current Legal Name</label>
      <div className="row g-2">
        <div className="col-12 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="currentLastName"
            value={formData.currentLastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="currentFirstName"
            value={formData.currentFirstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Middle Name"
            name="currentMiddleName"
            value={formData.currentMiddleName || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>

    <div className="mb-3">
      <label className="form-label">4. Other Names Used Since Birth</label>
      <div className="row g-2">
        <div className="col-12 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Other Last Name"
            name="otherLastName"
            value={formData.otherLastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Other First Name"
            name="otherFirstName"
            value={formData.otherFirstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Other Middle Name"
            name="otherMiddleName"
            value={formData.otherMiddleName || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Page1;
