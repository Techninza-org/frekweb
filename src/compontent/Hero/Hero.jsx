
import "./hero.css";

import b from "../../assets/Fpage2.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={b} alt="Hero" />
      </div>
      <div className="hero-text">
        <h1>
          <a>Frek App </a>
        </h1>
        <p>
          ❤️💬💑! Frek App, designed for singles, connect with potential
          matches, start meaningful conversations, and share your journey with
          Frek – the ultimate dating app! 📲 is launching soon. Stay tuned for
          an exciting new way to meet and date!
        </p>
      </div>
    </div>
  );
};

export default Hero;
