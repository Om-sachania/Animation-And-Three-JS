import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Make sure to import from framer-motion, not "motion/react"
import { easeInOut } from "motion";

const PracticeComponent = () => {
  const [first, setfirst] = useState(false);
  return (
    <motion.div className="bg-black w-full h-screen flex flex-col items-center justify-center text-4xl gap-36">
      {/* <motion.div
          className="h-40 w-40 bg-lime-400 text-center"
          initial={{
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            opacity: [0,1,0],
            rotate: [0,360],
            scale: [0,2,0],
          }}
          transition={{
            duration: 3,
            delay: 1,
          }}
        >
        </motion.div> */}

      {/* Practice Problem 1 :  Move a box from x=-100 to x=0*/}
      {/* <motion.div
        className="h-40 w-40 bg-cyan-300"
        initial={{
            x:-300,
        }}
        animate={{
            x:0
        }}
        transition={{
            duration:1
        }}
        >
        </motion.div> */}
      {/* Practice Problem-1 Ended */}

      {/* Practice Problem-2 :  Button Hover Animation */}
      {/* <motion.button 
        className="w-40 h-15 rounded-md bg-amber-100 cursor-pointer"
        whileHover={{
            scale : 1.2
        }}
        >
            CLICK
        </motion.button> */}
      {/* Practice Problem-2 :  Ended */}

      {/* Practice Problem - 3 : Ball With the bouncing effect */}
      {/* <motion.div 
        className="h-40 w-40 bg-blue-600 rounded-full"
        animate={{
            scale : first ? 1.5 : 1
        }}
        transition={{
            // duration : 2,
            type : "spring",
            stiffness : 200,
            damping : 5
        }}
        >

        </motion.div>
        <motion.button 
        className="w-40 h-15 rounded-md bg-amber-100 cursor-pointer"
        whileHover={{
            scale : 1.2
        }}
        onClick={()=>setfirst(!first)}
        >
            CLICK
        </motion.button> */}

      {/* Practice Problem - 3 : Ended */}

      {/* Practice Problem - 4 :  */}

      <motion.div
        className="w-40 h-40 bg-pink-400"
        initial={{
          y: 200,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 2,
          ease: [0.68, -0.6, 0.32, 1.6],
        }}
      ></motion.div>

      <motion.li 
      className="w-40 h-40 bg-orange-500 list-none rounded-full"

      >

      </motion.li>
    </motion.div>
  );
};

export default PracticeComponent;
