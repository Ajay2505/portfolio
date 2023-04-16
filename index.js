const body = document.getElementById("pageContent");
const navCheckBox = document.getElementById("navCheckBox");
const home = document.getElementById("home");
const carousel = document.getElementById("carousel");
const carouselTitle = document.getElementById("carouselTitle");
const leftArrow = document.getElementById("leftArrow");
const right = document.getElementById("right");

let isDragging = false;
let startX, scrollLeft,prevScrollLeft;
let isDragStart = false;
let currIndex = 1;

body.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("navCheckBoxLabel") ||
    evt.target == navCheckBox ||
    evt.target.classList.contains("themeIcon") ||
    evt.target.classList.contains("fa-sort-down") ||
    evt.target.classList.contains("barsIcon")
  ) {
    return;
  }
  
  navCheckBox.checked = false;
});

body.addEventListener("scroll", function () {
  const homeRect = document.querySelector("#home").getBoundingClientRect();
  const workRect = document.querySelector("#work").getBoundingClientRect();

  if (body.scrollTop > 200) {
    document.querySelector(".topIcon").classList.add("showToTopIcon");
  } else {
    document.querySelector(".topIcon").classList.remove("showToTopIcon");
  }
  
  if (homeRect.bottom > 229) {
    document.querySelector("#home div").classList.add("animateFromRight");
    document.querySelector("#home img").classList.add("animateFromLeft");
  } else {
    document.querySelector("#home div").classList.remove("animateFromRight");
    document.querySelector("#home img").classList.remove("animateFromLeft");
  }
  
  if (workRect.bottom > 229 || workRect.top > 400) {
    document.querySelector("#work div.work").classList.add("animateFromLeft");
  } else {
    document.querySelector("#work div.work").classList.remove("animateFromLeft");
  }
});

const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if(!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  // showHideIcons();
}
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if(!isDragging) return;
  isDragging = false;
  // autoSlide();
}

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);
// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);

const carouselItems = [
  {
    src: "./assets/images/tokogadget-1.jpeg",
    Title: "TokoGadget"
  },
  {
    src: "./assets/images/flashChat-1.jpeg",
    Title: "Flash Chat"
  },
  {
    src: "./assets/images/password-1.jpeg",
    Title: "Password Manager"
  },
  {
    src: "./assets/images/tokogadget-1.jpeg",
    Title: "TokoGadget"
  },
  {
    src: "./assets/images/flashChat-1.jpeg",
    Title: "Flash Chat"
  },
  {
    src: "./assets/images/password-1.jpeg",
    Title: "Password Manager"
  },
];

// const setCaraousel = (index) => {
//     if(index >= carouselItems.length || index < 0) return;
    
//     carousel.innerHTML += `
//       <img class="placeLeft" src=${carouselItems[index-1].src} alt=${carouselItems[index-1].Title}/>
//       <img class="placeCenter" src=${carouselItems[index].src} alt=${carouselItems[index].Title}/>
//       <img class="placeRight" src=${carouselItems[index+1].src} alt="${carouselItems[index+1].Title}"/>
//     `;
// }

const leftCar = () => {
  if(currIndex + 2 >= carouselItems.length) {
    leftArrow.classList.add("hide");
  }
  if (currIndex + 1 >= carouselItems.length) return;

  currIndex++;
  carouselTitle.innerText = carouselItems[currIndex].Title;
  
  carousel.getElementsByTagName("img")[0].classList.add("removeLeft");
  carousel.getElementsByTagName("img")[1].className = "";
  carousel.getElementsByTagName("img")[1].classList.add("moveLeft");
  carousel.getElementsByTagName("img")[2].className = "";
  carousel.getElementsByTagName("img")[2].classList.add("moveCenter");

  carousel.getElementsByTagName("img")[0].remove();

  if (currIndex + 1 < carouselItems.length) {
    setTimeout(() => {
      carousel.innerHTML += `<img class="placeRight" src="${
        carouselItems[currIndex + 1].src
      }" alt="${carouselItems[currIndex + 1].Title}">`;
    }, 600);
  }
  
}

// setCaraousel(1);