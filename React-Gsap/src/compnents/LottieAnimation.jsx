import React, { useEffect, useState } from 'react';
// import Lottie from 'lottie-react';

import animationData from '../assets/JSON-Images/Animation - 1740120558509.json'; // Import your Lottie JSON if you're using one.
import Image1 from '../assets/images/sandy_bg_update_1.svg'; // Import your image if you're animating it.

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  // Event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Store the vertical scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the scroll animation effect
  const imageStyle = {
    position: 'absolute',
    top: `${scrollY * 0.2}px`, // Move image up and down based on scroll
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
  };

  return (
    <div style={{ position: 'relative', height: '200vh' }}> {/* Height to allow for scroll */}
      {/* Lottie Animation (if you're using one) */}
      <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)' }}>
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h1>Scroll Down to see the animation!</h1>
      </div>
    </div>
  );
};

export default ScrollAnimation;
