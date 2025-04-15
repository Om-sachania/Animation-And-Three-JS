const tl  = gsap.timeline();

tl.from('h2',{
    y : -20,
    duration : 1.5,
    delay : 1,
    opacity : 0
})

tl.from('li',{
    y : -20,
    duration : 1.5,
    opacity : 0,
    stagger : 1
})

tl.from('h1',{
    opacity : 0
})