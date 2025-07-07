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
function App() {
  return (
    <>
      <div className="containter">
        <Navbar />
        {/* Background/Base Component */}
        <div
          className="text-white"
          style={{
            backgroundColor: "#090E34",
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          >
            <span className="text-center" style={{ fontSize: "70px", fontWeight: "bold" }}>
              SkillSwap
            </span>
            {/* <div className="text-center" style={{ fontSize: "30px", fontWeight: "bold" }}>A community for skill sharing and collaboration.</div> */}
            <svg
              width="100%"
              height="150"
              viewBox="0 0 1000 150"
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
                  <stop offset="0%" stop-color="#00ffe0" />
                  <stop offset="50%" stop-color="#6f00ff" />
                  <stop offset="100%" stop-color="#00ffe0" />
                </linearGradient>

                <linearGradient
                  id="strokeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#00f0ff" />
                  <stop offset="50%" stop-color="#8c52ff" />
                  <stop offset="100%" stop-color="#00f0ff" />
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-family="Orbitron, Arial, sans-serif"
                font-size="30"
                font-weight="800"
                fill="url(#fillGradient)"
                stroke="url(#strokeGradient)"
                stroke-width="2"
                paint-order="stroke fill"
              >
                SkillSwap is a community-powered learning platform
              </text>
            </svg>
          </div>
          <ImageTrail
            key={1}
            items={[image, image2, image3, image4]}
            variant={6}
          />
        </div>
      </div>
      <div className="bg-dark text-white mt-2">This is the </div>
      <Footer />
    </>
  );
}

export default App;
