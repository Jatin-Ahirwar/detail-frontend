var tl = gsap.timeline()

tl.from("#page1 h1",{
    duration:1.5,
    scale:1.2,
    opacity:0
})
.from("#page1 #img1",{
    y:100,
    duration:1,
    opacity:0
},"-=1")

.from("#page1 #img2",{
    x:100,
    duration:1,
    opacity:0
},"-=1")
.from("#page1 #img3",{
    y:-50,
    duration:1,
    opacity:0
},"-=1")
.from("#page1 #find",{
    y:50,
    duration:1,
    opacity:0

},"-=1")
.from("p , #heading",{
    scrollTrigger:{
        trigger: "p",
        scroller: "body",
        start: "top 80%",
        end: "bottam 50%,",
        markers:true,
        scrub:2
    },
    y:50,
    ease:Expo.easeInOut,
    opacity:0
})
.from("#page2 #about",{
    scrollTrigger:{
        trigger: "#page2 #about",
        scroller: "body",
        start: "top 100%",
        end: "bottam 50%,",
        scrub:2
    },
    y:-100,
    ease:Expo.easeInOut,
    opacity:0
})
.from("#page3 #right h1",{
    scrollTrigger:{
        trigger: "#page3 #right h1",
        scroller: "body",
        start: "top 50%",
        end: "bottam 40%,",
        scrub:2
    },
    y:-100,
    duration:1,
    ease:Expo.easeInOut,
    opacity:0
})

.from("#page3 #right #photodiv",{
    scrollTrigger:{
        trigger: "#page3 #right #photodiv",
        scroller: "body",
        start: "top 150%",
        end: "bottam 30%,",
        scrub:2
    },
    y:-100,
    duration:1,
    ease:Expo.easeInOut,
    opacity:0
})
