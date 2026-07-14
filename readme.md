# ❤️ Heart Disease Prediction
 
A full-stack **MERN** (MongoDB, Express, React, Node.js) application integrated with a **Machine Learning model** to predict the likelihood of heart disease based on user-provided health parameters.
 
## 🔗 Live Demo
 
**🌐 [Live Application](https://heart-disease-prediction-bice-nine.vercel.app/)** <!-- Replace with your actual deployed link -->
 
** backend hosted on : https://heart-disease-prediction-li1t.onrender.com ** 
## 📌 Overview
 
This project combines a modern full-stack web application with a machine learning backend to help users assess their risk of heart disease. Users input health metrics (such as age, blood pressure, cholesterol, etc.) through a React-based UI, and the ML model returns a prediction in real time.
 
## ✨ Features
 
- 🩺 Predicts heart disease risk based on user health data
- 📊 Interactive and user-friendly interface
- 📈 Displays prediction results with clear insights
- ⚡ Express API-based communication between frontend, backend, and ML model

## 🛠️ Tech Stack
 
**Frontend:**
- React.js
- HTML5, CSS3, JavaScript
- Axios (API calls)
**Backend:**
- Node.js
- Express.js
**Machine Learning:**
- Python
- scikit-learn
- Flask / FastAPI (for serving the ML model)
- Pandas, NumPy
- joblib
## 📂 Project Structure
 
```
Heart-Disease-Prediction/
├── frontend/              # React frontend
├── backend/              # Node.js + Express backend
├── Machine learning model/            # Python ML model & API
│   ├── model.pkl
│   ├── app.py
│   └── requirements.txt
├── README.md
└── package.json
```
 
## ⚙️ Installation & Setup
 
### 1. Clone the repository
```bash
git clone https://github.com/Nitish15032000/Heart-Disease-Prediction.git
cd Heart-Disease-Prediction
```
 
### 2. Setup the Backend
```bash
cd server
npm install    && pip install -r requirements.txt 
npm start
```
 
### 3. Setup the Frontend
```bash
cd client
npm install
npm start
```
 
### 4. Setup the ML Model
```bash
cd ml-model
pip install -r requirements.txt
python app.py
```
 
## 🔑 Environment Variables
 
Create a `.env` file in the `server` directory with the following:
```
PORT=5000
ML_API_URL=http://localhost:5001
```
 
## 🧠 How It Works
 
1. User enters health parameters in the React frontend.
2. Data is sent to the Node.js/Express backend via API.
3. The backend forwards the data to the ML model API (Flask/FastAPI).
4. The ML model processes the input and returns a prediction.
5. The result is sent back and displayed to the user, and optionally stored in MongoDB.
 
 
## 🚀 Future Improvements
 
- Improve ML model accuracy with more training data
- Add user dashboard with prediction history and analytics
- Add doctor/specialist recommendations based on results
- Mobile responsive UI enhancements
- AI chatbot
 
 
## 👤 Author
 
**Nitish Kumar**
- GitHub: [@Nitish15032000](https://github.com/Nitish15032000)