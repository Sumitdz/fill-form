import React from "react";

const Page8 = ({ formData, handleChange }) => (
  <div className="container mt-4">
    <h4 className="text-center mb-4">Additional Information</h4>

    <div className="card p-4 shadow-sm">
      <div className="mb-3">
        <label htmlFor="dres" className="form-label">
          Date Registered <span className="text-muted">(MM/DD/YYYY)</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="dres"
          name="dres"
          value={formData.dres || ""}
          onChange={handleChange}
          placeholder="MM/DD/YYYY"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="serviceno" className="form-label">
          Selective Service Number
        </label>
        <input
          type="text"
          className="form-control"
          id="serviceno"
          name="serviceno"
          value={formData.serviceno || ""}
          onChange={handleChange}
          placeholder="Enter your service number"
        />
      </div>
    </div>
  </div>
);

export default Page8;
