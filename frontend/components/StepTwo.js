import React, { useState } from "react";
import './stepTwo.css';

export default function StepTwo({ prevStep, updateFormData }) {
  const [inputValue, setInputValue] = useState("");
  const [interests, setInterests] = useState([]);
  const [lookingFor, setLookingFor] = useState([]);
  const [workMode, setWorkMode] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddInterest();
    }
  };

  const handleAddInterest = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !interests.includes(trimmed)) {
      setInterests([...interests, trimmed]);
    }
    setInputValue("");
  };

  const removeInterest = (index) => {
    const updated = [...interests];
    updated.splice(index, 1);
    setInterests(updated);
  };

  const toggleOption = (value, array, setArray) => {
    if (array.includes(value)) {
      setArray(array.filter(item => item !== value));
    } else {
      setArray([...array, value]);
    }
  };

  const handleContinue = () => {
    setInputValue("");
    setInterests([]);
    setLookingFor([]);
    setWorkMode([]);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="step-two">
      <h2>Enter your areas of interest</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Type an interest and press Enter"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAddInterest}>Add</button>
      </div>

      <div className="tag-list">
        {interests.map((interest, index) => (
          <div className="tag" key={index}>
            {interest}
            <button onClick={() => removeInterest(index)}>×</button>
          </div>
        ))}
      </div>

      <div className="option-section">
        <h4>Currently looking for</h4>
        <div className="tag-list">
          {["Jobs", "Internships"].map((item) => (
            <div
              key={item}
              className={`tag ${lookingFor.includes(item) ? "selected" : ""}`}
              onClick={() => toggleOption(item, lookingFor, setLookingFor)}
            >
              {item}
              {lookingFor.includes(item) && <button>×</button>}
            </div>
          ))}
        </div>
      </div>

      <div className="option-section">
        <h4>Work mode</h4>
        <div className="tag-list">
          {["In-office", "Work from home"].map((item) => (
            <div
              key={item}
              className={`tag ${workMode.includes(item) ? "selected" : ""}`}
              onClick={() => toggleOption(item, workMode, setWorkMode)}
            >
              {item}
              {workMode.includes(item) && <button>×</button>}
            </div>
          ))}
        </div>
      </div>

      {success && <p className="success-msg">✅ Successfully registered!</p>}

      <div className="button-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
}
