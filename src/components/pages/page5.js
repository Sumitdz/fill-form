import React from "react";

const Page4 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Step 4: Previous Residence & Marital Status</h3>

    <div className="form-group">
      <label>Previous Care of Name</label>
      <input name="careofname1" value={formData.careofname1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Street Number and Name</label>
      <input name="street1" value={formData.street1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>City or Town</label>
      <input name="city1" value={formData.city1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>State</label>
      <input name="state1" value={formData.state1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Zip Code</label>
      <input name="zip1" value={formData.zip1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Province</label>
      <input name="province1" value={formData.province1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Postal Code</label>
      <input name="postalcode1" value={formData.postalcode1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Country</label>
      <input name="country1" value={formData.country1 || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Spouse Full Name</label>
      <input placeholder="Last Name" name="slastName" value={formData.slastName || ""} onChange={handleChange} />
      <input placeholder="First Name" name="sfirstName" value={formData.sfirstName || ""} onChange={handleChange} />
      <input placeholder="Middle Name" name="smiddleName" value={formData.smiddleName || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Spouse DOB (mm/dd/yyyy)</label>
      <input name="sdob" value={formData.sdob || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Marriage Date</label>
      <input name="mdate" value={formData.mdate || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Date Spouse Became US Citizen</label>
      <input name="sdate" value={formData.sdate || ""} onChange={handleChange} />
    </div>
  </div>
);

export default Page4;
