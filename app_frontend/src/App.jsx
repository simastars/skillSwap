import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home";
import HomeBody from "./components/homeBody";
import Register from "./components/Register";
import Dashboard from "./components/dashboard";

import NotFound from "./components/404";
import Signin from "./components/signin";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

function Layout() {
  const location = useLocation();
  const showExtras = location.pathname === "/";

  return (
    <>
    <div className="container-fluid">
      
      {showExtras && <Navbar />}
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="*"
          element={
           <NotFound />
          }
        />
      </Routes>
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
