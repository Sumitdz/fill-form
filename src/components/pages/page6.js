import React from "react";

const Page5 = ({ formData, handleChange }) => (
  <div className="container mt-4">
    <h4 className="text-center mb-4">Marital History, Children & Employment</h4>

    <div className="card p-3 mb-4">
      <div className="mb-3">
        <label className="form-label">Spouse A-Number</label>
        <input
          type="text"
          className="form-control"
          name="ano"
          value={formData.ano || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          How many times has your current spouse been married?
        </label>
        <input
          type="number"
          className="form-control"
          name="sno"
          value={formData.sno || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="form-label">Spouse's Company Name</label>
        <input
          type="text"
          className="form-control"
          name="sCompanyName"
          value={formData.sCompanyName || ""}
          onChange={handleChange}
        />
      </div>
    </div>

    {[1, 2, 3].map((i) => (
      <div className="card mb-4" key={`child${i}`}>
        <div className="card-header fw-semibold">Child {i}</div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 col-md-3">
              <label className="form-label small">Name</label>
              <input
                type="text"
                className="form-control"
                name={`name${i}`}
                value={formData[`name${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-3">
              <label className="form-label small">DOB</label>
              <input
                type="date"
                className="form-control"
                name={`dob${i}`}
                value={formData[`dob${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-3">
              <label className="form-label small">Residence</label>
              <input
                type="text"
                className="form-control"
                name={`residence${i}`}
                value={formData[`residence${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-3">
              <label className="form-label small">Relationship</label>
              <input
                type="text"
                className="form-control"
                name={`relationship${i}`}
                value={formData[`relationship${i}`] || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="form-label">
              Are you providing support for your son or daughter?
            </label>
            <select
              className="form-select"
              name={`dep${i}`}
              value={formData[`dep${i}`] || ""}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>
    ))}

    {[1, 2, 3].map((i) => (
      <div className="card mb-4" key={`employment${i}`}>
        <div className="card-header fw-semibold">Employment or School {i}</div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <label className="form-label small">Name</label>
              <input
                type="text"
                className="form-control"
                name={`n${i}`}
                value={formData[`n${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <label className="form-label small">City</label>
              <input
                type="text"
                className="form-control"
                name={`c${i}`}
                value={formData[`c${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <label className="form-label small">State</label>
              <input
                type="text"
                className="form-control"
                name={`s${i}`}
                value={formData[`s${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <label className="form-label small">Zip Code</label>
              <input
                type="text"
                className="form-control"
                name={`z${i}`}
                value={formData[`z${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <label className="form-label small">Country</label>
              <input
                type="text"
                className="form-control"
                name={`cr${i}`}
                value={formData[`cr${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <label className="form-label small">From</label>
              <input
                type="month"
                className="form-control"
                name={`f${i}`}
                value={formData[`f${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <label className="form-label small">To</label>
              <input
                type="month"
                className="form-control"
                name={`t${i}`}
                value={formData[`t${i}`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <label className="form-label small">Occupation / Field</label>
              <input
                type="text"
                className="form-control"
                name={`o${i}`}
                value={formData[`o${i}`] || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Page5;
