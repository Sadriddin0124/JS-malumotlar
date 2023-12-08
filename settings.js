let burger = document.getElementById("burger")
let left__bar = document.getElementById("left__bar")
let back__left = document.getElementById("back__left")

function left () {
    left__bar.classList.toggle("right")
    burger.classList.toggle('left')
}

function remove () {
    left__bar.classList.remove("right")
}

