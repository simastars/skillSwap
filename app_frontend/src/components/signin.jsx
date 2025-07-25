import React from "react";
import styled from "styled-components";
// import Login from './Login';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BACKEND_URL = "http://localhost:5000";

const Login = () => {
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
     if(!formData.email){
      toast.error("Email is required.");
      return;
    }
    if(!formData.password){
      toast.error("Password is required.");
      return;
    }
    e.target.disabled = true; // Disable the button to prevent multiple clicks
    e.target.textContent = "Logging in..."; // Change button text
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.msg || data.errors?.[0]?.msg || "Login failed");
      // setResponseMessage("Login successful!");
            toast.success("Login successful!");
      
      localStorage.setItem("token", data.token);
      setFormData({ email: "", password: "" });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setError(true);
      // setResponseMessage(error.message);
            toast.error(error.message);
      
    }
    e.target.textContent = "Login"; // Change button text
    e.target.disabled = false; // Re-enable the button after submission
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
const socialRedirect = (platform) => {
    window.location.href = `${BACKEND_URL}/api/auth/${platform}`;
  };
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card_title__container">
          <div className="card_title text-center mb-4">
            <h2 className="fw-bold">Login to SkillSwap</h2>
            <p>Connect with others and exchange skills without money</p>
          </div>
        </div>
        <hr className="line" />
          <form className="row text-white g-3" onSubmit={handleSubmit}>
            {responseMessage && (
              <div
                className={`alert ${error ? "alert-danger" : "alert-success"}`}
              >
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
                  id="loginButton"
                  //   type="submit"
                  onClick={handleClick}
                  className="button"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-outline-success"
              onClick={() => socialRedirect("google")}
            >
              Sign in with Google
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => socialRedirect("facebook")}
            >
              Sign in with Facebook
            </button>
          </div>
          </form>
   <div className="text-center my-3">
          <a href="/" className="text-light text-decoration-underline">
            &larr; Back to Homepage
          </a>
        </div>
        <div className="text-center my-3">
          <span className="text-white">
            Already have an account?{" "}
            <a href="/signup" className="text-light text-decoration-underline">
              Sign up
            </a>
          </span>
        </div>
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 90vw;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(189, 92%, 58%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    width: 28rem;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%);

    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;

    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 100%) -50%,
      hsl(0, 0%, 40%) 100%
    );

    border-radius: 1rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;

    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%), rotate(0deg);
    transform-origin: left;

    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsl(189, 100%, 50%) 40%,
      hsl(189, 100%, 50%) 60%,
      hsla(0, 0%, 40%, 0) 100%
    );

    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .card .card_title__container .card_title {
    font-size: 1rem;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.25rem;
    width: 65%;

    font-size: 0.5rem;
    color: var(--paragraph);
  }

  .card .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);

    border: none;
  }

  .card .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    background-color: var(--primary);

    border-radius: 50%;
  }

  .card .card__list .card__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;

    fill: var(--black);
  }

  .card .card__list .card__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
  }

  .card .button {
    cursor: pointer;

    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
      hsl(189, 92%, 58%),
      hsl(189, 99%, 26%) 100%
    );

    font-size: 0.75rem;
    color: var(--white);

    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px var(--white);
  }
`;

export default Login;
