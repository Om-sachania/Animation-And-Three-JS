import React, { useState, useEffect } from "react";
import Image1 from "../assets/images/sandy_bg_update_1.svg";
import Image2 from "../assets/images/sandy-bg-update-2.svg";
import Image3 from "../assets/images/sandy-bg-update-3.svg";
import Image4 from "../assets/images/sandy-bg-update-4.svg";
import Image5 from "../assets/images/sandy-bg-update-5.svg";
import Image6 from "../assets/images/sandy-bg-update-6.svg";
import Image7 from "../assets/images/sandy-bg-update-7.svg";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ImageFramerMotion = () => {
  // Track scroll position
  const { scrollYProgress } = useScroll();

  // Map scroll progress to a vertical offset for the image (0 to 800)
  const y = useTransform(scrollYProgress, [0, 1], [0, 1200]);

  // Map scroll progress to scale of the image (starting from 1 to shrinking to 0.2)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

  // Smooth the transformations using `useSpring`
  const smoothY = useSpring(y, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  const smoothScale = useSpring(scale, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  // State to control the image source change
  const [imageSrc, setImageSrc] = useState(Image1);

  useEffect(() => {
    // Update image source based on scrollYProgress
    const handleImageChange = () => {
      const progress = scrollYProgress.get(); // Get current scroll position

      // Change images based on scroll progress
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

    // Listen to scroll progress change and update image source accordingly
    const unsubscribe = scrollYProgress.onChange(handleImageChange);

    return () => unsubscribe(); // Cleanup the listener when component unmounts
  }, [scrollYProgress]);

  // Get the current screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the motion styles based on screen width
  const getMotionStyles = () => {
    if (screenWidth >= 1025 && screenWidth <= 1280) {
      return { top: "-400px", scale: smoothScale };
    } else if (screenWidth >= 1281 && screenWidth <= 1390) {
      return { top: "-450px", scale: smoothScale };
    } else if (screenWidth >= 1391 && screenWidth <= 1510) {
      return { top: "-500px", scale: smoothScale };
    } else if (screenWidth >= 1511 && screenWidth <= 1600) {
      return { top: "-550px", scale: smoothScale };
    } else if (screenWidth >= 1681 && screenWidth <= 1720) {
      return { top: "-600px", scale: smoothScale };
    } else if (screenWidth >= 1721 && screenWidth <= 1920) {
      return { top: "-680px", scale: smoothScale };
    } else {
      return { top: "-550px", scale: smoothScale }; // Default for smaller screens
    }
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex justify-center">
          <motion.img
            src={imageSrc}
            alt="Image"
            height="auto"
            width="100%"
            style={{
              position: "relative",
              // transform: `translate3d(0, ${smoothY}, 0)`,
              willChange: "tansform, scale",
              ...getMotionStyles(), // Dynamically apply styles based on screen width
              y: smoothY,
            }}
          />
        </div>
      </div>
        {/* <div className="bg-amber-300 h-screen"></div>
        <div className="bg-amber-950 h-screen"></div> */}
    </>
  );
};

export default ImageFramerMotion;
