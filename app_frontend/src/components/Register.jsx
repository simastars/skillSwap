import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setError(false);

    if (form.password !== form.confirmPassword) {
      setError(true);
      setResponseMessage("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.msg || data.errors?.[0]?.msg || "Error");
      setResponseMessage("Registration successful!");
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
      // Delay optional: show message briefly before redirect
      setTimeout(() => {
        navigate("/login"); // or "/login"
      }, 1500);
    } catch (err) {
      setError(true);
      setResponseMessage(err.message);
    }
  };

  const socialRedirect = (platform) => {
    window.location.href = `${BACKEND_URL}/api/auth/${platform}`;
  };
  const handleClick = (e) => {
    e.preventDefault();
    // Disable the button to prevent multiple clicks
    e.target.classList.add("disabled");
    e.target.textContent = "Registering...";
    handleSubmit(e);
    e.target.classList.remove("disabled");
    e.target.textContent = "Register"; // Reset button text after submission
  };
  return (
    <>
      <div className="container">
        <form
          class="row text-white g-3"
          // onSubmit={handleSubmit}
        >
          <div className="text-center mb-4">
            <h2 className="fw-bold">Join SkillSwap</h2>
            <p>Connect with others and exchange skills without money</p>
          </div>
          {responseMessage && (
            <div
              className={`alert ${error ? "alert-danger" : "alert-success"}`}
            >
              {responseMessage}
            </div>
          )}
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
            />
          </div>
          {/* <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-outline-primary fw-bold"
              id="registerButton"
              onClick={handleClick}
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
    </>
  );
}

export default Register;
