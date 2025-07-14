import { useState } from "react";
import GooeyNav from './GooeyNav/GooeyNav'

const Navbar = () => {
  const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
  const [isLoggedin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-dark  px-4 py-3 shadow-sm fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          SkillSwap
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
            <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
          </ul>

          {isLoggedin ? (
            <div className="d-flex align-items-center gap-3">
              <input
                className="form-control rounded-pill"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-light rounded-pill">🔔</button>
              <div
                className="rounded-circle overflow-hidden"
                style={{
                  width: 40,
                  height: 40,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBH_S2nG1RdGqJAxUEt0-rE3d4Z3DLs_L05HIdOmGwXnm2hVYoBH2dYShuwsamstc75nQ5EVPCsICXDi3CKeggoaIO-grPGojs35R8t8XNHt5jVC6ZWPqlcUAc_wcogppcPaLMnRgkBnrzthg6K2lRABiyoKu9xYOXldQE0Bxcd20DtQpsVSRC7EalsA5xG87zK3m35csqb2eVeNeoXy44sNTRpH5CTWVDXMFfLghEdzjfmZZDEzml-f19Vy3YDBHFHVMK-2m82XJw)",
                }}
              ></div>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <a href="/login" className="btn btn-outline-light btn-sm rounded-pill">Login</a>
              <a href="/signup" className="btn btn-primary btn-sm rounded-pill">Sign Up</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
