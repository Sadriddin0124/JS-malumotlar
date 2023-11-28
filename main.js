"use strict"
let menu__link = document.getElementById('menu__link')
let menu = document.getElementById('menu')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
 

menu__link.addEventListener("click", () => {
    menu.classList.toggle('navbar__menu1')
    div1.classList.toggle('div1')
    div2.classList.toggle('div2')
    div3.classList.toggle('div3')

})


const dark = ()=> {
    document.getElementById("light-btn").classList.add("color")
    document.getElementById("dark-btn").classList.add("color")
    document.getElementById("header4").style.background = "rgb(22, 20, 20)"
    document.getElementById("header4").classList.add("bg-dark")
    document.getElementById("navbar4").classList.add("bg-dark")
    document.getElementById("nav-item1").classList.add("color")
    document.getElementById("nav-item2").classList.add("color")
    document.getElementById("nav-item3").classList.add("color")
    document.getElementById("nav-item4").classList.add("color")
    document.getElementById("nav-item5").classList.add("color")
    document.getElementById("nav-item6").classList.add("color")
    document.getElementById("nav-item7").classList.add("color")
    document.getElementById("nav-item8").classList.add("color")
    document.getElementById("header").style.background = "rgb(22, 20, 20)"
    document.getElementById("header").classList.add("bg-dark")
    document.getElementById("navbar").style.background = "black"
}

function light () {
    document.getElementById("light-btn").classList.remove("color")
    document.getElementById("dark-btn").classList.remove("color")
    document.getElementById("header4").style.background = "#fff"
    document.getElementById("header4").classList.remove("bg-dark")
    document.getElementById("navbar4").classList.remove("bg-dark")
    document.getElementById("nav-item1").classList.remove("color")
    document.getElementById("nav-item2").classList.remove("color")
    document.getElementById("nav-item3").classList.remove("color")
    document.getElementById("nav-item4").classList.remove("color")
    document.getElementById("nav-item5").classList.remove("color")
    document.getElementById("nav-item6").classList.remove("color")
    document.getElementById("nav-item7").classList.remove("color")
    document.getElementById("nav-item8").classList.remove("color")
    document.getElementById("header").style.background = "#fff"
    document.getElementById("header").classList.remove("bg-dark")
    document.getElementById("navbar").classList.remove("bg-dark")
    document.getElementById("nav-item1").classList.remove("color")
    document.getElementById("nav-item2").classList.remove("color")
    document.getElementById("nav-item3").classList.remove("color")
    document.getElementById("nav-item4").classList.remove("color")
}
localStorage.setItem("dark", dark() )
localStorage.setItem("light", light() )


let lessons = document.getElementById('lessons')
let lessons2 = document.getElementById('lessons2')
 

let show__list2 = document.getElementById('show__list2')

document.getElementById('show__list').addEventListener("click", () => {
    lessons.classList.toggle('show_lesson')
})
show__list2.addEventListener("click", () => {
    lessons2.classList.toggle('show_lesson')
})
document.getElementById("show__list3").addEventListener("click", () => {
    document.getElementById("lessons3").classList.toggle('show_lesson')
})
document.getElementById("show__list4").addEventListener("click", () => {
    document.getElementById("lessons4").classList.toggle('show_lesson')
})
document.getElementById("show__list5").addEventListener("click", () => {
    document.getElementById("lessons5").classList.toggle('show_lesson')
})
document.getElementById("show__list6").addEventListener("click", () => {
    document.getElementById("lessons6").classList.toggle('show_lesson')
})
document.getElementById("show__list7").addEventListener("click", () => {
    document.getElementById("lessons7").classList.toggle('show_lesson')
})
document.getElementById("show__list8").addEventListener("click", () => {
    document.getElementById("lessons8").classList.toggle('show_lesson')
})
document.getElementById("show__list9").addEventListener("click", () => {
    document.getElementById("lessons9").classList.toggle('show_lesson')
})
document.getElementById("show__list10").addEventListener("click", () => {
    document.getElementById("lessons10").classList.toggle('show_lesson')
})
document.getElementById("show__list11").addEventListener("click", () => {
    document.getElementById("lessons11").classList.toggle('show_lesson')
})
document.getElementById("show__list12").addEventListener("click", () => {
    document.getElementById("lessons12").classList.toggle('show_lesson')
})
document.getElementById("show__list13").addEventListener("click", () => {
    document.getElementById("lessons13").classList.toggle('show_lesson')
})
document.getElementById("show__list14").addEventListener("click", () => {
    document.getElementById("lessons14").classList.toggle('show_lesson')
})
document.getElementById("show__list15").addEventListener("click", () => {
    document.getElementById("lessons15").classList.toggle('show_lesson')
})
document.getElementById("show__list16").addEventListener("click", () => {
    document.getElementById("lessons16").classList.toggle('show_lesson')
})
document.getElementById("show__list17").addEventListener("click", () => {
    document.getElementById("lessons17").classList.toggle('show_lesson')
})
document.getElementById("show__list18").addEventListener("click", () => {
    document.getElementById("lessons18").classList.toggle('show_lesson')
})
document.getElementById("show__list19").addEventListener("click", () => {
    document.getElementById("lessons19").classList.toggle('show_lesson')
})
document.getElementById("show__list20").addEventListener("click", () => {
    document.getElementById("lessons20").classList.toggle('show_lesson')
})


 





