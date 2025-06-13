import React from "react";

const Page3 = ({ formData, handleChange }) => {
  const handleRaceChange = (e) => {
    const { value, checked } = e.target;
    const updated = new Set(formData.race || []);
    checked ? updated.add(value) : updated.delete(value);
    handleChange({ target: { name: "race", value: Array.from(updated) } });
  };

  return (
    <div>
      <h4 className="mb-4 text-center">Residence Address</h4>

      <div className="mb-3">
        <label className="form-label">Care of Name</label>
        <input
          name="careofname"
          className="form-control"
          value={formData.careofname || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Street Number and Name</label>
        <input
          name="street"
          className="form-control"
          value={formData.street || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-4">
          <label className="form-label">City or Town</label>
          <input
            name="city"
            className="form-control"
            value={formData.city || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label">State</label>
          <input
            name="state"
            className="form-control"
            value={formData.state || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label">Zip Code</label>
          <input
            name="zip"
            className="form-control"
            value={formData.zip || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row g-3 mt-3">
        <div className="col-12 col-md-4">
          <label className="form-label">Province</label>
          <input
            name="province"
            className="form-control"
            value={formData.province || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label">Postal Code</label>
          <input
            name="postalcode"
            className="form-control"
            value={formData.postalcode || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label">Country</label>
          <input
            name="country"
            className="form-control"
            value={formData.country || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3 mt-3">
        <label className="form-label">
          Dates of Residence: From (mm/dd/yyyy)
        </label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={formData.date || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="form-label">
          Is your current physical address also your mailing address?
        </label>
        <select
          name="mailAdd"
          className="form-select"
          value={formData.mailAdd || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <hr className="my-4" />
      <h4 className="mb-4 text-center">Biographic Information</h4>

      <div className="mb-4">
        <label className="form-label fw-bold d-block mb-2">1. Ethnicity</label>
        <div className="p-3 bg-light border rounded compact-check">
          {[
            { label: "Hispanic or Latino", value: "Hispanic" },
            { label: "Not Hispanic or Latino", value: "NotHispanic" },
          ].map(({ label, value }) => (
            <div className="form-check" key={value}>
              <input
                className="form-check-input"
                type="radio"
                name="ethnicity"
                value={value}
                checked={formData.ethnicity === value}
                onChange={handleChange}
                id={`ethnicity-${value}`}
              />
              <label
                className="form-check-label"
                htmlFor={`ethnicity-${value}`}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold d-block mb-2">
          2. Race <small className="text-muted">(Select all that apply)</small>
        </label>
        <div className="p-3 bg-light border rounded compact-check">
          {[
            "American Indian",
            "Asian",
            "Black",
            "Pacific Islander",
            "White",
          ].map((race) => (
            <div className="form-check" key={race}>
              <input
                className="form-check-input"
                type="checkbox"
                value={race}
                checked={formData.race?.includes(race)}
                onChange={handleRaceChange}
                id={`race-${race}`}
              />
              <label className="form-check-label" htmlFor={`race-${race}`}>
                {race}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="row g-3 mb-3 align-items-center">
        <div className="col-auto">
          <label className="form-label fw-bold mb-0">Height</label>
        </div>
        <div className="col">
          <input
            placeholder="Feet"
            name="heightFeet"
            className="form-control"
            value={formData.heightFeet || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            placeholder="Inches"
            name="heightInches"
            className="form-control"
            value={formData.heightInches || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Weight (lbs)</label>
        <input
          name="weight"
          className="form-control"
          value={formData.weight || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Eye Color</label>
        <select
          name="eyeColor"
          className="form-select"
          value={formData.eyeColor || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {[
            "Black",
            "Blue",
            "Brown",
            "Gray",
            "Green",
            "Hazel",
            "Maroon",
            "Pink",
            "Unknown",
          ].map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold">Hair Color</label>
        <select
          name="hairColor"
          className="form-select"
          value={formData.hairColor || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {[
            "Bald",
            "Black",
            "Blond",
            "Brown",
            "Gray",
            "Red",
            "Sandy",
            "White",
            "Unknown",
          ].map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Page3;
