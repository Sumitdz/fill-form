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
        {[
          { value: "A", label: "A) General Provision" },
          { value: "B", label: "B) Spouse of U.S. Citizen" },
          { value: "C", label: "C) VAWA" },
          { value: "D", label: "D) Spouse of U.S. Citizen Abroad" },
          { value: "E", label: "E) Military Service" },
          { value: "F", label: "F) 1 Year Honorable Military" },
          { value: "G", label: "G) Other Reason" },
        ].map(({ value, label }) => (
          <div
            className="form-check d-flex align-items-center mb-2"
            key={value}
          >
            <input
              className="form-check-input"
              type="radio"
              name="eligibilityReason"
              value={value}
              id={`eligibility-${value}`}
              checked={formData.eligibilityReason === value}
              onChange={handleChange}
            />
            <label
              className="form-check-label ms-2"
              htmlFor={`eligibility-${value}`}
            >
              {label}
            </label>
          </div>
        ))}

        {formData.eligibilityReason === "G" && (
          <input
            type="text"
            className="form-control mt-2"
            name="eligibilityReasonOther"
            placeholder="Please specify"
            value={formData.eligibilityReasonOther || ""}
            onChange={handleChange}
          />
        )}
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
