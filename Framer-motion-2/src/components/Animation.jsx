import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animation = () => {
  const words = ["Hello", "World", "abcde", "ADHJDDSJ"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const wordDisplayDuration = 3300;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, wordDisplayDuration);

    return () => clearInterval(timer);
  }, []);

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5, 
      },
    },
  };

  return (
    <motion.div className="bg-amber-200 w-full h-screen flex flex-col items-center justify-center text-4xl">
      <AnimatePresence>
        <motion.div className="flex">
          {currentIndex > 0 &&
            words[currentIndex - 1]
              .split("")
              .map((letter, index) => (
                <motion.span
                  key={`exit-${currentIndex - 1}-${index}`}
                  initial={{ opacity: 1, y: 80 }}
                  animate={{ opacity: 0, y: -50 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    delay: 0.4 * index,
                    duration: 0.5,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
        </motion.div>
      </AnimatePresence>

      <motion.div className="flex">
        <AnimatePresence>
          {words[currentIndex].split("").map((letter, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              // exit="exit"
              transition={{
                delay: 0.4 * index, // Delay each letter’s entrance
                duration: 0.5,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Animation;
