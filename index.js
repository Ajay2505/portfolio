const body = document.getElementById("pageContent");
const navCheckBox = document.getElementById("navCheckBox");
const home = document.getElementById("home");

const carousel = document.getElementById("carousel");
const carouselTitle = document.getElementById("carouselTitle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const carouselItems = document.querySelectorAll("#carousel img");
let currIndex = 1;
let swiper;
const carouselTitles = [
  "TokoGadget",
  "Flash Chat",
  "Password Manager",
  "Portfolio",
  "ChatApp",
  "Password Manager",
];

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
  const elements = document.querySelectorAll(".scrollAnimation");

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

  for (let i = 0; i < elements.length; i++) {
    if (isElementVisible(elements[i], body)) {
      elements[i].classList.add("animateFromLeft");
    } else {
      elements[i].classList.remove("animateFromLeft");
    }
  }
});

const isElementVisible = (element, container) => {
  var rect = element.getBoundingClientRect();
  var containerRect = container.getBoundingClientRect();
  var topVisible = rect.top >= containerRect.top && rect.top <= containerRect.bottom * 0.9;
  var bottomVisible = rect.bottom <= containerRect.bottom && rect.bottom >= containerRect.top * 1.1;
  return topVisible || bottomVisible;
};

const rightCar = () => {
  if (currIndex - 1 < 0) return;
  leftArrow.classList.remove("hide");

  if (currIndex + 1 < carouselItems.length) {
    carouselItems[currIndex + 1].className = "";
    carouselItems[currIndex + 1].classList.add("hide");
  }

  carouselItems[currIndex].className = "";
  carouselItems[currIndex - 1].className = "";
  carouselItems[currIndex].classList.add("placeRight");
  carouselItems[currIndex - 1].classList.add("placeCenter");
  carouselTitle.innerText = carouselTitles[currIndex - 1];

  currIndex--;

  if (currIndex <= 0) {
    rightArrow.classList.add("hide");
  } else {
    carouselItems[currIndex - 1].className = "";
    carouselItems[currIndex - 1].classList.add("placeLeft");
  }
};

const leftCar = () => {
  if (currIndex + 1 >= carouselItems.length) return;
  rightArrow.classList.remove("hide");

  if (currIndex - 1 >= 0) {
    carouselItems[currIndex - 1].className = "";
    carouselItems[currIndex - 1].classList.add("hide");
  }

  carouselItems[currIndex].className = "";
  carouselItems[currIndex].classList.add("placeLeft");

  carouselTitle.innerText = carouselTitles[currIndex + 1];
  carouselItems[currIndex + 1].className = "";
  carouselItems[currIndex + 1].classList.add("placeCenter");

  currIndex++;

  if (currIndex + 1 >= carouselItems.length) {
    leftArrow.classList.add("hide");
  } else {
    carouselItems[currIndex + 1].className = "";
    carouselItems[currIndex + 1].classList.add("placeRight");
  }
};

carousel.addEventListener('touchstart', function(e) {
  var touchStartX = e.touches[0].clientX;
  carousel.addEventListener('touchmove', function(e) {
    var touchMoveX = e.touches[0].clientX;
    var swipeDistance = touchMoveX - touchStartX;
    clearTimeout(swiper);

    swiper = setTimeout(() => {
      swipeDistance > 0 ? rightCar() : leftCar();
    }, 10);
  });
});