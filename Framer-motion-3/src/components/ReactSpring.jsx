import React, { useState, useEffect } from 'react';
import Image1 from '../assets/images/sandy_bg_update_1.svg';
import Image2 from '../assets/images/sandy-bg-update-2.svg';
import Image3 from '../assets/images/sandy-bg-update-3.svg';
import Image4 from '../assets/images/sandy-bg-update-4.svg';
import Image5 from '../assets/images/sandy-bg-update-5.svg';
import Image6 from '../assets/images/sandy-bg-update-6.svg';
import Image7 from '../assets/images/sandy-bg-update-7.svg';
import { useSpring, animated } from 'react-spring';

const ImageReactSpring = () => {
  // State to store the current image source based on scroll position
  const [imageSrc, setImageSrc] = useState(Image1);

  // State for scroll position
  const [scrollY, setScrollY] = useState(0);

  // Calculate the scroll progress (0 - 1)
  const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

  // Use react-spring to animate the image's `y` and `scale`
  const styles = useSpring({
    to: {
      y: scrollProgress * 1000,  // Adjust the 1000 value to control the vertical movement
      scale: 1 - scrollProgress * 0.8, // Shrink the image as you scroll
    },
    config: { tension: 180, friction: 12 },  // Customize the animation timing
  });

  // Effect to track the scroll position and update the image source based on the scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);  // Update the scroll position
    };

    window.addEventListener('scroll', handleScroll);  // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Cleanup the listener on component unmount
    };
  }, []);

  useEffect(() => {
    // Update image based on scroll progress
    const progress = scrollProgress;
    if (progress > 0.9) {
      setImageSrc(Image7);
    } else if (progress > 0.7) {
      setImageSrc(Image6);
    } else if (progress > 0.6) {
      setImageSrc(Image5);
    } else if (progress > 0.5) {
      setImageSrc(Image4);
    } else if (progress > 0.4) {
      setImageSrc(Image3);
    } else if (progress > 0.2) {
      setImageSrc(Image2);
    } else {
      setImageSrc(Image1);
    }
  }, [scrollY]);

  return (
    <div className='h-screen w-full'>
      <div className='flex justify-center'>
        <animated.img 
          src={imageSrc} 
          alt="Image"
          height="auto"
          width="100%"
          style={{
            position: 'relative',
            willChange: 'transform',
            top: '-550px', // Adjust this value to position the image
            transform: styles.y.to(y => `translateY(${y}px)`),
            scale: styles.scale,
          }}
        />
      </div>
    </div>
  );
};

export default ImageReactSpring;
