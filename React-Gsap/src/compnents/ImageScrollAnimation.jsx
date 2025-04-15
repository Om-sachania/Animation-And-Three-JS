// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Import SVG images or you can directly use inline SVGs.
// import Image1 from '../assets/images/sandy_bg_update_1.svg';
// import Image2 from '../assets/images/sandy-bg-update-2.svg';
// import Image3 from '../assets/images/sandy-bg-update-3.svg';
// import Image4 from '../assets/images/sandy-bg-update-4.svg';
// import Image5 from '../assets/images/sandy-bg-update-5.svg';
// import Image6 from '../assets/images/sandy-bg-update-6.svg';
// import Image7 from '../assets/images/sandy-bg-update-7.svg';

// gsap.registerPlugin(ScrollTrigger);

// const ScrollAnimation = () => {
//   const imagesRef = useRef();
//   const image7Ref = useRef();

//   useEffect(()=>{

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: imagesRef.current,
//             scroller: "body",
//             markers: true,  // For debugging - remove later
//             scrub: 3,
//             start: "top 0",
//             end: "bottom 100%",
//         }
//     })

//     tl.fromTo(
//         imagesRef.current,
//         {
//           height: "1000px",
//           opacity: 1,
//         },
//         {
//           height: "750px",
//           opacity: 0,
//           y: 750,
//           x: 100,
//           duration: 3,
//           onComplete: () => {
//             // Remove the image from the DOM once opacity is 0
//             imagesRef.current.style.display = "none";  // Hide the image
//           }
//         }
//     );

//     tl.fromTo(
//         image7Ref.current,
//         {
//           height: "750px",
//           opacity: 0,
//           y: 750,
//           x: 100,
//         },
//         {
//             height: "500px",
//             opacity: 1,
//             y: 1000,
//             x: 200,
//             duration: 3,
//         }
//       );
//   },[])

//   return (
//     <div style={{ height: "150vh",border:'2px solid black'}}>
//       {/* First Image */}
//       <div>
//         <img src={Image1} className='image1' alt="SVG 1" ref={imagesRef}/>
//         <img src={Image7} alt="SVG 2" ref={image7Ref} style={{opacity:0}}/>
//       </div>

//       <div className="page2">

//       </div>
//     </div>
//   );
// };

// export default ScrollAnimation;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your images
import Image1 from '../assets/images/sandy_bg_update_1.svg';
import Image2 from '../assets/images/sandy-bg-update-2.svg';
import Image3 from '../assets/images/sandy-bg-update-3.svg';
import Image4 from '../assets/images/sandy-bg-update-4.svg';
import Image5 from '../assets/images/sandy-bg-update-5.svg';
import Image6 from '../assets/images/sandy-bg-update-6.svg';
import Image7 from '../assets/images/sandy-bg-update-7.svg';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const imagesRef = useRef();
  const image7Ref = useRef();

  useEffect(() => {
    // Creating GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesRef.current,
        scroller: "body",
        markers: true,  // For debugging - remove later
        scrub: 4,
        start: "top top",
        end: "bottom 100%",
      }
    });

    tl.fromTo(
      imagesRef.current,
      {
        height: "1000px",
        opacity: 1,
      },
      {
        height: "250px",
        // opacity: 0,
        y: 750,
        x: 300,
        duration: 5,
      }
    );

    // You can add more animations here

    // GSAP ScrollTrigger for Image Change on Scroll
    // ScrollTrigger.create({
    //   trigger: imagesRef.current,
    //   scroller: "body",
    //   start: "top 0px", // Start animation when image reaches the center of viewport
    //   end: "top 100px", // End the effect when image reaches the bottom of the viewport
    //   onEnter: () => {
    //     imagesRef.current.src = Image2; // Change image on scroll down
    //   },
    //   onLeaveBack: () => {
    //     imagesRef.current.src = Image1; // Revert image on scroll up
    //   },
    // });

    // // Similar ScrollTrigger logic for other images
    // ScrollTrigger.create({
    //   trigger: imagesRef.current,
    //   scroller: "body",
    //   start: "top 201px",
    //   end: "top 300px",
    //   onEnter: () => {
    //     imagesRef.current.src = Image3; // Change to Image3
    //   },
    //   onLeaveBack: () => {
    //     imagesRef.current.src = Image2; // Revert to Image2
    //   }
    // });

    // ScrollTrigger.create({
    //   trigger: imagesRef.current,
    //   scroller: "body",
    //   start: "top 301px",
    //   end: "top 400px",
    //   onEnter: () => {
    //     imagesRef.current.src = Image4; // Change to Image4
    //   },
    //   onLeaveBack: () => {
    //     imagesRef.current.src = Image3; // Revert to Image3
    //   }
    // });

    // ScrollTrigger.create({
    //   trigger: imagesRef.current,
    //   scroller: "body",
    //   start: "top 401px",
    //   end: "top 500px",
    //   onEnter: () => {
    //     imagesRef.current.src = Image5; // Change to Image4
    //   },
    //   onLeaveBack: () => {
    //     imagesRef.current.src = Image4; // Revert to Image3
    //   }
    // });

    // ScrollTrigger.create({
    //   trigger: imagesRef.current,
    //   scroller: "body",
    //   start: "top 501px",
    //   end: "top 600px",
    //   onEnter: () => {
    //     imagesRef.current.src = Image6; // Change to Image4
    //   },
    //   onLeaveBack: () => {
    //     imagesRef.current.src = Image5; // Revert to Image3
    //   }
    // });

    // ScrollTrigger.create({
    //   trigger: imagesRef.current,
    //   scroller: "body",
    //   start: "top 601px",
    //   end: "top 700px",
    //   onEnter: () => {
    //     imagesRef.current.src = Image7; // Change to Image4
    //   },
    //   onLeaveBack: () => {
    //     imagesRef.current.src = Image6; // Revert to Image3
    //   }
    // });

    ScrollTrigger.create({
      trigger: imagesRef.current,
      scroller: "body",
      start: "top 0px",
      end: "top 100px",
      onEnter: () => {
        console.log("Image1 triggered");
        console.log(window.scrollY)
        imagesRef.current.src = Image7;
      },
      onLeaveBack: () => {
        console.log("Image1 reverted");
        imagesRef.current.src = Image1;
      }
    });

    // You can repeat this pattern for other images (Image5, Image6, Image7)
  }, []);

  return (
    <div style={{ height: "150vh", border: "2px solid black" }}>
      <div>
        <img
          src={Image1} // Initially set to Image1
          alt="SVG 1"
          ref={imagesRef}
        />
      </div>
      <div className="page2"></div>
    </div>
  );
};

export default ScrollAnimation;
