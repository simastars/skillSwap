import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/dashboard";
import Navbar from "./Components/navbar";
import SkillswapHomePage from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import HeroBanner from "./Components/Hero";
import ImageTrail from "./Components/Animations/ImageTrail/ImageTrail";

// import images
import image from "./assets/img/skillUniverse.jpg";
import image2 from "./assets/img/skillSpace.jpg";
import image3 from "./assets/img/skillYou.jpg";
import image4 from "./assets/img/skillUs.jpg";
// // Usage with all props
// <TextTrail
//   text="React Bits"
//   fontFamily="Figtree"
//   fontWeight="900"
//   noiseFactor={1.2}
//   noiseScale={0.001}
//   rgbPersistFactor={0.95}
//   alphaPersistFactor={0.92}
//   animateColor={true}
//   startColor="#ff6b6b"
//   textColor="#4ecdc4"
//   backgroundColor="#1a1a2e"
//   colorCycleInterval={2000}
//   supersample={2}
// />

// // With animated color cycling
// <TextTrail
//   text="Colorful"
//   animateColor={true}
//   colorCycleInterval={1500}
//   noiseFactor={1.5}
//   noiseScale={0.002}
// />
function App() {
  return (
    <div className="position-relative">
      {/* Background/Base Component */}
      <div style={{ position: "relative", top: "50%", left: "50%", zIndex: 0 }}>
        <span>Test</span>
      </div>

      {/* ImageTrail (on top) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <ImageTrail
          key={1}
          items={[image, image2, image3, image4]}
          variant={6}
        />
      </div>
    </div>
  );
}

export default App;
