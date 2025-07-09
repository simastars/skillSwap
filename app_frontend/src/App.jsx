import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./../../frontend/src/Components/dashboard";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import images
import image from "./assets/images/skillUniverse.jpg";
import image2 from "./assets/images/skillSpace.jpg";
import image3 from "./assets/images/skillYou.jpg";
import image4 from "./assets/images/skillUs.jpg";
import ImageTrail from "./components/Animations/ImageTrail/ImageTrail";
import HomeBody from "./components/homeBody";
function App() {
  return (
    <>
      <div className="containter">
        <Navbar />
        {/* Background/Base Component */}
        <div
          className="text-white"
          style={{
            background: `linear-gradient(to bottom, rgba(9,14,52,0.8), rgba(0,240,200,0.5),rgba(9,14,52,0.8)), url(${image})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll", // optional: can be 'fixed' for parallax effect
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            color: "white",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "70px", fontWeight: "bold" }}>
              SkillSwap – Learn. Teach. Grow.
            </span>
            <br />
            <svg
              width="100%"
              height="200"
              viewBox="0 0 1000 200"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="fillGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00ffe0" />
                  <stop offset="50%" stopColor="#6f00ff" />
                  <stop offset="100%" stopColor="#00ffe0" />
                </linearGradient>
                <linearGradient
                  id="strokeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="50%" stopColor="#8c52ff" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="30%"
                textAnchor="middle"
                fontFamily="Orbitron, Arial, sans-serif"
                fontSize="24"
                fontWeight="600"
                fill="url(#fillGradient)"
                stroke="url(#strokeGradient)"
                strokeWidth="2"
                paintOrder="stroke fill"
              >
                <tspan x="50%" dy="1.2em">
                  Exchange knowledge, not money.
                </tspan>
                <tspan x="50%" dy="1.2em">
                  Connect globally to share and gain skills.
                </tspan>
                <tspan x="50%" dy="1.2em">
                  SkillSwap is a community-powered platform.
                </tspan>
              </text>
            </svg>

            <div style={{ marginTop: "28px", fontSize: "18px" }}>
              where you can exchange skills without money. Grow together by
              sharing your expertise and learning from others.
            </div>
            <div className="mt-4">
              <button className="btn btn-outline-light btn-lg me-3 grad" >
                Sign Up – It’s Free
              </button>
              <button className="btn btn-outline-light btn-lg">
                Browse Skills
              </button>
            </div>
          </div>
          <ImageTrail
            key={1}
            items={[image, image2, image3, image4]}
            variant={6}
          />
        </div>
      </div>
      <HomeBody />
      <Footer />
    </>
  );
}

export default App;
