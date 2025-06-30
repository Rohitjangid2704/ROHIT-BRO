// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSetupForm from "./components/ProfileSetupForm";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* This container will manage the whole page layout */}
      <div className="app-container">
        <Navbar />
        {/* This main area will grow to fill the remaining space */}
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Hero1 />} />
            <Route path="/diy" element={<Hero2 />} />
            <Route path="/profile-setup" element={<ProfileSetupForm />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;