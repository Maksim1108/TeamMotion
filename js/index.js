const link = document.querySelector('.header__link')
const dropDown = document.querySelector('.header__dropdown')

link.addEventListener('mouseenter', () => {
    dropDown.classList.add('active')
})

dropDown.addEventListener('mouseleave', () => {
    dropDown.classList.remove('active')
})

const result = document.querySelector('.process__result')
const resultList = document.querySelector('.result__inner')

result.addEventListener('click', () => {
    resultList.classList.toggle('active')
    result.classList.toggle('active')
})