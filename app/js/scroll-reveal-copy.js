function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });


  /* Card Reveals */

  gsap.set(".ul-logo", {x: -100, opacity:0});

  ScrollTrigger.batch(".ul-logo", {
    interval: 0.2, // time window (in seconds) for batching to occur. 
    batchMax: 3,   // maximum batch size (targets)
    onEnter: batch => gsap.to(batch, { delay:.2, duration: 1.5, opacity: 1, x: 0, stagger: {each: 0.2, grid: [1, 3]}, overwrite: true, ease:'expo.out'}),
    onLeave: batch => gsap.set(batch, { duration: 1.5, opacity: 0, x: -100, overwrite: true, ease:'expo.out'}),
    onEnterBack: batch => gsap.to(batch, { duration: 1.5, opacity: 1, x: 0, stagger: 0.2, overwrite: true, ease:'expo.out'}),
    onLeaveBack: batch => gsap.set(batch, { duration: 1.5, opacity: 0, x: -100, overwrite: true, ease:'expo.out'})
    // you can also define things like start, end, etc.
  });
  
  
  // when ScrollTrigger does a refresh(), it maps all the positioning data which 
  // factors in transforms, but in this example we're initially setting all the ".box"
  // elements to a "y" of 100 solely for the animation in which would throw off the normal 
  // positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
  // return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".ul-logo", {x: 0}));


/* Full Width Image Reveal */

let revealContainers = document.querySelectorAll(".full-width-img_reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});


/* BlockQuote */

var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitText(".titleGreathorned", {type:"words,chars"}), 
    chars = SplitGreat.chars;


tlSplitGreat.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
}, "+=0");



/* --- Split the text, Burrowing Owl --- */
function setupSplits() {
  
var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(".titleBurrowing", {type:"words,chars"}), 
    chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


tlSplitBurrowing.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".titleBurrowing",
//markers:true,
    start: "top 99%",
   end: "bottom 75%",
    scrub:1
  }
//,   onComplete: () => {SplitBurrowing.revert()}
}, "+=0");

// window.addEventListener('resize', function() {
  // SplitBurrowing.revert();
// });
  
};

// ScrollTrigger.addEventListener("refresh", setupSplits);
//ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
setupSplits();



/* Pinning */

ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 768px)": function() {
        ScrollTrigger.create({
        trigger: ".pin-content",
        start: "-80px top", 
        end: "bottom bottom",
        pin: ".pin-img-wrapper"
        // markers: true
        });
    }
});