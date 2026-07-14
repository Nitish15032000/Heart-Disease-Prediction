import HeartForm from "../components/HeartForm";

function ResultPage() {
  return (
    <div className="container">

      <div className="card">

        <h1 className="title">
          ❤️ Heart Disease Prediction
        </h1>

        <p className="subtitle">
          Fill in the details below to predict the risk of heart disease.
        </p>

        <HeartForm />

      </div>

    </div>
  );
}

export default ResultPage;