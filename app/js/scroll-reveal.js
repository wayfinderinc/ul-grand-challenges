// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);


let gccCover = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-collectivefuture-1",
    pin: false,
    start: "top bottom",
    end: "top 80%",
    scrub: 1,
    // snap: {
    //   snapTo: "labels", // snap to the closest label in the timeline
    //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    // }
  }
});

gccCover.to(".cover-blur", {autoAlpha:1});

let collectiveFuture = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-collectivefuture-1",
    pin: false,
    start: "top 96%",
    end: "top top",
    scrub: 1,
  }
});

collectiveFuture.to(".gc-cover", {autoAlpha:0}, 0)
  .to('.app-section', {text: "Our Collective Future", ease: "none"}, 0);

var collectiveFuture1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-collectivefuture-1",
    scrub: true,
    start: "top bottom",
    containerAnimation: scrollTween,
    end: "+=100%",
  }
});

collectiveFuture1.to('.next-section', { text: "Our Collective Future", ease: "none"})
  .from('.video-mask', { scale:.4, autoAlpha:0, ease: "none" }, 0);

gsap.from(".pager3-1 .fill-1 .fill", {
  scrollTrigger: {
    trigger: ".our-collectivefuture-1",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var collectiveFuture1out = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-collectivefuture-2",
    scrub: true,
    start: "top bottom",
    containerAnimation: scrollTween,
    end: "+=100%",
  }
});

collectiveFuture1out.to(".pager3-1 .fill-1 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1 .fill-2 .fill", {
  scrollTrigger: {
    trigger: ".our-collectivefuture-2",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

// --- PURPLE/GREEN PANEL ---
var collectiveFuture2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-collectivefuture-2",
    scrub: true,
    start: "top 88%",
    end: "top 24%",
  }
});

collectiveFuture2.to(".video-mask", {width:'49%', height:'100%', borderRadius:'0', top:'0', left:'50%', transform: 'translate(3%, 0%)'}, 0);

var collectiveFuture2out = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-collectivefuture-3",
    scrub: true,
    start: "top bottom",
    containerAnimation: scrollTween,
    end: "+=100%",
  }
});

collectiveFuture2out.to(".pager3-1 .fill-2 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1 .fill-3 .fill", {
  scrollTrigger: {
    trigger: ".our-collectivefuture-3",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var collectiveFuture3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-collectivefuture-3",
    scrub: true,
    start: "top 72%",
    end: "top 32%",
  }
});

collectiveFuture3.to(".video-mask", {width:'100%', height:'50%', top:'0', left:'0', transform: 'translate(0%, 0%)'}, 0);

var ourCommitment = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-commitment",
    scrub: true,
    start: "top bottom",
    end: "top top",
  }
});

ourCommitment.to(".video-mask", {yPercent:-100}, 0)
  .to(".pager3-1", {autoAlpha:0}, 0)
  .to(".pager3-1 .fill-3 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0)
  .to('.app-section', { duration: .5, text: "Our Commitment", ease: "none"}, 0)
  .to('.next-section', { duration: .5, text: "The Grand Challenges: Resilience for a Sustainable Future", ease: "none"}, 0);

let ourCommitmentPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-commitment",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=50%"
  }
});

var ourCommitmentOut = gsap.timeline({
  scrollTrigger: {
    trigger: ".sustainable-future",
    scrub: true,
    start: "top bottom",
    end: "top top",
  }
});

ourCommitmentOut.to('.app-section', { duration: .5, text: "Resilience for a Sustainable Future", ease: "none"}, 0)
  .to('.next-section', { duration: .5, text: "The Grand Challenges: Individual and Societal Health in the 21st Century", ease: "none"}, 0);

let sustainableFutureCover = gsap.timeline({
  scrollTrigger: {
    trigger: ".sustainable-future",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=50%"
  }
});


var sustainableFuture1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sustainable-future-1",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

sustainableFuture1.from('.video-mask-sustainable-future', { scale:.4, autoAlpha:0, ease: "none" }, 0)
.to(".pager3-1-sustainable-future", {autoAlpha:1}, 0);

