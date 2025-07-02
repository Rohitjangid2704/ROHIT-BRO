import React from "react";
import heroImage1 from "../assets/hero2.svg";
import "./hero1.css";

const Hero1: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-background-text">
        <h1 aria-hidden="true">FITNESS</h1>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span>READY TO GET FIT</span>
            <span>FOR REAL?</span>
          </h1>
          <p className="hero-description">
            No Fluff. No Shortcuts. Just Real Progress. Start Training Today
            And Become The Strongest Version Of You.
          </p>
          <div className="hero-clients">
            <div className="client-images">
              <div className="client-avatars">
                <img
                  className="client-avatar"
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Client 1"
                  style={{ zIndex: 3 }}
                />
                <img
                  className="client-avatar"
                  src="https://i.pravatar.cc/150?img=2"
                  alt="Client 2"
                  style={{ zIndex: 2 }}
                />
                <img
                  className="client-avatar"
                  src="https://i.pravatar.cc/150?img=3"
                  alt="Client 3"
                  style={{ zIndex: 1 }}
                />
              </div>
              <div className="client-stats">
                <p className="client-count">1000+</p>
                <p className="client-label">Satisfied Clients</p>
              </div>
            </div>
          </div>
          <div className="hero-button-container">
            <button className="hero-button">Explore Plans</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={heroImage1} alt="Fitness model" className="hero-image" />
          <div className="hero-badge">
            <p>Certified &</p>
            <p>Trusted Expert</p>
            <div className="hero-badge-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;