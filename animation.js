// gsap.to("header", {
//   height: "100vh",
//   delay: 3.5,
//   stagger: 2,
// });

gsap.to(".text .wel-text", {
  ease: "easeInOut",
  stagger: 1,
  display: "block",
});

gsap.to(".text .wel-text", {
  delay: 0.5,
  ease: "easeInOut",
  stagger: 1,
  display: "none",
  fontSize: "0px",
});

gsap.to(".loding", {
  delay: 3,
  top: "-200%",
  ease: "easeInOut",
  borderRadius: "0",
});

gsap.to(".space .space-2", {
  ease: "easeInOut",
  delay: 5.5,
  stagger: 3,
  left: "0%",
  top: "28%",
});

gsap.to(".space .space-3", {
  ease: "easeInOut",
  delay: 5.5,
  stagger: 3,
  right: "0",
});

var tl = gsap
  .timeline()

  .to(".green", { delay: 3.5, duration: 2, top: "0", ease: "bounce" });

const animation = gsap.to(".space .space-2", {
  ease: "easeInOut",
  delay: 5.5,
  stagger: 3,
  left: "0%",
  top: "12%",
});

// Function to play or reverse animation based on screen width
function handleMediaQuery() {
  if (window.innerWidth <= 1024) {
    animation.play();
  } else {
    animation.reverse();
  }
}

// Initial call to set the animation state based on the screen width
handleMediaQuery();
