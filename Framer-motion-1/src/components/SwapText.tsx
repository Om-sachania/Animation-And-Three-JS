import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react";

const SwapText = () => {
    const texts = ["conversion","engagement", "loyalty"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
      console.log(currentTextIndex)
    useEffect(() => {
  
      const timer = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000); // Total cycle time: 2s display + 1.5s transition
  
      return () => clearInterval(timer);
    }, []);
  
    const letterVariants = {
      initial: { opacity: 0, y: 40 }, // New letters come from below
      animate: { opacity: 1, y: 0 }, // Resting state
      exit: { opacity: 0, y: -50 }, // Old letters exit upward
    };
  
    return (
      <div className="h-screen w-full bg-black text-5xl flex items-center justify-center">
        <h1 className="text-white">
          We build eCommerce <br/>experiences that <br/>drives
          <motion.span
            className="flex"
            style={{ color: '#d1ff19' }}
          >
            <AnimatePresence mode="popLayout">
              {texts[currentTextIndex].split("").map((letter, i) => (
                <motion.span
                  key={`${currentTextIndex}-${i}`} // Unique key per letter per word
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    delay: i * 0.1, // Stagger by 0.2s per letter
                    duration: currentTextIndex === 1 ? 0.6 : 0.4, // Faster exit for "engagement"
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.span>
        </h1>
      </div>
    );
}

export default SwapText