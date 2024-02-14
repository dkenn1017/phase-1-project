document.addEventListener("DOMContentLoaded", () => console.log("We are connected!"))

const all_img = document.querySelectorAll("img")
all_img.forEach(function(img){
  img.addEventListener("mouseover", function(){
    console.log("hovered over")
  })
})

const all_btn = document.querySelectorAll("button");
all_btn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log("button clicked")
   });
});

window.addEventListener('scroll',(event) => {
  console.log('Scrolling');
})