gsap.from(".pager3-1-sustainable-future .fill-1 .fill", {
  scrollTrigger: {
    trigger: ".sustainable-future-1",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var sustainableFuture1out = gsap.timeline({
  scrollTrigger: {
    trigger: ".sustainable-future-2",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

sustainableFuture1out.to(".pager3-1-sustainable-future .fill-1 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1-sustainable-future .fill-2 .fill", {
  scrollTrigger: {
    trigger: ".sustainable-future-2",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

// --- PURPLE/GREEN PANEL ---
var sustainableFuture2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sustainable-future-2",
    scrub: true,
    start: "top 88%",
    end: "top 24%",
  }
});

sustainableFuture2.to(".video-mask-sustainable-future", {width:'49%', height:'100%', borderRadius:'0', top:'0', left:'50%', transform: 'translate(3%, 0%)'}, 0);

var sustainableFuture2out = gsap.timeline({
  scrollTrigger: {
    trigger: ".sustainable-future-3",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

sustainableFuture2out.to(".pager3-1-sustainable-future .fill-2 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1-sustainable-future .fill-3 .fill", {
  scrollTrigger: {
    trigger: ".sustainable-future-3",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var sustainableFuture3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sustainable-future-3",
    scrub: true,
    start: "top 72%",
    end: "top 32%",
  }
});

sustainableFuture3.to(".video-mask-sustainable-future", {width:'100%', height:'50%', top:'0', left:'0', transform: 'translate(0%, 0%)'}, 0);

var ourHealth = gsap.timeline({
  scrollTrigger: {
    trigger: ".health",
    scrub: true,
    start: "top bottom",
    end: "top top",
  }
});

ourHealth.to(".video-mask-sustainable-future", {yPercent:-100}, 0)
  .to(".pager3-1-sustainable-future", {autoAlpha:0}, 0)
  .to(".pager3-1-sustainable-future .fill-3 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0)
  .to('.app-section', { duration: .5, text: "Individual and Societal Health in the 21st Century", ease: "none"}, 0)
  .to('.next-section', { duration: .5, text: "The Grand Challenges: Safety at the Human-Digital Interface", ease: "none"}, 0);

let healthCover = gsap.timeline({
  scrollTrigger: {
    trigger: ".health",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=50%"
  }
});


var health1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-1",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

health1.from('.video-mask-health', { scale:.4, autoAlpha:0, ease: "none" }, 0)
  .to(".pager3-1-health", {autoAlpha:1}, 0);
  
gsap.from(".pager3-1-health .fill-1 .fill", {
  scrollTrigger: {
    trigger: ".health-1",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});
  
var health1out = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-2",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

health1out.to(".pager3-1-health .fill-1 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1-health .fill-2 .fill", {
  scrollTrigger: {
    trigger: ".health-2",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

// --- PURPLE/GREEN PANEL ---
var health2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-2",
    scrub: true,
    start: "top 88%",
    end: "top 24%",
  }
});

health2.to(".video-mask-health", {width:'49%', height:'100%', borderRadius:'0', top:'0', left:'50%', transform: 'translate(3%, 0%)'}, 0);

var health2out = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-3",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

health2out.to(".pager3-1-health .fill-2 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);
  
gsap.from(".pager3-1-health .fill-3 .fill", {
  scrollTrigger: {
    trigger: ".health-3",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var health3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-3",
    scrub: true,
    start: "top 72%",
    end: "top 32%",
  }
});

health3.to(".video-mask-health", {width:'44%', height:'auto', borderRadius:'50%', top:'50%', left:'50%', transform: 'translate(-8%, -50%)'}, 0);

var health3out = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-4",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

health3out.to(".pager3-1-health .fill-3 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1-health .fill-4 .fill", {
  scrollTrigger: {
    trigger: ".health-4",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var health4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-4",
    scrub: true,
    start: "top 72%",
    end: "top 32%",
  }
});

health4.to(".video-mask-health", {width:'49%', height:'100%', borderRadius:'0', top:'0', left:'50%', transform: 'translate(3%, 0%)'}, 0);

var health4out = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-5",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

health4out.to(".pager3-1-health .fill-4 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);
  
gsap.from(".pager3-1-health .fill-5 .fill", {
  scrollTrigger: {
    trigger: ".health-5",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var health5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".health-5",
    scrub: true,
    start: "top 72%",
    end: "top 32%",
  }
});

health5.to(".video-mask-health", {width:'44%', height:'auto', borderRadius:'50%', top:'50%', left:'50%', transform: 'translate(-8%, -50%)'}, 0);
  
var human = gsap.timeline({
  scrollTrigger: {
    trigger: ".human",
    scrub: true,
    start: "top bottom",
    end: "top top",
  }
});

human.to(".video-mask-health", {yPercent:-240}, 0)
  .to(".pager3-1-health", {autoAlpha:0}, 0)
  .to(".pager3-1-health .fill-5 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0)
  .to('.app-section', { duration: .5, text: "Safety at the Human-Digital Interface", ease: "none"}, 0)
  .to('.next-section', { duration: .5, text: "How Can I Get Involved?", ease: "none"}, 0);

let humanCover = gsap.timeline({
  scrollTrigger: {
    trigger: ".human",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=50%"
  }
});


var human1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".human-1",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

human1.from('.video-mask-human', { xPercent:100, ease: "none" }, 0)
  .to(".pager3-1-human", {autoAlpha:1}, 0);
  
gsap.from(".pager3-1-human .fill-1 .fill", {
  scrollTrigger: {
    trigger: ".human-1",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});
  
var human1out = gsap.timeline({
  scrollTrigger: {
    trigger: ".human-2",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

human1out.to(".pager3-1-human .fill-1 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1-human .fill-2 .fill", {
  scrollTrigger: {
    trigger: ".human-2",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

// --- PURPLE/GREEN PANEL ---
var human2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".human-2",
    scrub: true,
    start: "top 88%",
    end: "top 24%",
  }
});

human2.to(".video-mask-human", {width:'44%', height:'auto', borderRadius:'50%', top:'50%', left:'50%', transform: 'translate(-8%, -50%)'}, 0);

var human2out = gsap.timeline({
  scrollTrigger: {
    trigger: ".human-3",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

human2out.to(".pager3-1-human .fill-2 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1-human .fill-3 .fill", {
  scrollTrigger: {
    trigger: ".human-3",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var human3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".human-3",
    scrub: true,
    start: "top 72%",
    end: "top 32%",
  }
});

human3.to(".video-mask-human", {width:'49%', height:'100%', borderRadius:'0', top:'0', left:'50%', transform: 'translate(3%, 0%)'}, 0);

var human3out = gsap.timeline({
  scrollTrigger: {
    trigger: ".human-4",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  }
});

human3out.to(".pager3-1-human .fill-3 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0);

gsap.from(".pager3-1-human .fill-4 .fill", {
  scrollTrigger: {
    trigger: ".human-4",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleY: 0, 
  transformOrigin: "left top", 
  ease: "none"
});

var human4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".human-4",
    scrub: true,
    start: "top 72%",
    end: "top 32%",
  }
});

human4.to(".video-mask-human", {width:'100%', height:'50%', top:'0', left:'0', transform: 'translate(0%, 0%)'}, 0);

var involved = gsap.timeline({
  scrollTrigger: {
    trigger: ".involved",
    scrub: true,
    start: "top bottom",
    end: "top top",
  }
});

involved.to(".video-mask-human", {yPercent:-100}, 0)
  .to(".pager3-1-human", {autoAlpha:0}, 0)
  .to(".pager3-1-human .fill-3 .fill", {scaleY: 0, transformOrigin: "left bottom", ease: "none"}, 0)
  .to('.app-section', { duration: .5, text: "How Can I Get Involved", ease: "none"}, 0)
  .to('.app-control', { duration: .5, autoAlpha:0}, 0);