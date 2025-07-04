import React from "react";
import "../footer.css"; 
import instagramIcon from "../assets/images/skillSpace.jpg";
const Footer =()=>{
    return(
    <footer>
      <div className="footer-waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="d-flex justify-content-center list-unstyled p-0 m-3">
        {[1, 2, 3, 4].map((_, i) => (
          <li key={i} className="mx-2">
            <a href="#">
              <img
                className="footer-icons"
                src={instagramIcon}
                alt="Instagram"
              />
            </a>
          </li>
        ))}
      </ul>

      <ul className="footer-links d-flex justify-content-center list-unstyled mb-4">
        <li className="mx-3">
          <a className="footer-link" href="#">
            Home
          </a>
        </li>
        <li className="mx-3">
          <a className="footer-link" href="#">
            Portfolio
          </a>
        </li>
        <li className="mx-3">
          <a className="footer-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </footer>

  )
}
export default Footer;