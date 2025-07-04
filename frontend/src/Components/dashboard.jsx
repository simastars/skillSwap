import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const skills = [
    {
      type: "Offering",
      title: "Web Development",
      desc: "I can help you build a website from scratch using modern technologies.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYwhYHMQF35GPnzZvLSyLo5-QUOvw2K9tqmQIWcgzs3EDsVtQw2u1Ne7B6t049Av8tkUROcufbdAkeyjeZItJ32ifA7icNYt7UQN85Qhk3S5RgGTdIJNlDVHAEeNb-Ez9tUaOEu_cKAX8FzLrbRlqcJqNU5K3dxRtDHgU5b4eS6MOsfWPgPN0-j36QLCutZWQvVLUaQS6bPrYZuKP2iELaB8hrqLFgGG72HfbdGIU_ter2rAbvEezxO6B9IUU42ytQl-2scWEvAaQ"
    },
    {
      type: "Seeking",
      title: "Photography",
      desc: "Looking for someone to take professional photos for my portfolio.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMHZGve91DN8OjPpPI3lCCBnDQj9qgKFnhIMIap-jOqFQ2Jf1I6HpPo17vHY54QDYB_3NQzcNHmeCzfoweiyiyFSwlQpXKxpfbLjkPlBZOwCCwo6GmhBZb8zKYDdHATgKPt6jO0ptXU780EI7BRIna3nzuhHTBJRIoiVDUajkxLDh64-0eM1xHKl0EINVIkniRzsaI528fccnGJXVQm-IsVK3O0SJuxAGP_OrPkCtR6e2wq9bpTpB76Tnq9UoKSVFQ4UlIXHcZ0Xw"
    },
    {
      type: "Offering",
      title: "Graphic Design",
      desc: "I can create logos, branding materials, and other visual assets for your business.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBavUBDR_9SrzUqgIpr8xGChqi6tpPLT1E4LH5dPwW3timT8fDWej5lmZoi_pTdS9EFRQqssHg9gLmsIQOqLqcR2K14nTJ2wM3fi_BbUAg3SikPRBZaiUCiP9SuwFLeIB8DKTURW-kWxBhYN_UOppAhzF7nk-AmllL9sqrDKj7BkrYufFxtS5BE8zSopSxxUI-Ewasdv2PZLoT1cQPS8yfu8lvhY05cvaYIGX4A9j65jy2TkccqRy6pH7NCu2uO9nZr0FjFui9MS5U"
    },
    {
      type: "Seeking",
      title: "Language Tutoring (Spanish)",
      desc: "I want to improve my Spanish speaking skills. Native speakers preferred.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWz7IfUnp1K8QEE4AmxODQsfj6fRUNYba7U1e6GMoN_3N3pYVmmMWcegfLSkXIFYm6wJS4mX9khYppNSrl4NE76sZZSWXd1T5IAWTqT8DheOEpCme_5v2zz0c6a3tg8HVdHF29LUuXxApcqQFpyCZBkp2FW7V612pJnSDSrj9aDSBTjlPRZ22jn7IH5APSiPw1uZbbxe1cfkLUmaGJV9PaHpH867lBGcIH6-y7xzaD0YYqKGC7azYEBkzw8E_BdxBMYwRTGTM_B5o"
    },
    {
      type: "Offering",
      title: "Music Lessons (Guitar)",
      desc: "I can teach you how to play the guitar, from beginner to intermediate level.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3w7ZFWMDZ07Sx1wgxXUX05QPrlwlPMgv6aKMyQUSL0p0HvO5vEHFkt0hp7NI4x38G9NMszVlkAj0C6zINjMvYrstfVyBd3s1VSq_0a3KNShv4XdzBS3MoOQU6cTO9o87Qru04oLEVQLHalwA2z_H9nw8iwqXI4n-PrIY0NWz1eBCS2zXnw28GgNpPnzq6eV8tHU_Zet2PtiW5Z8ahqGY2D7vQ1HeERP0kg0oDSiSUSCXRA-LTyTZ6CATLAAR-4JSvzpmEqCJKHs4"
    }
  ];

  return (
    <div className="container-fluid py-4" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif', background: '#f9fbfa' }}>
      <div className="px-4">
        <h3 className="fw-bold my-4">Find Skills</h3>
        <input className="form-control rounded-pill mb-3" type="text" placeholder="Search for skills" />

        <div className="d-flex gap-2 mb-4 flex-wrap">
          {['Online Only', 'Verified', 'In Person', 'Remote'].map((filter, idx) => (
            <span key={idx} className="badge rounded-pill bg-light text-dark px-3 py-2">{filter}</span>
          ))}
        </div>

        <h4 className="fw-bold mb-3">Results</h4>

        {skills.map((skill, i) => (
          <div key={i} className="card mb-3 p-3 shadow-sm border-0" style={{ background: '#f9fbfa' }}>
            <div className="row g-3 align-items-center">
              <div className="col-md-8">
                <p className="fw-bold mb-1">{skill.type}: {skill.title}</p>
                <p className="text-muted mb-2">{skill.desc}</p>
                <button className="btn btn-light rounded-pill px-4">View Profile</button>
              </div>
              <div className="col-md-4">
                <div className="ratio ratio-16x9 rounded" style={{ backgroundImage: `url(${skill.img})`, backgroundSize: 'cover' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
