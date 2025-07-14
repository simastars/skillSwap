import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home";
import HomeBody from "./components/homeBody";
import Register from "./components/Register";
import Dashboard from "./components/dashboard";

import NotFound from "./components/404";
import Signup from "./components/signup";

function Layout() {
  const location = useLocation();
  const showExtras = location.pathname === "/";

  return (
    <>
    <div className="container-fluid">
      
      <Routes><Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Register />} /> */}
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={
           <NotFound />
          }
        />
      </Routes>
      {showExtras && <Navbar />}
      {showExtras && <HomeBody />}
      {showExtras && <Footer />}
    </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
