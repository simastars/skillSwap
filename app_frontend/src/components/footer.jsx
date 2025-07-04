// src/components/Footer.js

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../footer.css';

// You can replace this with your actual logo SVG or Image
const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="white"/>
    <path d="M25.4385 27.398C23.6385 27.398 22.3785 26.548 21.6585 24.848H18.9985C19.6485 28.328 21.8285 30.148 25.4385 30.148C29.2185 30.148 31.3285 28.078 31.3285 24.898C31.3285 21.718 29.2185 19.648 25.4385 19.648C23.6385 19.648 22.3785 20.218 21.6585 21.418H25.4385V24.118H18.9985V15.828H21.6585V18.528C22.3785 17.028 23.6385 15.828 25.4385 15.828C29.2185 15.828 31.3285 17.898 31.3285 21.078C31.3285 24.258 29.2185 27.398 25.4385 27.398Z" fill="#090E34"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-dots"></div>
      <Container>
        {/* Top Section with Info and Links */}
        <Row className="mb-5 justify-content-between">
          {/* Brand Info */}
          <Col lg={4} md={12} className="mb-4 mb-lg-0">
            <div className="footer-logo-container">
              <LogoIcon />
              <span className="logo-text">TailGrids</span>
            </div>
            <p className="footer-brand-text">
              We create digital experiences for brands and companies by using technology.
            </p>
            <div className="social-icons">
              <a href="#facebook"><FaFacebookF /></a>
              <a href="#twitter"><FaTwitter /></a>
              <a href="#instagram"><FaInstagram /></a>
              <a href="#linkedin"><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* Link Columns Wrapper */}
          <Col lg={8} md={12}>
            <Row>
              {/* Company Links */}
              <Col md={4} sm={6} className="footer-links-col mb-4 mb-md-0">
                <h5>Company</h5>
                <ul className="footer-links-list">
                  <li><a href="#about">About company</a></li>
                  <li><a href="#services">Company services</a></li>
                  <li><a href="#jobs">Job opportunities</a></li>
                  <li><a href="#people">Creative people</a></li>
                </ul>
              </Col>

              {/* Customer Links */}
              <Col md={4} sm={6} className="footer-links-col mb-4 mb-md-0">
                <h5>Customer</h5>
                <ul className="footer-links-list">
                  <li><a href="#support">Client support</a></li>
                  <li><a href="#news">Latest news</a></li>
                  <li><a href="#story">Company story</a></li>
                  <li><a href="#pricing">Pricing packages</a></li>
                </ul>
              </Col>

              {/* Additional Links */}
              <Col md={4} sm={6} className="footer-links-col mb-4 mb-md-0">
                <h5>Additional</h5>
                <ul className="footer-links-list">
                  <li><a href="#our-story">Our story</a></li>
                  <li><a href="#who-we-are">Who we are</a></li>
                  <li><a href="#process">Our process</a></li>
                  <li><a href="#latest-news">Latest news</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Latest Blog Section (placed after the main columns for better mobile flow) */}
        <Row>
          <Col lg={12}>
            <div className="footer-links-col">
              <h5>Latest blog</h5>
            </div>
          </Col>
          <Col md={6} className="mb-3">
              <a href="#blog1" className="blog-post text-decoration-none">
                <Image src="https://i.ibb.co/L8N2yCF/image-01.jpg" rounded width={80} height={80} alt="Blog post thumbnail" />
                <p className="blog-text">I think really important to design...</p>
              </a>
          </Col>
          <Col md={6} className="mb-3">
             <a href="#blog2" className="blog-post text-decoration-none">
                <Image src="https://i.ibb.co/92w3t2j/image-02.jpg" rounded width={80} height={80} alt="Blog post thumbnail" />
                <p className="blog-text">Recognizing the need is the primary...</p>
             </a>
          </Col>
        </Row>

        {/* Bottom Section with Legal and Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal-links">
              <a href="#privacy">Privacy policy</a>
              <a href="#legal">Legal notice</a>
              <a href="#terms">Terms of service</a>
            </div>
            <div className="footer-copyright">
              <span>© 2025 TailGrids</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;