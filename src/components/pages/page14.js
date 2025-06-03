import React from "react";

const Page14 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Step 8: Declaration & Signature</h3>

    <div className="form-group">
      <label>Applicant Signature (Full Name)</label>
      <input name="applicantSignature" value={formData.applicantSignature || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Today's Date</label>
      <input type="date" name="signatureDate" value={formData.signatureDate || ""} onChange={handleChange} />
    </div>
  </div>
);

export default Page14;
