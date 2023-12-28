
var tl = gsap.timeline()

tl.from(".pg1",{
    opacity: 0,
    duration: 1.2,
    x: -2500
})

tl.from(".logo",{
y: -20,
duration: 0.5,
opacity: 0

})

tl.from(".icons",{
    y: -20,
    opacity: 0,
    duration: 0.5
})

tl.from(".account",{
    x: -20,
    duration: 0.5,
    opacity: 0
})

tl.from(".shoes",{
    x: -20,
    duration: 0.5,
    opacity: 0
})

tl.from(".content h1",{
    y: 20,
    duration: 0.7,
    opacity: 0
})

tl.from(".shoe",{
    y: -80,
    opacity: 0
})

tl.from(".name",{
    y: -50,
    duration: 0.6,
    opacity: 0
})

tl.from("button", {
    y: -20,
    duration: 0.6,
    opacity: 0,
   
})