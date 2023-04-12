const body = document.querySelector(".pageContent");

body.addEventListener('scroll', function() {
   if(body.scrollTop >= 200) {
     document.querySelector('.topIcon').classList.add('showToTopIcon');
   } else {
     document.querySelector('.topIcon').classList.remove('showToTopIcon');
   }
 });

 
 