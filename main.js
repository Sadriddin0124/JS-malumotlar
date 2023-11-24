let menu__link1 = document.getElementById('menu__link')
let menu = document.getElementById('menu')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
const Click = () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
        div1.classList.add('div1')
        div2.classList.add('div2')
        div3.classList.add('div3')
        menu__link1.classList.add('animation')
    } else {
        menu.style.display = 'none'
        div1.classList.remove('div1')
        div2.classList.remove('div2')
        div3.classList.remove('div3')
        menu__link1.classList.add('animation')
    }

}


let lessons = document.getElementById('lessons')
let video = document.getElementById('video')

function show_video() {
    if (video.style.display === 'none') {
        video.style.display = 'block'

    } else {
        video.style.display = 'none'
    }
}

let video2 = document.getElementById('video2')
let lessons2 = document.getElementById('lessons2')
function show_video2() {
    if (video2.style.display === 'none') {
        video2.style.display = 'block'
    } else {
        video2.style.display = 'none'
    }
}

let show__list = document.getElementById('show__list')

show__list.addEventListener("click", () => {
    if (lessons.style.display === 'none') {
        lessons.style.display = 'block'
    } else {
        lessons.style.display = 'none'

    } 
    if (lessons2.style.display === 'none') {
        lessons2.style.display = 'block'
    } else {
        lessons2.style.display = 'none'

    } 
    
})


let lessons3 = document.getElementById('lessons3')
let video3 = document.getElementById('video3')

function show_video3() {
    if (video3.style.display === 'none') {
        video3.style.display = 'block'

    } else {
        video3.style.display = 'none'
    }
}

let video4 = document.getElementById('video4')
let lessons4 = document.getElementById('lessons4')
function show_video4() {
    if (video4.style.display === 'none') {
        video4.style.display = 'block'
    } else {
        video4.style.display = 'none'
    }
}

let show__list2 = document.getElementById('show__list2')

show__list2.addEventListener("click", () => {
    if (lessons3.style.display === 'none') {
        lessons3.style.display = 'block'
    } else {
        lessons3.style.display = 'none'

    } 
    if (lessons4.style.display === 'none') {
        lessons4.style.display = 'block'
    } else {
        lessons4.style.display = 'none'

    } 
    
})


