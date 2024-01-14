const scrollHeight = document.getElementsByClassName("scroll_height");
const name = document.querySelectorAll(".name");

let magnate = document.querySelectorAll(".magnate");
const scrollElements = document.getElementsByClassName("scroll-container");

const aboutScrollElement = document.getElementsByClassName("scroll-about-container")





magnate.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let boxWidth = box.clientWidth;
    let boxHeight = box.clientHeight;

    let moveX = x - boxWidth / 2;
    let moveY = y - boxHeight / 2;

    box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
  });
});

magnate.forEach((box) => {
  box.addEventListener("mouseout", (e) => {
    box.style.transform = "";
  });
});

window.addEventListener("wheel", (e) => {

  name.forEach((index) => {
    if (e.deltaY < 0) {
      index.classList.add("leftscroll")
   index.classList.remove("rightscroll")

    } else if (e.deltaY > 0) {
      index.classList.remove("leftscroll")
      index.classList.add("rightscroll")
    }
  })

});

const box = document.querySelector(".box");
const dark = document.querySelector(".menudark");

box.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  const cross = document.getElementById("cross");
  const sidebar = document.querySelector(".sidebar");

  cross.classList.toggle("remove");
  menu.classList.toggle("remove");

  const body = document.body;
  body.classList.toggle("body");
 

  sidebar.classList.toggle("right");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    // box.classList.remove("remove");
    box.style.height = "80px";
    box.style.width = "80px";


    box.style.overflow = "visible";
  } else if (window.pageXOffset < 150) {
    // box.classList.add("remove");
    box.style.height = "0px";
    box.style.width = "0px";
    box.style.overflow = "hidden";
  }


});









// Select the element that you want to smooth scroll

// Add an event listener to the window object to capture scroll events
window.addEventListener("scroll", smoothScroll);

// Function to smooth scroll the selected element
function smoothScroll() {
  // Calculate the current scroll position
  const scrollPosition = window.pageYOffset;

  const desiredScrollPosition =
    scrollPosition - (window.pageYOffset / 3 + scrollPosition);
  // Scroll the element to the desired position smoothly
  Array.from(scrollElements).forEach((element) => {
    // Calculate the desired scroll position based on the user's scroll gesture

    // Scroll the element to the desired position smoothly
    element.style.transform = `translateY(${desiredScrollPosition}px)`;
    element.style.transition = "transform 0.5s ease-out";
  });

  let desiredHeight = 100 - scrollPosition / 20; 
  Array.from(scrollHeight).forEach((index) => {
    
    // Ensure the height does not go below a certain value, for example, 50
    const newHeight = Math.max(desiredHeight, 80);

    // Set the height of the header based on the desiredHeight
    index.style.height = `${newHeight}vh`;
    index.style.transition = "height 0.5s ease-out";
  });


  Array.from(aboutScrollElement).forEach((element) => {

    if (scrollPosition > 491 && scrollPosition < 800) {
      element.style.transform = `translateY(${desiredScrollPosition/4}px)`;
    element.style.transition = "transform 0.5s ease-out";
    }
   })


}
