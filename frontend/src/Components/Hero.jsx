import React, { useEffect } from "react";
import "../HeroBanner.css";

const HeroBanner = () => {
  useEffect(() => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const createBurst = (x, y, count = 20) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          radius: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 360}, 100%, 70%)`,
          dx: (Math.random() - 0.5) * 3,
          dy: (Math.random() - 0.5) * 3,
          alpha: 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.015;
        if (p.alpha <= 0) particles.splice(i, 1);
        else {
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    const svgText = document.querySelector("svg text");
    const rect = svgText.getBoundingClientRect();

    // Continuous aura: emit small particles from center
    const auraInterval = setInterval(() => {
      const rect = svgText.getBoundingClientRect();
      const x = rect.left + Math.random() * rect.width + window.scrollX;
      const y = rect.top + Math.random() * rect.height + window.scrollY;
      createBurst(x, y, 1);
    }, 100);

    // On hover: burst of particles
    svgText.addEventListener("mousemove", (e) => {
  const x = e.clientX + window.scrollX;
  const y = e.clientY + window.scrollY;
  createBurst(x, y, 1); // Emit one particle per frame under mouse
});


    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(auraInterval);
    };
  }, []);

  return (
    <div>
    <div className="hero">
      <canvas id="particles" className="particles"></canvas>
      <div className="glass-blur" />
      <svg viewBox="0 0 1000 150" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffe0" />
            <stop offset="50%" stopColor="#6f00ff" />
            <stop offset="100%" stopColor="#00ffe0" />
          </linearGradient>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="50%" stopColor="#8c52ff" />
            <stop offset="100%" stopColor="#00f0ff" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="30"
          fontWeight="800"
          fill="url(#fillGradient)"
          stroke="url(#strokeGradient)"
          strokeWidth="2"
          paintOrder="stroke fill"
        >
          SkillSwap is a community-powered learning platform
        </text>
      </svg>
    </div>
      <p>where you can exchange skills without money. Grow together by sharing your expertise and learning from others.</p>
    
    </div>
  );
};

export default HeroBanner;
