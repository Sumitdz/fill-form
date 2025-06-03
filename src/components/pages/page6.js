import React from "react";

const Page5 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Step 5: Marital History, Children & Employment</h3>

    <div className="form-group">
      <label>Spouse A-Number</label>
      <input name="ano" value={formData.ano || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>How many times has your current spouse been married?</label>
      <input name="sno" value={formData.sno || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Spouse's Company Name</label>
      <input name="sCompanyName" value={formData.sCompanyName || ""} onChange={handleChange} />
    </div>

    {[1, 2, 3].map((i) => (
      <div className="form-group" key={i}>
        <label>{`Child ${i}`}</label>
        <input placeholder="Name" name={`name${i}`} value={formData[`name${i}`] || ""} onChange={handleChange} />
        <input placeholder="Date of Birth" name={`dob${i}`} value={formData[`dob${i}`] || ""} onChange={handleChange} />
        <input placeholder="Residence" name={`residence${i}`} value={formData[`residence${i}`] || ""} onChange={handleChange} />
        <input placeholder="Relationship" name={`relationship${i}`} value={formData[`relationship${i}`] || ""} onChange={handleChange} />
      </div>
    ))}

    {[1, 2, 3].map((i) => (
      <div className="form-group" key={i}>
        <label>{`Employment or School ${i}`}</label>
        <input placeholder="Name" name={`n${i}`} value={formData[`n${i}`] || ""} onChange={handleChange} />
        <input placeholder="City" name={`c${i}`} value={formData[`c${i}`] || ""} onChange={handleChange} />
        <input placeholder="State" name={`s${i}`} value={formData[`s${i}`] || ""} onChange={handleChange} />
        <input placeholder="Zip Code" name={`z${i}`} value={formData[`z${i}`] || ""} onChange={handleChange} />
        <input placeholder="Country" name={`cr${i}`} value={formData[`cr${i}`] || ""} onChange={handleChange} />
        <input placeholder="From" name={`f${i}`} value={formData[`f${i}`] || ""} onChange={handleChange} />
        <input placeholder="To" name={`t${i}`} value={formData[`t${i}`] || ""} onChange={handleChange} />
        <input placeholder="Occupation/Field" name={`o${i}`} value={formData[`o${i}`] || ""} onChange={handleChange} />
      </div>
    ))}
  </div>
);

export default Page5;
