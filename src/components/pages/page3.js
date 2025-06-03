import React from "react";

const Page3 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Step 3: Residence Address</h3>

    <div className="form-group">
      <label>Care of Name</label>
      <input name="careofname" value={formData.careofname || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Street Number and Name</label>
      <input name="street" value={formData.street || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>City or Town</label>
      <input name="city" value={formData.city || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>State</label>
      <input name="state" value={formData.state || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Zip Code</label>
      <input name="zip" value={formData.zip || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Province</label>
      <input name="province" value={formData.province || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Postal Code</label>
      <input name="postalcode" value={formData.postalcode || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Country</label>
      <input name="country" value={formData.country || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Dates of Residence: From (mm/dd/yyyy)</label>
      <input name="date" value={formData.date || ""} onChange={handleChange} />
    </div>
  </div>
);

export default Page3;
