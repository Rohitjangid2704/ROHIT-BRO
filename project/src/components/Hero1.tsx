import React from "react";
import heroImage1 from "../assets/hero2.svg";

const Hero1: React.FC = () => {
  return (
    <>
      <style>
        {`
         .hero-container {
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
            .hero-container {
              padding: 2rem;
            }
          }

          @media (min-width: 768px) {
            .hero-container {
              padding: 3.2rem;
            }
          }

          .hero-background-text {
            position: absolute;
            bottom: 20px;
            left: 0;
            right: 0;
            text-align: center;
            pointer-events: none;
            z-index: 0;
            width: 100vw;
          }

          .hero-background-text h1 {
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
            .hero-background-text {
              // bottom: 30px;
            }
            .hero-background-text h1 {
              font-size: 140px;
              opacity: 0.5;
            }
          }

          @media (min-width: 768px) {
            .hero-background-text {
              // bottom: 40px;
            }
            .hero-background-text h1 {
              font-size: 250px;
              opacity: 0.6;
            }
          }

          @media (min-width: 1024px) {
            .hero-background-text {
              // bottom: 50px;
            }
            .hero-background-text h1 {
              font-size: 380px;
              opacity: 0.7;
            }
          }

          @media (min-width: 1280px) {
            .hero-background-text h1 {
              font-size: 425px;
              opacity: 0.8;
            }
          }

         .hero-content {
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
           .hero-content {
             grid-template-columns: 1fr 1fr;
             gap: 48px;
             max-width: 90vw;
           }
         }

         /* --- Hero Text (Mobile First) --- */
         .hero-text {
           text-align: center;
           order: 1;
          //  margin-bottom: 5rem;
         }

                  @media (min-width: 1200px) {
           .hero-text {
    margin-bottom: 5rem;
           }
         }
         @media (min-width: 768px) {
           .hero-text {
             text-align: left;
             order: 1; /* This remains 1 for desktop layout */
             padding-left: 0;
           }
         }
         .hero-title {
           font-size: 32px;
           font-weight: 700;
           line-height: 1.2;
           margin-bottom: 16px;
         }
         @media (min-width: 480px) {
           .hero-title {
             font-size: 40px;
           }
         }
         @media (min-width: 768px) {
           .hero-title {
             font-size: 52px;
             margin-bottom: 24px;
           }
         }
         @media (min-width: 1024px) {
           .hero-title {
             font-size: 60px;
           }
         }
         .hero-title span {
           display: block;
           color: #000000;
           text-shadow: 1px 1px 0 #b590e2;
         }
         @media (min-width: 768px) {
           .hero-title span {
             text-shadow: 2px 2px 0 #b590e2;
           }
         }
         .hero-description {
           font-size: 14px;
           color: #666666;
           line-height: 1.6;
           margin-bottom: 24px;
           max-width: 100%;
         }
         @media (min-width: 480px) {
           .hero-description {
             font-size: 16px;
             margin-bottom: 32px;
           }
         }
         @media (min-width: 768px) {
           .hero-description {
             font-size: 20px;
             margin-bottom: 40px;
             max-width: 600px;
           }
         }
         @media (min-width: 1024px) {
           .hero-description {
             font-size: 24px;
           }
         }
         /* --- Clients Section --- */
         .hero-clients {
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 16px;
           margin-bottom: 24px;
         }
         @media (min-width: 480px) {
           .hero-clients {
             gap: 20px;
             margin-bottom: 32px;
           }
         }
         @media (min-width: 768px) {
           .hero-clients {
             flex-direction: row;
             justify-content: flex-start;
             align-items: center;
             margin-bottom: 40px;
           }
         }
         .client-images {
           display: flex;
           align-items: center;
         }
         .client-avatars {
           display: flex;
           margin-right: 12px;
         }
         @media (min-width: 768px) {
           .client-avatars {
             margin-right: 16px;
           }
         }
         .client-avatar {
           width: 40px;
           height: 40px;
           border-radius: 50%;
           border: 2px solid white;
           object-fit: cover;
           margin-right: -12px;
         }
         @media (min-width: 480px) {
           .client-avatar {
             width: 44px;
             height: 44px;
             margin-right: -14px;
           }
         }
         @media (min-width: 768px) {
           .client-avatar {
             width: 48px;
             height: 48px;
             margin-right: -16px;
           }
         }
         .client-avatar:last-child {
           margin-right: 0;
         }
         .client-stats {
           text-align: center;
         }
         @media (min-width: 768px) {
           .client-stats {
             text-align: left;
           }
         }
         .client-count {
           font-weight: 600;
           color: #333333;
           font-size: 16px;
           margin: 0;
         }
         @media (min-width: 768px) {
           .client-count {
             font-size: 18px;
           }
         }
         .client-label {
           font-size: 14px;
           color: #666666;
           margin: 0;
         }
         @media (min-width: 768px) {
           .client-label {
             font-size: 16px;
           }
         }
/* --- Button --- */
.hero-button-container {
  width: 100%;
}

/* Hide button on screens smaller than 500px */
@media (max-width: 499px) {
  .hero-button-container {
    display: none;
  }
}

.hero-button {
  width: 100%;
  max-width: 280px;
  padding: 14px 28px;
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
  .hero-button {
    font-size: 15px;
    padding: 12px 30px;
  }
}

@media (min-width: 768px) {
  .hero-button {
    font-size: 16px;
    padding: 12px 32px;
    max-width: 240px;
    box-shadow: 4px 4px 0 #b590e2;
  }
}

.hero-button:hover {
  transform: translateY(2px);
  color: white !important;
  background-color: #222222 !important;
  box-shadow: 1px 1px 0 #b590e2 !important;
}

@media (min-width: 768px) {
  .hero-button:hover {
    transform: translateY(4px);
    box-shadow: 2px 2px 0 #b590e2 !important;
  }
}
         .hero-image-container {
           position: relative;
           display: flex;
           justify-content: center;
           align-items: center;
           order: 2;
           width: 100%;
           max-width: 100%;
         }
         @media (min-width: 768px) {
           .hero-image-container {
             order: 2; /* This remains 2 for desktop layout */
             margin-top: 0;
           }
         }
          @media (min-width: 500px) {
           .hero-image-container {
             order: 2; 
             margin-top: 0;
           }
         }
          @media (min-width: 1200px) {
           .hero-image-container {
             order: 2; 
           }
         }
.hero-image {
  width: 75%;
  // min-width: 70%;          
  min-width: 200px;
  height:auto;
  object-fit: contain;
  z-index: 20;
}
         @media (min-width: 480px) {
  .hero-image {
    max-width: 250px;
  }
}
@media (min-width: 768px) {
  .hero-image {
    max-width: 400px;
  }
}
@media (min-width: 1024px) {
  .hero-image {
    max-width: 450px;
  }
}
@media (min-width: 1280px) {
  .hero-image {
    max-width: 500px;
  }
}
.hero-badge {
  position: absolute;
  /* Base mobile styles */
  top: 30%;
  left: 65px;
  background-color: #c6a4f5;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 120px;
  z-index: 15;
}

/* >=480px */
@media (min-width: 480px) {
  .hero-badge {
    top: 20%;
    bottom: auto; 
    // left: auto;     
    right: -3px;  
    padding: 9px 14px;
    font-size: 12px;
    max-width: 140px;
  }
}

/* >=768px */
@media (min-width: 768px) {
  .hero-badge {
    top: auto;       
    bottom: 33.33%;   
    left: 30px;      
    right: auto;     
    padding: 10px 16px;
    font-size: 14px;
    max-width: 160px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

/* >=1024px */
@media (min-width: 1024px) {
  .hero-badge {
    top: auto;        
    bottom: 39.33%;  
    left: 90px;     
    right: auto;      
    font-size: 16px;
  }
}

         .hero-badge p {
           margin: 0;
         }
         .hero-badge-arrow {
           position: absolute;
           bottom: -4px;
           left: 16px;
           width: 10px;
           height: 10px;
           background-color: #c6a4f5;
           transform: rotate(45deg);
           z-index: -1;
           border-radius: 1px;
         }
         @media (min-width: 480px) {
           .hero-badge-arrow {
             bottom: -5px;
             left: 18px;
             width: 11px;
             height: 11px;
           }
         }
         @media (min-width: 768px) {
           .hero-badge-arrow {
             bottom: -6px;
             left: 20px;
             width: 12px;
             height: 12px;
             border-radius: 2px;
           }
         }
         /* Fix for very small screens */
         @media (max-width: 320px) {
           .hero-container {
             padding: 12px;
           }
           .hero-title {
             font-size: 28px;
           }
           .hero-description {
             font-size: 13px;
           }
           .hero-badge {
             font-size: 10px;
             max-width: 100px;
             right: -4px;
           }
         }
       `}
      </style>
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
    </>
  );
};
export default Hero1;
