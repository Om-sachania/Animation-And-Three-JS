import React from 'react';
// import { motion, useScroll, useTransform } from 'motion/react';

const PinEffect = () => {
    const { scrollYProgress } = useScroll();
  
    // Make the element fade and scale based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  
    return (
      <div className="h-screen">
        <div className="h-screen bg-blue-300">
          Scroll down to see the pin and effect.
        </div>
  
        <motion.div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            opacity: opacity,
            scale: scale
          }}
        >
          <div className="w-full h-64 bg-red-500">
            Pinning with opacity and scale effects
          </div>
        </motion.div>
  
        <div className="h-screen bg-green-300">
          Keep scrolling to see the end.
        </div>
      </div>
    );
  };
  
export default PinEffect