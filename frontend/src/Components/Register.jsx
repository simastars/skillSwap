import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BACKEND_URL = "http://localhost:5000";

function Register() {
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
      if (!res.ok) throw new Error(data.msg || data.errors?.[0]?.msg || "Error");
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
    } catch (err) {
      setError(true);
      setResponseMessage(err.message);
    }
  };

  const socialRedirect = (platform) => {
    window.location.href = `${BACKEND_URL}/api/auth/${platform}`;
  };

  return (
    <div className="container py-5" style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold">Join SkillSwap</h2>
        <p>Connect with others and exchange skills without money</p>
      </div>

      {responseMessage && (
        <div className={`alert ${error ? "alert-danger" : "alert-success"}`}>
          {responseMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input id="firstName" type="text" className="form-control" placeholder="First Name" value={form.firstName} onChange={handleChange} />
          </div>
          <div className="col">
            <input id="otherNames" type="text" className="form-control" placeholder="Other Name(s)" value={form.otherNames} onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input id="phoneNumber" type="tel" className="form-control" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
          </div>
          <div className="col">
            <input id="email" type="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input id="username" type="text" className="form-control" placeholder="Username" value={form.username} onChange={handleChange} />
          </div>
          <div className="col">
            <input id="dateOfBirth" type="date" className="form-control" value={form.dateOfBirth} onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input id="password" type="password" className="form-control" placeholder="Password" value={form.password} onChange={handleChange} />
          </div>
          <div className="col">
            <input id="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
          </div>
        </div>

        <div className="d-grid mb-3">
          <button className="btn btn-success fw-bold" type="submit">Register</button>
        </div>

        <p className="text-center">
          If you already have an account <a href="signin.html">signin</a>
        </p>
      </form>

      <p className="text-center mt-4">Or continue with</p>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-outline-success" onClick={() => socialRedirect("google")}>Continue with Google</button>
        <button className="btn btn-outline-success" onClick={() => socialRedirect("facebook")}>Continue with Facebook</button>
      </div>
    </div>
  );
}

export default Register;
