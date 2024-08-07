const preloader = document.querySelector(".preloader")
window.addEventListener("load", ()=>{
    setTimeout(()=>{
        preloader.classList.add("remove")
    }, 1200)
   
})

const addEventOnElements = function(elements, eventType, callback){
    let lengthOfEle = elements.length
    for(let i=0; i<lengthOfEle; i++){
        elements[i].addEventListener(eventType, callback)
    }
}

const navbar = document.querySelector(".navbar")
const navTogglers = document.querySelectorAll(".data-nav-toggler")
const overlay = document.querySelectorAll(".overlay")
const toggleNav = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active")

}
addEventOnElements(navTogglers,"click",toggleNav)


const header = document.querySelector(".header")
 window.addEventListener("scroll", function(){
    header.classList[window.scrollY>100? "add" : "remove"]("active")
 })

