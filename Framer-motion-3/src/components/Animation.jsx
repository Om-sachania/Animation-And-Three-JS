import { useState, useEffect } from 'react';
import Image1 from '../assets/images/sandy_bg_update_1.svg';
import Image2 from '../assets/images/sandy-bg-update-2.svg';
import Image3 from '../assets/images/sandy-bg-update-3.svg';
import Image4 from '../assets/images/sandy-bg-update-4.svg';
import Image5 from '../assets/images/sandy-bg-update-5.svg';
import Image6 from '../assets/images/sandy-bg-update-6.svg';
import Image7 from '../assets/images/sandy-bg-update-7.svg';

const Animation = () => {
  const [imageSrc, setImageSrc] = useState(Image1); // State for image source
  const [scrollYProgress, setScrollYProgress] = useState(0); // Track scroll progress
  const [motionLoaded, setMotionLoaded] = useState(false); // Track if motion is loaded

  useEffect(() => {
    // Dynamically load React and Framer Motion if they're not already available
    const loadScripts = () => {
      if (!window.React) {
        const reactScript = document.createElement('script');
        reactScript.src = 'https://unpkg.com/react@18.2.0/umd/react.production.min.js';
        reactScript.async = true;
        document.head.appendChild(reactScript);
      }

      const motionScript = document.createElement('script');
      motionScript.src = 'https://cdn.jsdelivr.net/npm/framer-motion@12.4.7/dist/framer-motion.umd.min.js';
      motionScript.defer = true;

      motionScript.onload = () => {
        setMotionLoaded(true); // Mark as loaded when script is available
      };

      document.head.appendChild(motionScript);
    };

    loadScripts();

    return () => {
      const motionScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/framer-motion@12.4.7/dist/framer-motion.umd.min.js"]');
      if (motionScript) document.head.removeChild(motionScript);
    };
  }, []);

  useEffect(() => {
    if (motionLoaded && window.motion) {
      const { motion, useScroll, useTransform, useSpring } = window.motion;
      
      // Get scrollY progress from Framer Motion
      const { scrollYProgress } = useScroll();
      const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
      const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

      const smoothY = useSpring(y, {
        stiffness: 90,
        damping: 20,
        restDelta: 0.001,
      });

      const smoothScale = useSpring(scale, {
        stiffness: 90,
        damping: 20,
        restDelta: 0.001,
      });

      // Update image source based on scroll position
      const handleScrollChange = () => {
        const progress = scrollYProgress.get(); // Get current scroll position

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
      };

      const unsubscribe = scrollYProgress.onChange(handleScrollChange);

      return () => {
        unsubscribe(); // Cleanup when component unmounts
      };
    }
  }, [motionLoaded]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {/* Ensuring that motionLoaded and Framer Motion are ready */}
      {motionLoaded && window.motion && (
        <motion.div
          style={{
            position: 'relative',
            willChange: 'transform',
            // Removing the top value to prevent out-of-screen positioning
            y: smoothY, // Apply the animated y position
            scale: smoothScale, // Apply the animated scale
            display: 'flex', // Make sure the container is visible
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Ensure div takes full height
          }}
        >
          <img
            src={imageSrc}
            alt="Image"
            style={{
              width: '100%',
              height: 'auto', // Maintain aspect ratio
              maxHeight: '100vh', // Prevent the image from growing too large
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Animation;
