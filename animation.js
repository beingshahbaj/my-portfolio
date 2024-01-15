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
  delay: 4.5,
  stagger: 3,
 top:"28%"
});





var tl = gsap
  .timeline()

  .to(".green", { delay:3.5, duration: 2, top:"0", ease: "bounce" });






gsap.registerPlugin(SplitText);

var tl = gsap.timeline(),
  mySplitText = new SplitText("#quote", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", { perspective: 400 });

console.log(chars);

tl.from(chars, {
    delay:4,
  duration: 0.8,
  opacity: 0,
  scale: 0,
  y: 80,
  rotationX: 180,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.01,
});

document.getElementById("animate").onclick = function () {
  tl.restart();
};


