// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SplitFlapText = () => {
//   const texts = ["Pritesh", "John","Abcfer"]; // Array of words to display
//   const [currentTextIndex, setCurrentTextIndex] = useState(0); // Keeps track of the current word index
//   const [showExit, setShowExit] = useState(false); // State to control when to trigger exit for the current word

//   useEffect(() => {
//     // Wait for 3 seconds after each word has been shown before triggering the exit animation
//     const exitTimer = setTimeout(() => {
//       setShowExit(true);
//     }, 2000); // 3 seconds before triggering the exit

//     return () => clearTimeout(exitTimer); // Cleanup timer
//   }, [currentTextIndex]); // Runs the effect whenever the currentTextIndex changes

//   useEffect(() => {
//     // After the first word's exit animation is done, start the next word
//     if (showExit) {
//       const changeWordTimer = setTimeout(() => {
//         setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Switch to the next word
//         setShowExit(false); // Reset exit state for the new word
//       }, 2000); // After the word finishes exiting, switch to the next word after a short delay

//       return () => clearTimeout(changeWordTimer); // Cleanup word change timer
//     }
//   }, [showExit]); // Runs after showExit state is triggered

//   return (
//     <motion.div className="h-screen w-full bg-amber-700 text-white text-6xl flex flex-col items-center justify-center">
//       <motion.div className="flex">
//         <AnimatePresence>
//           {/* Keying AnimatePresence to force re-render when currentTextIndex changes */}
//           {currentTextIndex == 0 && texts[currentTextIndex].split("").map((letter, i) => {
//             return (
//               <motion.span
//                 key={`${currentTextIndex}-${i}`} // Key based on the currentTextIndex and letter index
//                 initial={{
//                   opacity: 0,
//                   y: 50, // Ensure that letters of the new word come in from below
//                 }}
//                 transition={{
//                   delay: 0.2 * i,
//                   duration: 0.3,
//                 }}
//                 animate={showExit ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
//               >
//                 {letter}
//               </motion.span>
//             );
//           })}
//         </AnimatePresence>
//       </motion.div>

//       <motion.div className="flex absolute left-205">
//         <AnimatePresence>
//           {currentTextIndex<2 && texts[currentTextIndex+1].split("").map((letter, i) => {
//             return (
//               <motion.span
//                 key={`${currentTextIndex}-${i}`}
//                 initial={{
//                   opacity: 0,
//                   y: 50,
//                 }}
//                 animate={showExit && {
//                     opacity : 1,
//                     y : 0
//                 }}
//                 transition={{
//                   delay: 0.3 * i,
//                   duration: 0.3,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             );
//           })}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SplitFlapText;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SplitFlapText = () => {
//   const texts = ["Pritesh", "John", "Abcfer"];
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(timer);
//   }, [texts.length]);

//   const letterVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -50 }
//   };

//   return (
//     <div className="h-screen w-full bg-amber-700 flex items-center justify-center">
//       <motion.div className="text-white text-6xl flex">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentTextIndex}
//             className="flex"
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             {texts[currentTextIndex].split("").map((letter, i) => (
//               <motion.span
//                 key={i}
//                 variants={letterVariants}
//                 transition={{
//                   delay: i * 0.1,
//                   duration: 0.3,
//                   ease: "easeInOut"
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default SplitFlapText;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";  // Fixed: from "motion/react" to "framer-motion"

const SplitFlapText = () => {
  const texts = ["conversion", "engagement", "loyalty"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  console.log(currentTextIndex);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Total cycle time: 3s for each word

    return () => clearInterval(timer);
  }, []);

  const letterVariants = {
    initial: { opacity: 0, y: 40 }, // New letters come from below
    animate: { opacity: 1, y: 0 }, // Resting state
    exit: { opacity: 0, y: -40 }, // Old letters exit upward
  };

  // Adjust timing based on the word being animated
  const getTransitionDuration = () => {
    if (currentTextIndex === 0) {
      return 0.6; // Longer for "conversion"
    } else if (currentTextIndex === 1) {
      return 0.7; // Shorter for "engagement" to prevent collision
    } else {
      return 0.5 ; // Standard duration for "loyalty"
    }
  };

  return (
    <div className="h-screen w-full bg-black text-5xl flex items-center justify-center">
      <div className="inline-flex flex-col">
        <h1 className="text-white inline">
          We build eCommerce <br /> experiences that <br /> drive{" "}
        </h1>
        <motion.span
          className="text-white text-6xl flex"
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
                  delay: i * 0.15, // Stagger by 0.15s per letter
                  duration: getTransitionDuration(), // Adjust duration dynamically based on word
                  ease: "easeInOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.span>
      </div>
    </div>
  );
};

export default SplitFlapText;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
 
// const SplitFlapText = () => {
//   const texts = ["engagement", "conversion", "loyalty"];
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
 
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3500); // Total cycle time: 2s display + 1.5s transition
 
//     return () => clearInterval(timer);
//   }, [texts.length]);
 
//   const letterVariants = {
//     initial: { opacity: 0, y: 20 }, // New letters come from below
//     animate: { opacity: 1, y: 0 },  // Resting state
//     exit: { opacity: 0, y: -20 },   // Old letters exit upward
//   };
 
//   return (
//     <div className="h-screen w-full bg-black text-5xl flex items-center justify-center">
//       <div className="inline-flex flex-col">
//         <h1 className="text-white inline">
//           We build eCommerce <br /> experiences that <br /> drive{" "}
//         </h1>
//         <motion.span
//         className="text-white text-6xl flex"
//       >
//         <AnimatePresence mode="popLayout">
//           {texts[currentTextIndex].split("").map((letter, i) => (
//             <motion.span
//               key={`${currentTextIndex}-${i}`} // Unique key per letter per word
//               variants={letterVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               transition={{
//                 delay: i * 0.15, // Stagger by 0.2s per letter
//                 duration: currentTextIndex === 0 ? 0.5 : 0.4, // Faster exit for "engagement"
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </AnimatePresence>
//       </motion.span>
//       </div>
//     </div>
//   );    
// };
 
// export default SplitFlapText;