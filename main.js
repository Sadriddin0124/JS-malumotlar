"use strict"
let menu__link = document.getElementById('menu__link')


menu__link.addEventListener("click", () => {
    document.getElementById('menu').classList.toggle('navbar__menu1')
    document.getElementById('div3').classList.toggle('div3')
    document.getElementById('div1').classList.toggle('div1')
    document.getElementById('div2').classList.toggle('div2')
})


// let container = document.getElementById("container")
// let register__container = document.getElementById("register__container")
// // container.style.display = "none"
// register__container.style.display = "none"
// let register = document.getElementById("register")
// register.addEventListener("click",()=> {
//     let username = document.getElementById("username")
//     let password = document.getElementById("password")
//     console.log(username.value)
//     console.log(password.value)
//     if (username.value === "farkhodo_vich") {
//         container.style.display = "block"
//         register__container.style.display = "none"
//     }
//     save_login()
// })
// function save_login () {
//     localStorage.setItem("save", register())
// }
// function get_login () {
    //     localStorage.getItem("save")
    // }
    // get_login()
let lessons = document.getElementById('lessons')
let lessons2 = document.getElementById('lessons2')


let show__list = document.getElementById('show__list')
let show__list2 = document.getElementById('show__list2')

show__list.addEventListener("click", () => {
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


document.getElementById("dark-btn").addEventListener("click", ()=> {
    document.getElementById("header")
})




