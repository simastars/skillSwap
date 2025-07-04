import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Home.css'; // Assuming you have a CSS file for styles
const SkillswapHomePage = () => {
  return (
<div class="fullpage-wrapper">
  <div class="overlay">
    <h1>Give a Skill, Get a Skill</h1>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;800&display=swap" rel="stylesheet"/>

    <svg width="100%" height="150" viewBox="0 0 1000 150" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00ffe0" />
      <stop offset="50%" stop-color="#6f00ff" />
      <stop offset="100%" stop-color="#00ffe0" />
    </linearGradient>

    <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="50%" stop-color="#8c52ff" />
      <stop offset="100%" stop-color="#00f0ff" />
    </linearGradient>
  </defs>

  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Orbitron, Arial, sans-serif" font-size="30" font-weight="800"
        fill="url(#fillGradient)" stroke="url(#strokeGradient)" stroke-width="2"
        paint-order="stroke fill">
    SkillSwap is a community-powered learning platform
  </text>
</svg>


    <p>SkillSwap is a community-powered learning platform <br/>where you can exchange skills without money. Grow together by sharing your expertise and learning from others.</p>
  </div>
</div>
  );
};

export default SkillswapHomePage;
