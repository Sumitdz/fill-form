import React from "react";

const Page2 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Personal Information</h3>

    <div className="form-group">
      <label>Would you like to legally change your name?</label>
      <select name="legalNameChange" value={formData.legalNameChange || ""} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

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
      <label>Gender</label>
      <select name="gender" value={formData.gender || ""} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    <div className="form-group">
      <label>Do you want the Social Security Administration (SSA) to issue you an original or replacement Social Security card and update
             your immigration status with the SSA if and when you are naturalized?</label>
      <select name="ssa" value={formData.ssa || ""} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
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

    <div className="form-group">
    <label>Was your mother or father a U.S. citizen before your 18th birthday?</label>
    <select name="pCitizen" value={formData.pCitizen || ""} onChange={handleChange}>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div className="form-group">
    <label>Do you have a physical or developmental disability or mental impairment that prevents you from
          demonstrating your knowledge and understanding of the English language or civics requirements for
          naturalization?</label>
    <select name="disability" value={formData.disability || ""} onChange={handleChange}>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

    <div className="form-group">
    <label>Do you want SSA?</label>
    <select name="wantssa" value={formData.wantssa || ""} onChange={handleChange}>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>
  </div>
);

export default Page2;
