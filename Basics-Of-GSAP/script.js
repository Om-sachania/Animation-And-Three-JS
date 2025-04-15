// gsap.to('.astronaut',{
//     duration : 20,
//     rotation : 360
// })

// gsap.from('.ball',{
//     duration : 1.5,
//     opacity : 0,
//     y : 'random(-200,200)',
//     stagger : 0.25
// })

// const tween = gsap.timeline({ paused: true });

// tween.from('.ball',{
//     duration : 5,
//     opacity : 0,
//     y: 200,
//     stagger : 1,
// });

// tween.to('.astronaut', {
//     duration: 20,
//     rotation: 360
// },'<');

// document.querySelector(".playButton").onclick = ()=> tween.play()
// document.querySelector(".pauseButton").onclick = ()=> tween.pause()
// document.querySelector(".seekButton").onclick = ()=> tween.seek(2) // This moves the animation to 2sec mark (IT takes animation to 2sec)
// document.querySelector(".progressButton").onclick = ()=> tween.progress(0.5)
// document.querySelector(".reverseButton").onclick = ()=> tween.reverse()
// document.querySelector(".timeScaleButton4").onclick = ()=> tween.timeScale(4)
// document.querySelector(".timeScaleButton2").onclick = ()=> tween.timeScale(0.2)


// SETTING UP TIMELINE : 

// const tl = gsap.timeline();

// tl.from('.astronaut', {
//     duration: 2,
//     opacity : 0,
//     scale : 1.5,
//     ease : 'bounce'
// });

// tl.from('.ball',{
//     duration : 3,
//     opacity : 0,
//     y: 200,
//     stagger : 0.5,
// });


//..................................................

gsap.to(".box", { 
    rotation: 360,
    x: 1000,
    xPercent: -100,
    // special properties
    duration: 3, // how long the animation lasts
    repeat: 3, // the number of repeats - this will play 3 times
    yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
  });
