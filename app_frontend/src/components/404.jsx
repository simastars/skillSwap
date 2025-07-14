import React from 'react';
import FuzzyText from "./FuzzyText/FuzzyText";
function NotFound() {
  return (
    <div className='container' style={{ textAlign: "center", marginTop: "100px" }}>
       <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={1}
              enableHover={2}
            >
              404 - Page Not Found
            
            </FuzzyText>
      <a href="/" className="btn btn-primary">Go Home</a>
    </div>
  );
}
export default NotFound;