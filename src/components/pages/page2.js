import React from "react";

const Page2 = ({ formData, handleChange }) => (
  <div>
    <h4 className="mb-4 text-center">Personal Information</h4>

    <div className="mb-3">
      <label className="form-label">
        Would you like to legally change your name?
      </label>
      <select
        className="form-select"
        name="legalNameChange"
        value={formData.legalNameChange || ""}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="mb-3">
      <label className="form-label">Full Legal Name</label>
      <div className="row g-2">
        <div className="col-12 col-md">
          <input
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md">
          <input
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md">
          <input
            className="form-control"
            placeholder="Middle Name"
            name="middleName"
            value={formData.middleName || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>

    <div className="mb-3">
      <label className="form-label">USCIS Online Account Number</label>
      <input
        className="form-control"
        name="uscisNumber"
        value={formData.uscisNumber || ""}
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Gender</label>
      <select
        className="form-select"
        name="gender"
        value={formData.gender || ""}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    <div className="mb-3">
      <label className="form-label">
        Do you want SSA to issue or replace your Social Security card and update
        your immigration status?
      </label>
      <select
        className="form-select"
        name="ssa"
        value={formData.ssa || ""}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="mb-3">
      <label className="form-label">Social Security Number</label>
      <input
        className="form-control"
        name="ssn"
        value={formData.ssn || ""}
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Date of Birth (mm/dd/yyyy)</label>
      <input
        type="date"
        className="form-control"
        name="dob"
        value={formData.dob || ""}
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Country of Birth</label>
      <input
        className="form-control"
        name="countryofbirth"
        value={formData.countryofbirth || ""}
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Country of Citizenship</label>
      <input
        className="form-control"
        name="countryofcitizenship"
        value={formData.countryofcitizenship || ""}
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">
        Was your mother or father a U.S. citizen before your 18th birthday?
      </label>
      <select
        className="form-select"
        name="pCitizen"
        value={formData.pCitizen || ""}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="mb-3">
      <label className="form-label">
        Do you have a disability or impairment preventing English or civics test
        participation?
      </label>
      <select
        className="form-select"
        name="disability"
        value={formData.disability || ""}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="mb-3">
      <label className="form-label">Do you want SSA?</label>
      <select
        className="form-select"
        name="wantssa"
        value={formData.wantssa || ""}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  </div>
);

export default Page2;
