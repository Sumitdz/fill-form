import React from "react";

const Page14 = ({ formData, handleChange }) => (
  <div className="container mt-4">
    <h4 className="text-center mb-4">Declaration & Signature</h4>

    <div className="card p-4 shadow-sm">
      <div className="mb-3">
        <label htmlFor="applicantSignature" className="form-label">
          Applicant Signature (Full Name)
        </label>
        <input
          type="text"
          className="form-control"
          id="applicantSignature"
          name="applicantSignature"
          value={formData.applicantSignature || ""}
          onChange={handleChange}
          placeholder="Enter full name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signatureDate" className="form-label">
          Date of Signature
        </label>
        <input
          type="date"
          className="form-control"
          id="signatureDate"
          name="signatureDate"
          value={formData.signatureDate || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
);

export default Page14;
