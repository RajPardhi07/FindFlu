


const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


gsap.to("#rrr",{
    top:"65%",
    duration:1.5,
    repeat:-1,
    yoyo:true
 })

 gsap.to("#aaa",{
    top:"-17%",
    duration:1.2,
    repeat:-1,
    yoyo:true
 })

 
 
var Ei = gsap.timeline();


Ei.from(".center-page4 h4",{
   y:-100,
   opacity:0,
   duration:0.8,
   
   scrollTrigger:{
     trigger:".center-page4 h4",
     scroller:"#main",
     start:"top 70%",
     end:"top 69%",
     scrub:3,
     

   }
 })


 .from(".center-page4 h1",{
   y:-100,
   opacity:0,
   duration:0.8,
   stagger:3,
   scrollTrigger:{
     trigger:".center-page4 h1",
     scroller:"#main",
     start:"top 70%",
     end:"top 69%",
     scrub:3,
     

   }
 })

 .from(".box-page4",{
   x:100,
   opacity:0,
   duration:0.8,

   scrollTrigger:{
     trigger:".box-page4",
     scroller:"#main",
     start:"top 70%",
     end:"top 69%",
     scrub:3,
     

   }
 })




document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
          const content = this.nextElementSibling;

          // Toggle active class for the content
          content.classList.toggle('active');

          // Optionally, close other open accordions
          accordionHeaders.forEach(otherHeader => {
              if (otherHeader !== header) {
                  otherHeader.nextElementSibling.classList.remove('active');
              }
          });
      });
  });
});




function menu() {
  var flag = 0

  document.querySelector(".menu i")
  .addEventListener("click", function(){
    if(flag == 0) {


      document.querySelector("#loader").style.top = "0%"
      flag = 1

    }
    else{


      document.querySelector("#loader").style.top = "-100%"
      flag = 0

    }
  })
}
menu()


function close() {

  document.querySelector(".close i")
  .addEventListener("click", function(){
      document.querySelector("#loader").style.top="-100%"
      document.querySelector("#loader").style.transition = "all 1s";

  })
}

close()


  
