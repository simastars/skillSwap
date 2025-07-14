
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomeBody.css";
import InfiniteMenu from './InfiniteMenu/InfiniteMenu'

export default function HomeBody() {
  const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'M. Garba',
    description: 'Use it and like it'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'SBBJ',
    description: 'Awesome plartform to learn and teach'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'MIA',
    description: 'The platform to learn and teach, no money needed'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Rocklee',
    description: 'The UI is so cool, I love it'
  }
];
  const features = [
    {
      title: "Completely Free",
      text: "No subscription. Just swap skills using points.",
    },
    {
      title: "Built-In Video Chat",
      text: "No Zoom links. Everything is in-app and secure.",
    },
    {
      title: "Global Learning",
      text: "Teach someone in Tokyo. Learn from someone in Lagos.",
    },
    {
      title: "Flexible Scheduling",
      text: "You control your availability and bookings.",
    },
    {
      title: "Any Skill, Any Level",
      text: "Languages, coding, music, design — all skills welcome.",
    },
    {
      title: "Reputation & Growth",
      text: "Earn ratings, reviews, and badges as you grow.",
    },
  ];
  return (
    <div className="bg-dark text-white gradient-bg text-center py-5">
      {/* How It Works */}

      <div class="container py-5">
        <h2 class="mb-5 fw-bold text-center text-white neon-text">
          How It Works
        </h2>
        <div class="row g-4 text-start">
          <div class="col-md-3">
            <div class="card neon-card text-white h-100">
              <div class="card-body">
                <h5 class="card-title">1. Create Your Profile</h5>
                <p class="card-text">
                  Add skills you can teach and want to learn.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card neon-card text-white h-100">
              <div class="card-body">
                <h5 class="card-title">2. Get Matched</h5>
                <p class="card-text">
                  We match you based on compatible skills and availability.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card neon-card text-white h-100">
              <div class="card-body">
                <h5 class="card-title">3. Schedule a Session</h5>
                <p class="card-text">
                  Book 30-minute video calls built right into the platform.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card neon-card text-white h-100">
              <div class="card-body">
                <h5 class="card-title">4. Earn & Spend Points</h5>
                <p class="card-text">
                  Teach to earn points, use points to learn new things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why SkillSwap */}

      <div className="container py-5">
        <h2 className="mb-5 fw-bold text-center text-white neon-text">
          Why SkillSwap?
        </h2>
        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card neon-card text-white h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container">
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
        </div> */}
<div className="container gradient-bg" style={{ height: '400px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
      <div className="container">
        <h2 className="fw-bold mb-3">Ready to Grow Your Mind and Network?</h2>
        <p className="mb-4">
          No money. Just knowledge. Join a global network of learners and
          teachers.
        </p>
        <button className="btn btn-light btn-lg">
          Create Your Free Account
        </button>
      </div>
    </div>
  );
}
