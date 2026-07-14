import { useState } from "react";
import api from "../services/api";
import ResultCard from "./ResultCard";

const HeartForm = () => {
   const [formData, setFormData] = useState({
      Age: 40,
      Sex: "M",
      ChestPainType: "ATA",
      RestingBP: 120,
      Cholesterol: 200,
      FastingBS: 0,
      RestingECG: "Normal",
      MaxHR: 150,
      ExerciseAngina: "N",
      Oldpeak: 1,
      ST_Slope: "Up",
   });

   const [loading, setLoading] = useState(false);
   const [prediction, setPrediction] = useState(null);
   const [error, setError] = useState("");

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
         ...prev,
         [name]:
            name === "Age" ||
               name === "RestingBP" ||
               name === "Cholesterol" ||
               name === "FastingBS" ||
               name === "MaxHR" ||
               name === "Oldpeak"
               ? Number(value)
               : value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);
      setPrediction(null);
      setError("");

      try {
         const res = await api.post("/predict", formData);

         setPrediction(res.data.prediction);
      } catch (err) {
         console.error(err);

         setError("Unable to connect to server.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <form className="heart-form" onSubmit={handleSubmit}>

            <div className="form-grid">

               <div className="form-group">
                  <label>Age</label>

                  <input
                     type="number"
                     name="Age"
                     value={formData.Age}
                     onChange={handleChange}
                     min="18"
                     max="100"
                  />
               </div>

               <div className="form-group">
                  <label>Sex</label>

                  <select
                     name="Sex"
                     value={formData.Sex}
                     onChange={handleChange}
                  >
                     <option value="M">Male</option>
                     <option value="F">Female</option>
                  </select>
               </div>

               <div className="form-group">
                  <label>Chest Pain Type</label>

                  <select
                     name="ChestPainType"
                     value={formData.ChestPainType}
                     onChange={handleChange}
                  >
                     <option value="ATA">ATA</option>
                     <option value="NAP">NAP</option>
                     <option value="TA">TA</option>
                     <option value="ASY">ASY</option>
                  </select>
               </div>

               <div className="form-group">
                  <label>Resting Blood Pressure</label>

                  <input
                     type="number"
                     name="RestingBP"
                     value={formData.RestingBP}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-group">
                  <label>Cholesterol</label>

                  <input
                     type="number"
                     name="Cholesterol"
                     value={formData.Cholesterol}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-group">
                  <label>Fasting Blood Sugar</label>

                  <select
                     name="FastingBS"
                     value={formData.FastingBS}
                     onChange={handleChange}
                  >
                     <option value={0}>No</option>
                     <option value={1}>Yes</option>
                  </select>
               </div>

               <div className="form-group">
                  <label>Resting ECG</label>

                  <select
                     name="RestingECG"
                     value={formData.RestingECG}
                     onChange={handleChange}
                  >
                     <option value="Normal">Normal</option>
                     <option value="ST">ST</option>
                     <option value="LVH">LVH</option>
                  </select>
               </div>

               <div className="form-group">
                  <label>Maximum Heart Rate</label>

                  <input
                     type="number"
                     name="MaxHR"
                     value={formData.MaxHR}
                     onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <label>Exercise Induced Angina</label>

                  <select
                     name="ExerciseAngina"
                     value={formData.ExerciseAngina}
                     onChange={handleChange}
                  >
                     <option value="N">No</option>
                     <option value="Y">Yes</option>
                  </select>
               </div>

               <div className="form-group">
                  <label>Oldpeak (ST Depression)</label>

                  <input
                     type="number"
                     step="0.1"
                     min="0"
                     max="10"
                     name="Oldpeak"
                     value={formData.Oldpeak}
                     onChange={handleChange}
                  />
               </div>

               <div className="form-group">
                  <label>ST Slope</label>

                  <select
                     name="ST_Slope"
                     value={formData.ST_Slope}
                     onChange={handleChange}
                  >
                     <option value="Up">Up</option>
                     <option value="Flat">Flat</option>
                     <option value="Down">Down</option>
                  </select>
               </div>

            </div>

            <button
               type="submit"
               className="predict-btn"
               disabled={loading}
            >
               {loading ? "Predicting..." : "Predict Heart Risk"}
            </button>

         </form>

         {error && (
            <div className="error-box">
               {error}
            </div>
         )}

         {prediction !== null && (
            <ResultCard prediction={prediction} />
         )}
      </>
   );
};

export default HeartForm;