import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navbar  =() =>{
  return (
    
    <div
      className="container-fluid py-4"
      style={{
        fontFamily: "Manrope, Noto Sans, sans-serif",
        background: "#f9fbfa",
      }}
    >
      <header className="d-flex justify-content-between align-items-center border-bottom px-4 py-3">
        <div className="d-flex align-items-center gap-3">
          <h2 className="mb-0 fw-bold">SkillSwap</h2>
          <nav className="d-flex gap-3">
            <a href="/" className="text-decoration-none text-dark">
              Browse
            </a>
            <a href="#" className="text-decoration-none text-dark">
              My Skills
            </a>
            <a href="#" className="text-decoration-none text-dark">
              Messages
            </a>
          </nav>
        </div>
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
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBH_S2nG1RdGqJAxUEt0-rE3d4Z3DLs_L05HIdOmGwXnm2hVYoBH2dYShuwsamstc75nQ5EVPCsICXDi3CKeggoaIO-grPGojs35R8t8XNHt5jVC6ZWPqlcUAc_wcogppcPaLMnRgkBnrzthg6K2lRABiyoKu9xYOXldQE0Bxcd20DtQpsVSRC7EalsA5xG87zK3m35csqb2eVeNeoXy44sNTRpH5CTWVDXMFfLghEdzjfmZZDEzml-f19Vy3YDBHFHVMK-2m82XJw)",
            }}
          ></div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;