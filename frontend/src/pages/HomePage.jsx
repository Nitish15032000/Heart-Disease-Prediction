import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <section className="hero-card">
          <span className="hero-eyebrow">Heart Health AI</span>
          <h1 className="hero-title">
            Predict your <span>heart risk</span> in seconds.
          </h1>
          <p className="hero-subtitle">
            Welcome to the Heart Disease Prediction app. Enter your health details on the next screen and get a clear, fast prediction with smart analytics.
          </p>

          <div className="hero-actions">
            <Link to="/predict" className="hero-btn">
              Check Heart Disease
            </Link>
          </div>

          <p className="hero-note">
            Use the prediction form to quickly see whether your heart health data suggests a possible disease risk.
          </p>
        </section>

        <section className="hero-graphic">
          <div className="hero-glow">
            <div className="animated-ring"></div>
            <div className="animated-ring ring-secondary"></div>
            <div className="hero-chip"></div>
            <div className="hero-chip-two"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
