import React from "react";

const Page1 = ({ formData, handleChange }) => (
  <div className="form-container">
    <h3>Eligibility and Basic Information</h3>

    <div className="form-group">
      <label>1. A Number</label>
      <input
        name="aNumber"
        value={formData.aNumber || ""}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
  <label>2. Select your reason for eligibility:</label>
  {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
    <div
      key={letter}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="radio"
          name="eligibilityReason"
          value={letter}
          checked={formData.eligibilityReason === letter}
          onChange={handleChange}
        />
        {` ${letter}) ${getEligibilityText(letter)}`}
      </label>

      {letter === "G" && formData.eligibilityReason === "G" && (
        <input
          type="text"
          name="eligibilityReasonOther"
          placeholder="Please specify"
          value={formData.eligibilityReasonOther || ""}
          onChange={handleChange}
          style={{ flex: 1 }}
        />
      )}
    </div>
  ))}
</div>


    <div className="form-group">
      <label>3. Current Legal Name</label>
      <input
        placeholder="Last Name"
        name="currentLastName"
        value={formData.currentLastName || ""}
        onChange={handleChange}
      />
      <input
        placeholder="First Name"
        name="currentFirstName"
        value={formData.currentFirstName || ""}
        onChange={handleChange}
      />
      <input
        placeholder="Middle Name"
        name="currentMiddleName"
        value={formData.currentMiddleName || ""}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label>4. Other Names Used Since Birth</label>
      <input
        placeholder="Other Last Name"
        name="otherLastName"
        value={formData.otherLastName || ""}
        onChange={handleChange}
      />
      <input
        placeholder="Other First Name"
        name="otherFirstName"
        value={formData.otherFirstName || ""}
        onChange={handleChange}
      />
      <input
        placeholder="Other Middle Name"
        name="otherMiddleName"
        value={formData.otherMiddleName || ""}
        onChange={handleChange}
      />
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
