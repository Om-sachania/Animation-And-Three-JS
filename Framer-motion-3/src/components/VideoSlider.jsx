import React from "react";
import Marquee from "react-fast-marquee";
import Image1 from "../assets/images/video-slider-thumb-1.webp";
import Image2 from "../assets/images/video-slider-thumb-2.webp";
import Image3 from "../assets/images/video-slider-thumb-3.webp";
import Image4 from "../assets/images/video-slider-thumb-4.webp";
import Image5 from "../assets/images/video-slider-thumb-5.webp";
import Image6 from "../assets/images/video-slider-thumb-6.webp";

const Slider = () => {
  const imagesArr = [Image1, Image2, Image3, Image4,Image5,Image6];
  return (
    <div className="w-full bg-amber-200 h-96 flex items-center">
      <div>
        <Marquee speed={200}>
          {imagesArr.map((img, index) => (
            <div className="image-wrapper mx-8">
              <img src={img} alt="" height={260} width={240} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;

// import React from "react";
// import { motion } from "framer-motion";
// import Image1 from "../assets/images/video-slider-thumb-1.webp";
// import Image2 from "../assets/images/video-slider-thumb-2.webp";
// import Image3 from "../assets/images/video-slider-thumb-3.webp";
// import Image4 from "../assets/images/video-slider-thumb-4.webp";
// import Image5 from "../assets/images/video-slider-thumb-5.webp";
// import Image6 from "../assets/images/video-slider-thumb-6.webp";

// const imagesArr1 = [Image1, Image2, Image3];
// const imagesArr2 = [Image1, Image2, Image3];

// const Slider = () => {
//   // Component to render a single set of images
//   const ImageSet = () => (
//     <>
//       {imagesArr1.map((img, index) => (
//         <div key={`arr1-${index}`} className="image-wrapper">
//           <img src={img} alt={`Slider ${index}`} height={260} width={240} />
//         </div>
//       ))}
//       {imagesArr2.map((img, index) => (
//         <div key={`arr2-${index}`} className="image-wrapper">
//           <img src={img} alt={`Slider ${index}`} height={260} width={240} />
//         </div>
//       ))}
//     </>
//   );

//   return (
//     <div className="w-full overflow-hidden bg-amber-200 h-96 flex items-center relative">
//       <motion.div
//         className="flex gap-8 min-w-max"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 10,
//         }}
//       >
//         <ImageSet />
//         <ImageSet /> {/* Duplicate for seamless looping */}
//       </motion.div>
//     </div>
//   );
// };

// export default Slider;


// Slider.jsx
// import React, { useEffect, useRef } from "react";
// import Image1 from "../assets/images/video-slider-thumb-1.webp";
// import Image2 from "../assets/images/video-slider-thumb-2.webp";
// import Image3 from "../assets/images/video-slider-thumb-3.webp";
// import Image4 from "../assets/images/video-slider-thumb-4.webp";
// import Image5 from "../assets/images/video-slider-thumb-5.webp";
// import Image6 from "../assets/images/video-slider-thumb-6.webp";
// // import "./Slider.css";

// const Slider = () => {
//   const imagesArr = [Image1, Image2, Image3, Image4, Image5, Image6];
//   const containerRef = useRef(null);
  
//   const baseMargin = 32;
//   const adjustedMargin = Math.max(32, baseMargin / imagesArr.length);
  
//   // We'll create enough copies to fill more than the viewport
//   const numberOfSets = 3; // Adjust this based on your needs
//   const repeatedImages = Array(numberOfSets)
//     .fill()
//     .flatMap(() => imagesArr);

//   useEffect(() => {
//     const container = containerRef.current;
//     const totalWidth = container.scrollWidth / numberOfSets;
//     const speed = 200; // pixels per second
//     const duration = totalWidth / speed;

//     container.style.setProperty('--animation-duration', `${duration}s`);
//   }, []);

//   return (
//     <div className="slider-container">
//       <div className="slider-wrapper" ref={containerRef}>
//         {repeatedImages.map((img, index) => (
//           <div
//             key={index}
//             className="image-wrapper"
//             style={{ 
//               marginLeft: `${adjustedMargin}px`, 
//               marginRight: `${adjustedMargin}px`
//             }}
//           >
//             <img src={img} alt="" height={260} width={240} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;