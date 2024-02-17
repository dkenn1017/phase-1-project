document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
   e.preventDefault()
   handleToDo(e.target.Weight.value)
 })
})

function handleToDo(weight) {
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener('click', handleDelete)
  btn.textContent ="x"
  p.textContent = weight
  p.appendChild(btn)
  document.querySelector("#weight_container").appendChild(p)
 }

 function handleDelete(e){
  e.target.parentNode.remove()
 }

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