const body = document.getElementById("pageContent");
const navCheckBox = document.getElementById("navCheckBox");
const home = document.getElementById("home");
const carousel = document.getElementById("carousel");
const carouselTitle = document.getElementById("carouselTitle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const carouselItems = document.querySelectorAll("#carousel img");
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
  
  if (workRect.bottom > 120 || workRect.top > 240) {
    document.querySelector("#work div.work").classList.add("animateFromLeft");
  } else {
    document.querySelector("#work div.work").classList.remove("animateFromLeft");
  }
});

const carouselTitles = [
  "TokoGadget",
  "Flash Chat",
  "Password Manager",
  "Portfolio",
  "Flash Chat",
  "Password Manager",
];

const leftCar = () => {
  if (currIndex + 1 >= carouselItems.length) return;

  currIndex++;
  carouselTitle.innerText = carouselTitles[currIndex];
  rightArrow.classList.remove("hide");
  
  if(currIndex-2 >= 0) {
    carouselItems[currIndex-2].className = "";
    carouselItems[currIndex-2].classList.add("hide");
  }
  carouselItems[currIndex].className = "";
  carouselItems[currIndex].classList.add("moveCenter");
  carouselItems[currIndex-1].className = "";
  carouselItems[currIndex-1].classList.add("moveLeft");

  if(currIndex + 1 >= carouselItems.length) {
    leftArrow.classList.add("hide");
  } else {
    carouselItems[currIndex+1].className = "";
    carouselItems[currIndex+1].classList.add("placeRight");
  }

}

const rightCar = () => {
  if (currIndex - 1 < 0) return;

  currIndex--;
  carouselTitle.innerText = carouselTitles[currIndex];
  leftArrow.classList.remove("hide");
  
  if(currIndex+2 < carouselItems.length) {
    carouselItems[currIndex+2].className = "";
    carouselItems[currIndex+2].classList.add("hide");
  }
  carouselItems[currIndex+1].className = "";
  carouselItems[currIndex+1].classList.add("placeRight");
  carouselItems[currIndex].className = "";
  carouselItems[currIndex].classList.add("moveCenterFromLeft");

  if(currIndex - 1 < 0) {
    rightArrow.classList.add("hide");
  } else {
    carouselItems[currIndex-1].className = "";
    carouselItems[currIndex-1].classList.add("placeLeft");
  }
}