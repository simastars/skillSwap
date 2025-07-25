import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BACKEND_URL = "http://localhost:5000";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    otherNames: "",
    phoneNumber: "",
    email: "",
    username: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(false);
  const [isCheckedTerms, setCheckedTerms] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    setCheckedTerms(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setError(false);
    if (isCheckedTerms === false) {
      setError(true);
      toast.error("You must agree to the terms and conditions.");
      return;
    }
    if (!form.firstName) {
      setError(true);
      toast.error("First name is required.");
      return;
    }
    if (!form.otherNames) {
      setError(true);
      toast.error("Other name(s) is required.");
      return;
    }
    if (!form.phoneNumber) {
      setError(true);
      toast.error("Phone number is required.");
      return;
    }
    if (!form.email) {
      setError(true);
      toast.error("Email is required.");
      return;
    }
    if (!form.username) {
      setError(true);
      toast.error("Username is required.");
      return;
    }
    if (!form.dateOfBirth) {
      setError(true);
      toast.error("Date of birth is required.");
      return;
    }
    if (!form.password) {
      setError(true);
      toast.error("Password is required.");
      return;
    }
    if (!form.confirmPassword) {
      setError(true);
      toast.error("Confirm password is required.");
      return;
    }
    // Disable the button to prevent multiple clicks
    e.target.classList.add("disabled");
    e.target.textContent = "Registering...";
    if (form.password !== form.confirmPassword) {
      setError(true);
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || data.errors?.[0]?.msg || "Error");
      toast.success("Registration successful!");
      setForm({
        firstName: "",
        otherNames: "",
        phoneNumber: "",
        email: "",
        username: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(true);
      toast.error(err.message);
    }
    e.target.classList.remove("disabled");
    e.target.textContent = "Register"; // Reset button text after submission
  };

  const socialRedirect = (platform) => {
    window.location.href = `${BACKEND_URL}/api/auth/${platform}`;
  };
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <StyledWrapper>
      <div className="container card">
        <form
          class="row text-white g-3"
          // onSubmit={handleSubmit}
        >
          <div className="card__border" />

          <div className="text-center mb-4">
            <h2 className="card_title fw-bold">Join SkillSwap</h2>
            <p>Connect with others and exchange skills without money</p>
          </div>
          {responseMessage && (
            <div
              className={`alert ${error ? "alert-danger" : "alert-success"}`}
            >
              {responseMessage}
            </div>
          )}
        <hr className="line" />

          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Other Name(s)
            </label>
            <input
              id="otherNames"
              type="text"
              className="form-control"
              placeholder="Other Name(s)"
              value={form.otherNames}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-6">
            <label for="inputAddress2" class="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              type="date"
              className="form-control"
              value={form.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="terms"
                checked={isCheckedTerms}
                onChange={handleCheckboxChange}
              />
              <label class="form-check-label" for="terms">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          <div className="mb-3">
            <button
              id="registerButton"
              //   type="submit"
              onClick={handleClick}
              className="fw-bold button"
            >
              Register
            </button>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-4">
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
        </form>

        <div className="text-center my-3">
          <a href="/" className="text-light text-decoration-underline">
            &larr; Back to Homepage
          </a>
        </div>
        <div className="text-center my-3">
          <span className="text-white">
            Already have an account?{" "}
            <a href="/signin" className="text-light text-decoration-underline">
              Sign in
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
}

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
    width: 50rem;
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

export default Register;
