import React from "react";

const Page1 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Step 1: Eligibility & Basic Info</h3>

    <div className="form-group">
      <label>1. Select your reason for eligibility:</label>
      {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
        <label key={letter}>
          <input
            type="radio"
            name="eligibilityReason"
            value={letter}
            checked={formData.eligibilityReason === letter}
            onChange={handleChange}
          />
          {` ${letter}) ${getEligibilityText(letter)}`}
        </label>
      ))}
    </div>

    <div className="form-group">
      <label>2. Current Legal Name</label>
      <input placeholder="Last Name" name="currentLastName" value={formData.currentLastName || ""} onChange={handleChange} />
      <input placeholder="First Name" name="currentFirstName" value={formData.currentFirstName || ""} onChange={handleChange} />
      <input placeholder="Middle Name" name="currentMiddleName" value={formData.currentMiddleName || ""} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>3. Other Names Used Since Birth</label>
      <input placeholder="Other Last Name" name="otherLastName" value={formData.otherLastName || ""} onChange={handleChange} />
      <input placeholder="Other First Name" name="otherFirstName" value={formData.otherFirstName || ""} onChange={handleChange} />
      <input placeholder="Other Middle Name" name="otherMiddleName" value={formData.otherMiddleName || ""} onChange={handleChange} />
    </div>
  </div>
);

const getEligibilityText = (letter) => {
  const map = {
    A: "General Provision",
    B: "Spouse of U.S. Citizen",
    C: "VAWA",
    D: "Spouse of U.S. Citizen Abroad",
    E: "Military Service",
    F: "1 Year Honorable Military",
    G: "Other Reason",
  };
  return map[letter];
};

export default Page1;
