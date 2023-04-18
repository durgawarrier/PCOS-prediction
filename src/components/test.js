import React, { useState } from "react";
import "./test.css";

const PCOSForm = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [periods, setPeriods] = useState("");
  const [hair, setHair] = useState("");
  const [acne, setAcne] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform calculations and prediction based on form inputs here
    // Set the prediction result using setResult
  };

  return (
    <div className="pcos-form">
      <h1>PCOS Prediction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="periods">Number of periods per year:</label>
        <input
          type="number"
          id="periods"
          value={periods}
          onChange={(e) => setPeriods(e.target.value)}
        />

        <label htmlFor="hair">Excessive hair growth:</label>
        <select id="hair" value={hair} onChange={(e) => setHair(e.target.value)}>
          <option value="none">None</option>
          <option value="mild">Mild</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>

        <label htmlFor="acne">Acne:</label>
        <select id="acne" value={acne} onChange={(e) => setAcne(e.target.value)}>
          <option value="none">None</option>
          <option value="mild">Mild</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>

        <button type="submit">Predict</button>
      </form>

      {result && (
        <div className="pcos-result">
          <h3>Prediction Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default PCOSForm;
