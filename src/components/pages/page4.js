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
          <div className="col-md-4">
            <label className="form-label">City or Town</label>
            <input
              name="city1"
              className="form-control"
              value={formData.city1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              name="state1"
              className="form-control"
              value={formData.state1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
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
          <div className="col-md-4">
            <label className="form-label">Province</label>
            <input
              name="province1"
              className="form-control"
              value={formData.province1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Postal Code</label>
            <input
              name="postalcode1"
              className="form-control"
              value={formData.postalcode1 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
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
            <div className="col-md-4">
              <label className="form-label">Last Name</label>
              <input
                name="slastName"
                className="form-control"
                value={formData.slastName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">First Name</label>
              <input
                name="sfirstName"
                className="form-control"
                value={formData.sfirstName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Middle Name</label>
              <input
                name="smiddleName"
                className="form-control"
                value={formData.smiddleName || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="sdob"
                className="form-control"
                value={formData.sdob || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Marriage Date</label>
              <input
                type="date"
                name="mdate"
                className="form-control"
                value={formData.mdate || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="form-label fw-bold">
              5.a. When did your current spouse become a U.S. citizen?
            </label>
            <div className="form-check">
              <input
                type="radio"
                id="scitizenYes"
                name="sCitizenship"
                value="Yes"
                className="form-check-input"
                checked={formData.sCitizenship === "Yes"}
                onChange={handleChange}
              />
              <label htmlFor="scitizenYes" className="form-check-label">
                By Birth in the United States
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="scitizenOther"
                name="sCitizenship"
                value="Other"
                className="form-check-input"
                checked={formData.sCitizenship === "Other"}
                onChange={handleChange}
              />
              <label htmlFor="scitizenOther" className="form-check-label">
                Other
              </label>
            </div>
          </div>

          <div className="mt-3">
            <label className="form-label">
              5.b. Date Your Current Spouse Became a U.S. Citizen
            </label>
            <input
              type="date"
              name="sdate"
              className="form-control"
              value={formData.sdate || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="form-label fw-bold">
              Is your current spouse's present physical address the same as your
              physical address?
            </label>
            <div className="form-check">
              <input
                type="radio"
                name="sameAdd"
                value="Yes"
                className="form-check-input"
                checked={formData.sameAdd === "Yes"}
                onChange={handleChange}
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="sameAdd"
                value="No"
                className="form-check-input"
                checked={formData.sameAdd === "No"}
                onChange={handleChange}
              />
              <label className="form-check-label">No</label>
            </div>
            {formData.sameAdd === "No" && (
              <p className="text-muted mt-1">
                Provide address in Part 14. Additional Information.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page4;
