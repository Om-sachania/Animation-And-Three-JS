let initialPath = `M 10 100 Q 250 100 490 100`

let finalPath = `M 10 100 Q 250 100 490 100`

const string = document.querySelector('#string');

string.addEventListener('mousemove',function(e){
    initialPath = `M 10 100 Q ${e.x} ${e.y} 490 100`;

    gsap.to("svg path",{
        attr : {d: initialPath},
        duration : 0.3,
        ease : 'power3.out'
    })
})

string.addEventListener('mouseleave',function(e){
    gsap.to("svg path",{
        attr : {d: finalPath},
        duration : 2,
        ease : 'elastic.out(1,0.1)'
    })
})