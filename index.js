const body = document.querySelector(".pageContent");
const navCheckBox = document.getElementById("navCheckBox");

body.addEventListener("click", (evt) => {
  if(evt.target.classList.contains("navCheckBoxLabel") || evt.target == navCheckBox || evt.target.classList.contains("themeIcon") || evt.target.classList.contains("fa-sort-down")) {
    return;
  }
  navCheckBox.checked = false;
})

body.addEventListener('scroll', function() {
   if(body.scrollTop >= 200) {
     document.querySelector('.topIcon').classList.add('showToTopIcon');
   } else {
     document.querySelector('.topIcon').classList.remove('showToTopIcon');
   }
 });
