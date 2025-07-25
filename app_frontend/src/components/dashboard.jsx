
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
// import Search from "./Search";
const BACKEND_URL = "http://localhost:5000";

const Dashboard = () => {
  // In the future, skills will be fetched from the backend
  const initialSkills = [
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

  const [skills, setSkills] = useState(initialSkills);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
 const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  // Fetch skills from backend with pagination and search
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({
      page,
      limit: 10,
      search: searchTerm
    });
    fetch(`${BACKEND_URL}/api/skills?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.skills)) {
          setSkills(data.skills);
          setTotalPages(data.totalPages || 1);
        } else {
          setSkills([]);
          setTotalPages(1);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.error('Failed to fetch skills', err);
      });
  }, [page, searchTerm]);

  const filters = [
    { label: "All", value: "All" },
    { label: "Offering", value: "Offering" },
    { label: "Seeking", value: "Seeking" },
    { label: "Online Only", value: "Online Only" },
    { label: "Verified", value: "Verified" },
    { label: "In Person", value: "In Person" },
    { label: "Remote", value: "Remote" },
  ];
 

  const filteredSkills = skills.filter(skill => {
    // Filter by type/label (client-side, after server-side search)
    const matchesFilter = selectedFilter === "All" || skill.type.toLowerCase().includes(selectedFilter.toLowerCase()) || skill.title.toLowerCase().includes(selectedFilter.toLowerCase()) || skill.desc.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesFilter;
  });

  return (
    <StyledWrapper>
      <div className="container py-4 cards text-white" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif'}}>
        <div className="px-4">
          <h3 className="fw-bold my-4 card_title">Find Skills</h3>
          {/* <Search /> */}
          <input
            className="form-control rounded-pill mb-3"
            type="text"
            placeholder="Search for skills"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <div className="d-flex gap-2 mb-4 flex-wrap">
            {filters.map((filter, idx) => (
              <span
                key={idx}
                className={`badge rounded-pill px-3 py-2 ${selectedFilter === filter.value ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </span>
            ))}
          </div>
          <hr className="line" />

          <h4 className="fw-bold mb-3">Results</h4>
          {loading ? (
            <div>Loading...</div>
          ) : filteredSkills.length === 0 ? (
            <div>No skills found.</div>
          ) : (
            filteredSkills.map((skill, i) => (
              <div key={i} className="cards mb-3 p-3 shadow-sm border-0">
                <div className="row g-3 align-items-center">
                  <div className="col-md-8">
                    <p className="fw-bold mb-1">{skill.type}: {skill.title}</p>
                    <p className="mb-2">{skill.desc}</p>
                    <button className="btn button rounded-pill px-4">View Profile</button>
                  </div>
                  <div className="col-md-4">
                    <div className="ratio ratio-16x9 rounded" style={{ backgroundImage: `url(${skill.img})`, backgroundSize: 'cover' }}></div>
                  </div>
                </div>
              </div>
            ))
          )}
          {/* Pagination controls */}
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="btn btn-secondary mx-2" disabled={page <= 1} onClick={() => setPage(page - 1)}>
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button className="btn btn-secondary mx-2" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .cards {
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
    max-width: 100vw;
    box-sizing: border-box;
  }

  @media (max-width: 900px) {
    .cards {
      width: 95vw;
      padding: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    .cards {
      width: 100vw;
      padding: 0.25rem;
      border-radius: 0.5rem;
    }
    .row.g-3.align-items-center {
      flex-direction: column !important;
    }
    .col-md-8, .col-md-4 {
      flex: 1 1 100%;
      max-width: 100%;
    }
    .cards .button {
      width: 100%;
      font-size: 1rem;
    }
    .cards .cards_title__container .cards_title {
      font-size: 1.2rem;
    }
    .cards .cards_title__container .cards_paragraph {
      font-size: 0.9rem;
      width: 100%;
    }
    .cards .cards__list .cards__list_item .list_text {
      font-size: 1rem;
    }
    .ratio.ratio-16x9.rounded {
      min-height: 150px;
    }
  }

  .cards .cards__border {
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

  .cards .cards__border::before {
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

  .cards .cards_title__container .cards_title {
    font-size: 1rem;
    color: var(--white);
  }

  .cards .cards_title__container .cards_paragraph {
    margin-top: 0.25rem;
    width: 65%;

    font-size: 0.5rem;
    color: var(--paragraph);
  }

  .cards .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);

    border: none;
  }

  .cards .cards__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .cards .cards__list .cards__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cards .cards__list .cards__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    background-color: var(--primary);

    border-radius: 50%;
  }

  .cards .cards__list .cards__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;

    fill: var(--black);
  }

  .cards .cards__list .cards__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
  }

  .cards .button {
    cursor: pointer;

    padding: 0.5rem;
    width: 30%;
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
export default Dashboard;
