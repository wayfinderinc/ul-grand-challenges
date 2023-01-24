gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

var d = document,
  gccNav = 'closed';

$('footer .collapsed .arrow').click(function(e) {
  gsap.to('footer .collapsed', { duration:.1, autoAlpha:0, ease:'expo.out'});
  gsap.fromTo('footer .expanded', { display:'flex', y:200, autoAlpha:0 }, { duration:.6, delay:.1, autoAlpha:1, y: 0, ease:'expo.out'});
  gccNav = 'open';
});

$('footer .expanded .arrow').click(function(e) {
  gsap.to('footer .expanded', { duration:.4, autoAlpha:0, y: -120, ease:'expo.out'});
  gsap.fromTo('footer .collapsed', { y:120 }, { duration:.6, y:0, autoAlpha:1, ease:'expo.out'});
  gccNav = 'closed';
});

// function getScrollPosition(animation, progress) {
//   let p = gsap.utils.clamp(0, 1, progress || 0),
//       st = animation.scrollTrigger,
//       containerAnimation = st.vars.containerAnimation;
//   if (containerAnimation) {  
//     let time = st.start + (st.end - st.start) * p;
//     st = containerAnimation.scrollTrigger;
//     return st.start + (st.end - st.start) * (time / containerAnimation.duration());
//   }
//   return st.start + (st.end - st.start) * p;
// }

// let sections = gsap.utils.toArray(".panel");

// let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//       trigger: ".container",
//       pin: true,
//       scrub: 0.1,
//       //snap: directionalSnap(1 / (sections.length - 1)),
//       end: "+=3000"
//     }
//   });

  // document.querySelector("#navIntroduction").addEventListener("click", () => {
  //   gsap.to(window, {scrollTo: getScrollPosition(collectiveFuture)});
  // });

// let links = gsap.utils.toArray("nav ul li a");
// links.forEach(a => {
//   let element = document.querySelector(a.getAttribute("href")),
//       linkST = ScrollTrigger.create({
//             trigger: element,
//             start: "top top"
//           });
//   ScrollTrigger.create({
//     trigger: element,
//     start: "top center",
//     end: "bottom center"
//     // onToggle: self => self.isActive && setActive(a)
//   });
//   a.addEventListener("click", e => {
//     e.preventDefault();
//     // gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
//     gsap.to(window, {duration: 1, scrollTo: getScrollPosition(linkST.start), overwrite: "auto"});
//   });
// });

// document.querySelector("#scrollTo").addEventListener("click", () => {
//   gsap.to(window, {scrollTo: getScrollPosition(redTween)});
// });

// function setActive(link) {
//   links.forEach(el => el.classList.remove("active"));
//   link.classList.add("active");
// }

// $('html').click(function() {
//   if ( gccNav === 'open' ) {
//     gsap.to('footer .expanded', { duration:.4, autoAlpha:0, y: -120, ease:'expo.out'});
//     gsap.fromTo('footer .collapsed', { y:120 }, { duration:.6, y:0, autoAlpha:1, ease:'expo.out'});
//     gccNav = 'closed';
//   }
// });