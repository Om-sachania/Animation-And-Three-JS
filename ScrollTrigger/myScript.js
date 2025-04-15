gsap.to('#imageDiv',{
    y: () => window.scrollY * 0.5,
    duration : 0.3,
    scrollTrigger : {
        trigger : '#imageDiv',
        scroller : 'body',
        markers : true,
        start : 'top top',
        // end: '', 
        scrub : 2,
        onUpdate: (self) => {
            // Restrict movement of #imageDiv within the height of #page2
            let page2Height = document.querySelector('#page2').offsetHeight;
            let scrollProgress = self.progress;  // Current scroll progress (0 to 1)
            
            // Calculate the max movement (based on the height of #page2)
            let maxMovement = page2Height-70 - document.querySelector('#imageDiv').offsetHeight;
            
            // Set y position based on scroll progress and restrict to maxMovement
            gsap.set('#imageDiv', {
                y: scrollProgress * maxMovement
            });
        }
    }
})