import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-5 px-4 bg-gradient-to-b from-gray-900/10 to-gray-900/30">
      <Container>
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="display-4 fw-bold mb-4 neon-text">
            How <span className="text-purple-400">SkillSwap</span> Works
          </h2>
          <p className="fs-5 text-light mx-auto" style={{ maxWidth: '48rem' }}>
            A simple 4-step process to exchange skills with like-minded professionals
          </p>
        </div>

        <Row className="g-4">
          {/* Step 1 */}
          <Col md={6} lg={3}>
            <Card className="step-card animate-on-scroll bg-dark bg-opacity-50 backdrop-blur-sm border border-secondary rounded-xl p-4 transition-all duration-300 h-100">
              <div className="w-16 h-16 d-flex align-items-center justify-content-center bg-blue-900/30 rounded-circle mb-4 mx-auto neon-box" style={{ width: '4rem', height: '4rem' }}>
                <span className="fs-3 text-info">1</span>
              </div>
              <h3 className="fs-4 fw-bold mb-3 text-center text-info">Create Profile</h3>
              <p className="text-light text-center">
                Set up your profile with skills you can offer and skills you want to learn. Add your experience level and availability.
              </p>
            </Card>
          </Col>

          {/* Other steps would follow a similar structure */}

        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;