// DiyProgramHero.tsx

import React from "react";
import { Dumbbell, CalendarCheck, Youtube } from "lucide-react";
import heroImage2 from "../assets/hero1.svg";
import "./hero2.css"; // Make sure the CSS file name matches

const Hero2: React.FC = () => {
  return (
    <div className="diy-program-container">
      <div className="diy-program-gradient-overlay"></div>
      <div className="diy-program-background-text">
        <h1 aria-hidden="true">FITNESS</h1>
      </div>

      <div className="diy-program-content-grid">
        <div className="diy-program-text-section">
          <span className="diy-program-intro-badge">Do It Yourself</span>
          <h1 className="diy-program-main-title">
            <span>BURN BELLY FAT.</span>
            <span>BOOST CONFIDENCE.</span>
          </h1>

          <p className="diy-program-description">
            Sculpt Your Core And Kickstart Your Fitness Journey With This
            21-Day DIY Program. Designed To Be Done At Home, At Your Pace - No
            Equipment, No Excuses.
          </p>

          <div className="diy-program-features-list">
            <div className="diy-program-feature-item">
              <Dumbbell className="diy-program-feature-icon" />
              <p className="diy-program-feature-text">
                21-Day structured fat-loss workout plan
              </p>
            </div>
            <div className="diy-program-feature-item">
              <CalendarCheck className="diy-program-feature-icon" />
              <p className="diy-program-feature-text">
                Core-focused, beginner-friendly routines
              </p>
            </div>
            <div className="diy-program-feature-item">
              <Youtube className="diy-program-feature-icon" />
              <p className="diy-program-feature-text">
                Easy-to-follow daily videos & guidance
              </p>
            </div>
          </div>

          <div className="diy-program-cta-container">
            <button className="diy-program-cta-button">
              Start My 21-Day Journey @INR 999
            </button>
          </div>
        </div>

        <div className="diy-program-image-wrapper">
          <img
            src={heroImage2}
            alt="Fitness model"
            className="diy-program-main-image"
          />

          <div className="diy-program-image-badge">
            <p>One-time access,</p>
            <p>lifetime results</p>
            <div className="diy-program-image-badge-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;