import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../GSAP.css';

gsap.registerPlugin(ScrollTrigger);

const GSAPScrollAnimation = () => {
  const racesRef = useRef();
  const parentRef = useRef();
  useEffect(() => {
    const races = racesRef.current;
    const parentDiv = parentRef.current;
  
    const createAnimation = () => {
      let racesWidth = races.offsetWidth;
      let amountToScroll = racesWidth - window.innerWidth;
  
      const tween = gsap.to(races, {
        x: -amountToScroll,
        ease: 'none',
      });
  
      ScrollTrigger.create({
        trigger: parentDiv,
        start: 'top',
        end: amountToScroll,
        pin: true,
        animation: tween,
        scrub: 1,
        markers: true,
      });
    };
  
    createAnimation();
  
    window.addEventListener('resize', () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(races);
      createAnimation();
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(races);
      window.removeEventListener('resize', () => {});
    };
  }, []);
  

  return (
    <>
    <div className="space-50vh h-40 bg-amber-200"></div>
    <div className='racesWrapper' ref={parentRef}>
      <div className='races' ref={racesRef}>
        <h2>Monaco</h2>
        <h2>Austria</h2>
        <h2>Hungary</h2>
        <h2>Netherlands</h2>
        <h2>Japan</h2>
      </div>
    </div>
    <div className='space-100vh h-40 bg-cyan-200'></div>
    </>
  );
};

export default GSAPScrollAnimation;
