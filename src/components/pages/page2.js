import React from "react";

const Page2 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Step 2: Personal Information</h3>

    <div className="form-group">
      <label>Full Legal Name</label>
      <input placeholder="Last Name" name="lastName" value={formData.lastName || ""} onChange={handleChange} />
      <input placeholder="First Name" name="firstName" value={formData.firstName || ""} onChange={handleChange} />
      <input placeholder="Middle Name" name="middleName" value={formData.middleName || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>USCIS Online Account Number</label>
      <input name="uscisNumber" value={formData.uscisNumber || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Social Security Number</label>
      <input name="ssn" value={formData.ssn || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Date of Birth (mm/dd/yyyy)</label>
      <input name="dob" value={formData.dob || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Country of Birth</label>
      <input name="countryofbirth" value={formData.countryofbirth || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Country of Citizenship</label>
      <input name="countryofcitizenship" value={formData.countryofcitizenship || ""} onChange={handleChange} />
    </div>
  </div>
);

export default Page2;
