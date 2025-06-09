import React from "react";

const Page3 = ({ formData, handleChange }) => {
  const handleRaceChange = (e) => {
    const { value, checked } = e.target;
    const updated = new Set(formData.race || []);
    checked ? updated.add(value) : updated.delete(value);
    handleChange({ target: { name: "race", value: Array.from(updated) } });
  };

  return (
    <div className="form-container">
      <h3 style={{ textAlign: "center" }}>Step 3: Residence Address</h3>

      <div className="form-group">
        <label>Care of Name</label>
        <input name="careofname" value={formData.careofname || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Street Number and Name</label>
        <input name="street" value={formData.street || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>City or Town</label>
        <input name="city" value={formData.city || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>State</label>
        <input name="state" value={formData.state || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Zip Code</label>
        <input name="zip" value={formData.zip || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Province</label>
        <input name="province" value={formData.province || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Postal Code</label>
        <input name="postalcode" value={formData.postalcode || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Country</label>
        <input name="country" value={formData.country || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Dates of Residence: From (mm/dd/yyyy)</label>
        <input name="date" value={formData.date || ""} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Is your current physical address also your current mailing address?</label>
        <select name="mailAdd" value={formData.mailAdd || ""} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h3 style={{ textAlign: "center" }}>Biographic Information</h3>

      <div className="form-group">
        <label><strong>Ethnicity</strong></label>
        <div style={{ display: "flex", gap: "20px", marginTop: "5px" }}>
          <label>
            <input
              type="radio"
              name="ethnicity"
              value="Hispanic"
              checked={formData.ethnicity === "Hispanic"}
              onChange={handleChange}
            />
            Hispanic or Latino
          </label>
          <label>
            <input
              type="radio"
              name="ethnicity"
              value="NotHispanic"
              checked={formData.ethnicity === "NotHispanic"}
              onChange={handleChange}
            />
            Not Hispanic or Latino
          </label>
        </div>
      </div>

      <div className="form-group">
        <label><strong>Race (select all that apply)</strong></label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "5px" }}>
          {["American Indian", "Asian", "Black", "Pacific Islander", "White"].map(race => (
            <label key={race}>
              <input
                type="checkbox"
                value={race}
                checked={formData.race?.includes(race)}
                onChange={handleRaceChange}
              />{" "}
              {race}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <label><strong>Height</strong></label>
        <input
          placeholder="Feet"
          name="heightFeet"
          value={formData.heightFeet || ""}
          onChange={handleChange}
          style={{ width: "60px" }}
        />
        <input
          placeholder="Inches"
          name="heightInches"
          value={formData.heightInches || ""}
          onChange={handleChange}
          style={{ width: "60px" }}
        />
      </div>

      <div className="form-group">
        <label><strong>Weight (lbs)</strong></label>
        <input
          name="weight"
          value={formData.weight || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label><strong>Eye Color</strong></label>
        <select name="eyeColor" value={formData.eyeColor || ""} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Brown">Brown</option>
          <option value="Gray">Gray</option>
          <option value="Green">Green</option>
          <option value="Hazel">Hazel</option>
          <option value="Maroon">Maroon</option>
          <option value="Pink">Pink</option>
          <option value="Unknown">Unknown/Other</option>
        </select>
      </div>

      <div className="form-group">
        <label><strong>Hair Color</strong></label>
        <select name="hairColor" value={formData.hairColor || ""} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Bald">Bald</option>
          <option value="Black">Black</option>
          <option value="Blond">Blond</option>
          <option value="Brown">Brown</option>
          <option value="Gray">Gray</option>
          <option value="Red">Red</option>
          <option value="Sandy">Sandy</option>
          <option value="White">White</option>
          <option value="Unknown">Unknown/Other</option>
        </select>
      </div>

      

    </div>
  );
};

export default Page3;
