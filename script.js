function pageone()
{ 
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#background",
            start: " top 0 ",
            scrub: 1,
            pin: true,
            // markers : true,
    
        }
    })
    
    
     
    tl
    .from("#cimg", {
        left: 2000,
        ease: Power1,
    }) 
    .to("#circle #btm img", {
        rotate: "-180deg",
        scale: .6,
        stagger: .1,
        ease: Power1,
        pin:true,
    }, "same")
    .to("#circle #top img", {
        scale: .6,
        ease: Power1
    }, "same")
    .to("#nav #black1", {
        opacity: 0,
        duration: 0.0001
    }, '-=0.6')
    .to("#nav #white1", {
        opacity: 100,
    }, '-=0.6')
    .to("#btmnav #black2", {
        opacity: 0,
        duration: 0.0001
    }, '-=0.63')
    .to("#btmnav #black2 #de", {
        opacity: 0,
        duration: 0.0001
    }, '-=0.66')
    .to("#btmnav #white2 img", {
        opacity: 100,
    }, '-=0.63')
    .to("#btmnav #white2 #le", {
        opacity: 100,
    }, '-=0.66')
    .to("#cimg h5", {
        opacity: 0,  
        ease: Power1,  
    }, '-=0.7')
    .to("#cimg #photo img", {
        scale: 0,
        ease: Power1
    },'-=0.59')
    .to("#circle", {
        scale: 0,
        ease: Power1,
    }) 
    .from("#vscircle", {
        top: 1900,
        scale: -1,
        ease: Power1,
    },'-=1.3')
    .to("#vscircle", {
        opacity: 0,
        ease: Power1
    }, '-=0.6')
    
    .to("#overlay #gallery", {
        bottom: -200,
        ease: Power1,
    },"same") 
    .from("#pink", {
        rotate: 100,
        top: 1900,
        ease: Power1,
    },'-=0.8')
    .to("#leftbox", {
        top: 0,
        ease: Power1,
    },'-=0.3')
    .to("#leftbox", {
        top: -500,
        ease: Power1,
    })
    
}
function pagetwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: " top 0 ",
            scrub: 1,
            pin: true,
            // markers : true,
    
        }
    
    })
    
    tl2
    .from(".circle" , {
        top: `140%`,
        ease: Power1,
        stagger: .15
    },"sa")
    .from(".pi" , {
       width:`10vw`,
       height:`10vw`
    },"sa")
    .from(".pu" , {
        width:`10vw`,
        height:`10vw`
     },"sa")
     .to(".circle" , {
        left:`50%`,
        ease: Power1,
        stagger: .15
    })
    .to(".circle" , {
        width:`15vw`,
        height:`15vw`,
        ease: Power1,
    })
    .to(".circle" , {
        scale:12,
        ease: Power1,
        duration: 2
    },"bdda")
    .to("#stop>h1" , {
        left:`-220%`,
        ease: Power1,
        duration: 2
    },"sam")
    .to(".circle" , {
        background:`linear-gradient( to right, #105099, #DCF0CF)`,
        ease: Power1,
    })
    .to("#sbtm #p2" , {
        opacity: 0,
        ease: Power1,
        duration:.5
    },"sam")
    .to("#sbtm #p1" , {
        opacity: 1,
        ease: Power1,
        delay:0.2,
        duration:1
    },"sam")
    .to("#number>h1" , {
        y: -30,
        duration:1
    },"bdda")
    .to("#number>h1" , {
        y: -70,
        duration:1
    },"bdda")
    .to("#number>h1" , {
        y: -120,
        duration:1
    },"ek")
    .from("#box" , {
        y:500,
        stagger:.1,
        duration:1
    },"ek")
    .from("#series" , {
        y:500,
        stagger:.1,
        duration:1
    },"ek")
    .to("#series" , {
       x: -50
    })
    .to("#series #upper" , {
        x: -100
     },"jk")
     .to("#series #lower" , {
        x: -150
     },"jk")
     
     
    
    
    
    
}


pageone();
pagetwo();



 

 
 

