"use strict"
 
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
document.getElementById("show__list21").addEventListener("click", () => {
    document.getElementById("lessons21").classList.toggle('show_lesson')
})
document.getElementById("show__list22").addEventListener("click", () => {
    document.getElementById("lessons22").classList.toggle('show_lesson')
})
document.getElementById("show__list23").addEventListener("click", () => {
    document.getElementById("lessons23").classList.toggle('show_lesson')
})
document.getElementById("show__list24").addEventListener("click", () => {
    document.getElementById("lessons24").classList.toggle('show_lesson')
})
document.getElementById("show__list25").addEventListener("click", () => {
    document.getElementById("lessons25").classList.toggle('show_lesson')
})
document.getElementById("show__list26").addEventListener("click", () => {
    document.getElementById("lessons26").classList.toggle('show_lesson')
})
document.getElementById("show__list27").addEventListener("click", () => {
    document.getElementById("lessons27").classList.toggle('show_lesson')
})
document.getElementById("show__list28").addEventListener("click", () => {
    document.getElementById("lessons28").classList.toggle('show_lesson')
})


function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true'
    localStorage.setItem('darkmode', !wasDarkmode)
    const element = document.body
    element.classList.toggle('dark-mode')
    element.classList.toggle('shadow')
 }

function onload () {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true')
}

 

