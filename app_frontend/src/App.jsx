import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./../../frontend/src/Components/dashboard";
import Navbar from "./components/navbar";
import Footer from "./components/footer"
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
        <div className='bg-dark text-white' style={{ position: "relative", width: "100vw", height: "100vh", overflow:'hidden'}}>
         
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          >
            <span style={{ fontSize: "70px", fontWeight: "bold" }}>SkillSwap</span>
            <div className="text-center" style={{ fontSize: "30px", fontWeight: "bold" }}>A community for skill sharing and collaboration.</div>
          </div>
          <ImageTrail
            key={1}
            items={[image, image2, image3, image4]}
            variant={6}
          />
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
          
        </div>
      </div>
      <div className="bg-dark text-white mt-2">This is the </div>
      <Footer/>
    </>
  );
}

export default App;
