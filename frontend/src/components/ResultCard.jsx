import React from "react";

const ResultCard = ({ prediction }) => {

  const isHighRisk = prediction === 1;

  return (
    <div
      className={
        isHighRisk
          ? "result-card danger"
          : "result-card success"
      }
    >
      <div className="result-icon">
        {isHighRisk ? "⚠️" : "✅"}
      </div>

      <h2>
        {isHighRisk
          ? "High Risk of Heart Disease"
          : "Low Risk of Heart Disease"}
      </h2>

      <p>
        {isHighRisk
          ? "Please consult a healthcare professional for further evaluation."
          : "Your prediction indicates a lower likelihood of heart disease."}
      </p>
    </div>
  );
};

export default ResultCard;