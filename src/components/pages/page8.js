import React from "react";

const Page8 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Step 7: Additional Information</h3>

    <div className="form-group">
      <label>Date Registered (mm/dd/yyyy)</label>
      <input name="dres" value={formData.dres || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Selective Service Number</label>
      <input name="serviceno" value={formData.serviceno || ""} onChange={handleChange} />
    </div>
  </div>
);

export default Page8;
