import React from "react";
import { Dumbbell, CalendarCheck, Youtube } from "lucide-react";
import heroImage2 from "../assets/hero1.svg";

const Hero2: React.FC = () => {
  return (
    <>
      <style>
        {`
          .hero2-container {
            position: relative;
            display: flex;
            min-height: calc(100vh - 50px);
            width: 100vw;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: url('/BG.jpeg');
            background-size: cover;
            background-position: center;
            padding: 1rem;
          }

          @media (min-width: 480px) {
            .hero2-container {
              padding: 2rem;
            }
          }

          @media (min-width: 768px) {
            .hero2-container {
              padding: 3.2rem;
            }
          }

          .hero2-background-text {
            position: absolute;
            bottom: 20px;
            left: 0;
            right: 0;
            text-align: center;
            pointer-events: none;
            z-index: 0;
            width: 100vw;
          }

          .hero2-background-text h1 {
            font-size: 60px;
            font-weight: 800;
            color: #e7e7e7;
            opacity: 0.4;
            user-select: none;
            line-height: 0.8;
            margin: 0;
            white-space: nowrap;
          }

          @media (min-width: 480px) {
            .hero2-background-text {
              bottom: 30px;
            }
            .hero2-background-text h1 {
              font-size: 100px;
              opacity: 0.5;
            }
          }

          @media (min-width: 768px) {
            .hero2-background-text {
              bottom: 40px;
            }
            .hero2-background-text h1 {
              font-size: 160px;
              opacity: 0.6;
            }
          }

          @media (min-width: 1024px) {
            .hero2-background-text {
              bottom: 10px;
            }
            .hero2-background-text h1 {
              font-size: 240px;
              opacity: 0.7;
            }
          }

          @media (min-width: 1280px) {
            .hero2-background-text h1 {
              font-size: 425px;
              opacity: 0.8;
            }
          }

          .hero2-content {
            width: 90vw;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            align-items: center;
            position: relative;
            z-index: 10;
          }

          @media (min-width: 768px) {
            .hero2-content {
              grid-template-columns: 1fr 1fr;
              gap: 48px;
              max-width: 90vw;
            }
          }

          // @media (min-width: 1200px) {
          //   .hero2-content {
          //     max-width: 1500px;
          //     gap: 64px;
          //   }
          // }

          .hero2-text-content {
            text-align: center;
            max-width: 100%;
            order: 1;
          }

          @media (min-width: 768px) {
            .hero2-text-content {
              text-align: left;
              order: 1;
              max-width: none;
            }
          }

          .hero2-badge {
            display: inline-block;
            background-color: #e9d5ff;
            color: #6b21a8;
            font-size: 12px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 5px;
            margin-bottom: 12px;
          }

          @media (min-width: 480px) {
            .hero2-badge {
              font-size: 14px;
              padding: 8px 16px;
              margin-bottom: 16px;
            }
          }

          .hero2-title {
            margin: 0 0 16px 0;
            font-size: 28px;
            font-weight: 600;
            line-height: 1.1;
          }

          @media (min-width: 480px) {
            .hero2-title {
              font-size: 36px;
              margin-bottom: 20px;
            }
          }

          @media (min-width: 768px) {
            .hero2-title {
              font-size: 48px;
              margin-bottom: 24px;
            }
          }

          @media (min-width: 1024px) {
            .hero2-title {
              font-size: 56px;
            }
          }

          .hero2-title span {
            display: block;
            color: #000000;
            text-shadow: 1px 1px 0 #b590e2;
          }

          @media (min-width: 768px) {
            .hero2-title span {
              text-shadow: 2px 2px 0 #b590e2;
            }
          }

          .hero2-description {
            font-size: 14px;
            color: #666666;
            line-height: 1.6;
            margin-bottom: 20px;
            max-width: 100%;
          }

          @media (min-width: 480px) {
            .hero2-description {
              font-size: 16px;
              margin-bottom: 24px;
            }
          }

          @media (min-width: 768px) {
            .hero2-description {
              font-size: 18px;
              max-width: 500px;
              margin-bottom: 32px;
            }
          }

          .hero2-features {
            display: flex;
            flex-direction: column;
            gap: 16px;
            text-align: left;
            margin-bottom: 24px;
          }

          @media (min-width: 480px) {
            .hero2-features {
              gap: 18px;
              margin-bottom: 28px;
            }
          }

          @media (min-width: 768px) {
            .hero2-features {
              margin-bottom: 32px;
              max-width: 450px;
            }
          }

          .hero2-feature {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          @media (min-width: 480px) {
            .hero2-feature {
              gap: 16px;
              align-items: center;
            }
          }

          .hero2-feature-icon {
            width: 20px;
            height: 20px;
            color: #8b5cf6;
            flex-shrink: 0;
            margin-top: 2px;
          }

          @media (min-width: 480px) {
            .hero2-feature-icon {
              width: 24px;
              height: 24px;
              margin-top: 0;
            }
          }

          @media (min-width: 768px) {
            .hero2-feature-icon {
              width: 28px;
              height: 28px;
            }
          }

          .hero2-feature-text {
            font-size: 13px;
            color: #555555;
            line-height: 1.4;
            flex: 1;
          }

          @media (min-width: 480px) {
            .hero2-feature-text {
              font-size: 15px;
            }
          }

          @media (min-width: 768px) {
            .hero2-feature-text {
              font-size: 16px;
            }
          }

          .hero2-button-container {
            width: 100%;
          }

          .hero2-button {
            width: 100%;
            max-width: 100%;
            padding: 12px 20px;
            background-color: white;
            border: 1px solid #222222;
            box-shadow: 3px 3px 0 #b590e2;
            border-radius: 2px;
            font-weight: 600;
            color: black;
            font-size: 14px;
            transition: all 0.2s ease;
            cursor: pointer;
          }

          @media (min-width: 480px) {
            .hero2-button {
              font-size: 15px;
              padding: 14px 24px;
            }
          }

          @media (min-width: 768px) {
            .hero2-button {
              font-size: 16px;
              padding: 16px 32px;
              max-width: 450px;
              box-shadow: 4px 4px 0 #b590e2;
            }
          }

          .hero2-button:hover {
            transform: translateY(-1px);
            box-shadow: 4px 5px 0 #b590e2;
          }

          @media (min-width: 768px) {
            .hero2-button:hover {
              box-shadow: 5px 6px 0 #b590e2;
            }
          }

          .hero2-image-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            order: 2;
            margin-top: 16px;
          }

          @media (min-width: 768px) {
            .hero2-image-container {
              order: 2;
              margin-top: 0;
            }
          }

          .hero2-image {
            width: 100%;
            max-width: 280px;
            height: auto;
            z-index: 20;
          }

          @media (min-width: 480px) {
            .hero2-image {
              max-width: 320px;
            }
          }

          @media (min-width: 768px) {
            .hero2-image {
              min-width: 470px;
            }
          }

          @media (min-width: 1024px) {
            .hero2-image {
              max-width: 470px;
            }
          }

          @media (min-width: 1280px) {
            .hero2-image {
              max-width: 480px;
            }
          }

          .hero2-floating-badge {
            position: absolute;
            bottom: 50%;
            left: -6px;
            background-color: #c6a4f5;
            color: white;
            padding: 6px 10px;
            border-radius: 2px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            font-size: 10px;
            font-weight: 600;
            line-height: 1.3;
            max-width: 100px;
            z-index: 15;
          }

          @media (min-width: 480px) {
            .hero2-floating-badge {
              bottom: 25%;
              left: -12px;
              padding: 8px 12px;
              font-size: 12px;
              max-width: 120px;
            }
          }

          @media (min-width: 768px) {
            .hero2-floating-badge {
              bottom: 30%;
              left: -16px;
              padding: 10px 16px;
              font-size: 14px;
              max-width: 160px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
          }

          @media (min-width: 1024px) {
            .hero2-floating-badge {
              bottom: 32%;
              left: -20px;
              padding: 12px 18px;
              font-size: 16px;
              max-width: 180px;
            }
          }

          @media (min-width: 1280px) {
            .hero2-floating-badge {
              left: 20px;
              bottom: 35%;
            }
          }

          .hero2-floating-badge p {
            margin: 0;
          }

          .hero2-badge-arrow {
            position: absolute;
            bottom: -3px;
            left: 12px;
            width: 12px;
            height: 12px;
            background-color: #c6a4f5;
            transform: rotate(45deg);
            z-index: -1;
            border-radius: 1px;
          }

          @media (min-width: 480px) {
            .hero2-badge-arrow {
              bottom: -4px;
              left: 16px;
              width: 16px;
              height: 16px;
            }
          }

          @media (min-width: 768px) {
            .hero2-badge-arrow {
              bottom: -6px;
              left: 20px;
              width: 20px;
              height: 20px;
              border-radius: 2px;
            }
          }

          @media (min-width: 1024px) {
            .hero2-badge-arrow {
              bottom: -8px;
              left: 24px;
              width: 24px;
              height: 24px;
            }
          }

          /* Small screen optimizations */
          @media (max-width: 320px) {
            .hero2-container {
              padding: 0.75rem;
            }
            
            .hero2-title {
              font-size: 24px;
            }
            
            .hero2-description {
              font-size: 13px;
            }
            
            .hero2-floating-badge {
              font-size: 9px;
              max-width: 90px;
              left: -4px;
              padding: 4px 8px;
            }

            .hero2-image {
              max-width: 260px;
            }

            .hero2-background-text h1 {
              font-size: 50px;
            }
          }

          /* Very large screen optimizations */
          @media (min-width: 1440px) {
            .hero2-content {
              max-width: 1600px;
            }

            .hero2-image {
              max-width: 520px;
            }

            .hero2-background-text h1 {
              font-size: 380px;
            }
          }
        `}
      </style>

      <div className="hero2-container">
        <div className="hero2-background-text">
          <h1 aria-hidden="true">FITNESS</h1>
        </div>

        <div className="hero2-content">
          <div className="hero2-text-content">
            <span className="hero2-badge">Do It Yourself</span>
            <h1 className="hero2-title">
              <span>BURN BELLY FAT.</span>
              <span>BOOST CONFIDENCE.</span>
            </h1>

            <p className="hero2-description">
              Sculpt Your Core And Kickstart Your Fitness Journey With This
              21-Day DIY Program. Designed To Be Done At Home, At Your Pace - No
              Equipment, No Excuses.
            </p>

            <div className="hero2-features">
              <div className="hero2-feature">
                <Dumbbell className="hero2-feature-icon" />
                <p className="hero2-feature-text">
                  21-Day structured fat-loss workout plan
                </p>
              </div>
              <div className="hero2-feature">
                <CalendarCheck className="hero2-feature-icon" />
                <p className="hero2-feature-text">
                  Core-focused, beginner-friendly routines
                </p>
              </div>
              <div className="hero2-feature">
                <Youtube className="hero2-feature-icon" />
                <p className="hero2-feature-text">
                  Easy-to-follow daily videos & guidance
                </p>
              </div>
            </div>

            <div className="hero2-button-container">
              <button className="hero2-button">
                Start My 21-Day Journey @INR 999
              </button>
            </div>
          </div>

          <div className="hero2-image-container">
            <img src={heroImage2} alt="Fitness model" className="hero2-image" />

            <div className="hero2-floating-badge">
              <p>One-time access,</p>
              <p>lifetime results</p>
              <div className="hero2-badge-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;