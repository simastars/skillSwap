import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = "http://localhost:5000";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check for auth token in localStorage (adjust key as needed)
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setError(false);
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.msg || data.errors?.[0]?.msg || "Login failed");
      setResponseMessage("Login successful!");
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);
      setFormData({ email: "", password: "" });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setError(true);
      setResponseMessage(error.message);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const socialRedirect = (platform) => {
    window.location.href = `${BACKEND_URL}/api/auth/${platform}`;
  };
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
      <div className="w-100" style={{ maxWidth: "100%" }}>
        <form className="row text-white g-3" onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Login to SkillSwap</h2>
            <p>Connect with others and exchange skills without money</p>
          </div>

          {responseMessage && (
            <div className={`alert ${error ? "alert-danger" : "alert-success"}`}>
              {responseMessage}
            </div>
          )}
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-3">
              <button
                className="btn btn-primary fw-bold w-100"
                id="loginButton"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>

        <div className="text-center my-3">
          <span className="text-white">
            Don't have an account?{" "}
            <a href="/signup" className="text-light text-decoration-underline">
              Sign up
            </a>
          </span>
        </div>
        <div className="text-center my-3">
          <a href="/" className="text-light text-decoration-underline">
            &larr; Back to Homepage
          </a>
        </div>

        <p className="text-center mt-4">Or continue with</p>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-outline-success"
            onClick={() => socialRedirect("google")}
          >
            Continue with Google
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => socialRedirect("facebook")}
          >
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signin;
