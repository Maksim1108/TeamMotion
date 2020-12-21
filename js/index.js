// =============== DROP DOWN ================

const link = document.querySelector('.header__link')
const dropDown = document.querySelector('.header__dropdown')

link.addEventListener('mouseenter', () => {
    dropDown.classList.add('active')
})

dropDown.addEventListener('mouseleave', () => {
    dropDown.classList.remove('active')
})

// ===============================================

// =============== SERVICES ================

const result = document.querySelector('.process__result')
const resultList = document.querySelector('.result__inner')

result.addEventListener('click', () => {
    resultList.classList.toggle('active')
    result.classList.toggle('active')
})

let circle1 = document.getElementById('circle-1')
let circle2 = document.getElementById('circle-2')
let circle3 = document.getElementById('circle-3')
let circle4 = document.getElementById('circle-4')
let circle5 = document.getElementById('circle-5')

let infoBlock1 = document.getElementById('infoBlock-1')
let infoBlock2 = document.getElementById('infoBlock-2')
let infoBlock3 = document.getElementById('infoBlock-3')
let infoBlock4 = document.getElementById('infoBlock-4')
let infoBlock5 = document.getElementById('infoBlock-5')

let circles = [circle1, circle2, circle3, circle4, circle5]
let infoBlocks = [infoBlock1, infoBlock2, infoBlock3, infoBlock4, infoBlock5]

circles.forEach((items, i) => items.addEventListener('click', () => {
    circles[i].classList.toggle('active')
    infoBlocks[i].classList.toggle('active')
}))

// ===============================================

// =============== SEARCH ================

const searchInput = document.querySelector('.header__search')
const searchIcon = document.querySelector('.header__icon')

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active')
})