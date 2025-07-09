// src/pages/Home.jsx

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../HomeBody.css";


export default function HomeBody() {
  return (
    <div className="bg-dark text-white gradient-bg text-center py-5">
      {/* How It Works */}
      
        <div className="container">
          <h2 className="mb-4 fw-bold">How It Works</h2>
          <div className="row g-4 text-start">
            <div className="col-md-3">
              <h5>1. Create Your Profile</h5>
              <p>Add skills you can teach and want to learn.</p>
            </div>
            <div className="col-md-3">
              <h5>2. Get Matched</h5>
              <p>We match you based on compatible skills and availability.</p>
            </div>
            <div className="col-md-3">
              <h5>3. Schedule a Session</h5>
              <p>Book 30-minute video calls built right into the platform.</p>
            </div>
            <div className="col-md-3">
              <h5>4. Earn & Spend Points</h5>
              <p>Teach to earn points, use points to learn new things.</p>
            </div>
          </div>
        </div>
    
      {/* Why SkillSwap */}
   
        <div className="container">
          <h2 className="mb-4 fw-bold">Why SkillSwap?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <h5>Completely Free</h5>
              <p>No subscription. Just swap skills using points.</p>
            </div>
            <div className="col-md-4">
              <h5>Built-In Video Chat</h5>
              <p>No Zoom links. Everything is in-app and secure.</p>
            </div>
            <div className="col-md-4">
              <h5>Global Learning</h5>
              <p>Teach someone in Tokyo. Learn from someone in Lagos.</p>
            </div>
            <div className="col-md-4">
              <h5>Flexible Scheduling</h5>
              <p>You control your availability and bookings.</p>
            </div>
            <div className="col-md-4">
              <h5>Any Skill, Any Level</h5>
              <p>Languages, coding, music, design — all skills welcome.</p>
            </div>
            <div className="col-md-4">
              <h5>Reputation & Growth</h5>
              <p>Earn ratings, reviews, and badges as you grow.</p>
            </div>
          </div>
        </div>
    
        <div className="container">
          <h2 className="mb-4 fw-bold">Testimonials</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-5">
              <blockquote className="blockquote p-4 bg-dark rounded shadow">
                <p>“I improved my French and taught basic JavaScript in the same week!”</p>
                <footer className="blockquote-footer mt-2">Fatima, Lagos</footer>
              </blockquote>
            </div>
            <div className="col-md-5">
              <blockquote className="blockquote p-4 bg-dark rounded shadow">
                <p>“I found a mentor and a student in one match. This platform is genius.”</p>
                <footer className="blockquote-footer mt-2">Diego, São Paulo</footer>
              </blockquote>
            </div>
          </div>
        </div>
     
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Grow Your Mind and Network?</h2>
          <p className="mb-4">No money. Just knowledge. Join a global network of learners and teachers.</p>
          <button className="btn btn-light btn-lg">Create Your Free Account</button>
        </div>
      
    </div>
  );
}
