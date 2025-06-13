import React from "react";

const Page4 = ({ formData, handleChange }) => {
  return (
    <div>
      <h4 className="mb-4 text-center">Mailing Address</h4>

      <div className="card p-3 mb-4">
        <div className="mb-3">
          <label className="form-label">In Care Of Name</label>
          <input
            name="careofname1"
            className="form-control"
            value={formData.careofname1 || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Street Number and Name</label>
          <input
            name="street1"
            className="form-control"
            value={formData.street1 || ""}
            onChange={handleChange}
          />
        </div>

        <div className="row g-3">
          <div className="col-12 col-md-4">
            <label className="form-label">City or Town</label>
            <input
              name="city1"
              className="form-control"
              value={formData.city1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label">State</label>
            <input
              name="state1"
              className="form-control"
              value={formData.state1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label">ZIP Code</label>
            <input
              name="zip1"
              className="form-control"
              value={formData.zip1 || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-12 col-md-4">
            <label className="form-label">Province</label>
            <input
              name="province1"
              className="form-control"
              value={formData.province1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label">Postal Code</label>
            <input
              name="postalcode1"
              className="form-control"
              value={formData.postalcode1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label">Country</label>
            <input
              name="country1"
              className="form-control"
              value={formData.country1 || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold">Marital Status</label>
        <select
          name="maritalStatus"
          className="form-select"
          value={formData.maritalStatus || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
      </div>

      {formData.maritalStatus === "Married" && (
        <div className="card p-3 mb-4">
          <h5 className="card-title mb-3">Spouse Information</h5>

          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">Family Name</label>
              <input
                name="sfamilyName"
                className="form-control"
                value={formData.sfamilyName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Given Name</label>
              <input
                name="sgivenName"
                className="form-control"
                value={formData.sgivenName || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="sdob"
              className="form-control"
              value={formData.sdob || ""}
              onChange={handleChange}
            />
          </div>

          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">Country of Birth</label>
              <input
                name="scountryBirth"
                className="form-control"
                value={formData.scountryBirth || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Country of Citizenship</label>
              <input
                name="scountryCitizen"
                className="form-control"
                value={formData.scountryCitizen || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">Date of Marriage</label>
            <input
              type="date"
              name="sdom"
              className="form-control"
              value={formData.sdom || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page4;
