const body = document.querySelector('body')
const navPanel = document.querySelector('.navigation_panel')
const navList = document.querySelector('.nav_list')
const arrBtn = document.querySelectorAll('.li_nav')
const [bt1, bt2, bt3] = arrBtn
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')
const section3 = document.querySelector('.section3')

const input = document.querySelector('.input')
const btnAdd = document.querySelector('.btn_add')
const btnDel = document.querySelector('.btn_delete_last')
const form = document.querySelector('.form')
const list = document.querySelector('.wrapper_lists_of_array')

const incomingWord = document.querySelector('.inc_word')
const translationWord = document.querySelector('.trln_word')
const btnNext = document.querySelector('.btn_next')
const btnTranslate = document.querySelector('.btn_trln')

const btnClose = document.querySelector('.close')

function navigation(event) {
  if (event.target.innerHTML === 'Add words') {
    arrBtn.forEach((el) => el.classList.remove('active'))
    event.target.classList.add('active')
    section2.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  } else if (event.target.innerHTML === 'Home') {
    arrBtn.forEach((el) => el.classList.remove('active'))
    event.target.classList.add('active')
    section1.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  } else if (event.target.innerHTML === 'Rules') {
    arrBtn.forEach((el) => el.classList.remove('active'))
    event.target.classList.add('active')
    section3.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }
}

navPanel.addEventListener('click', navigation)
navPanel.addEventListener('touchstart', navigation)

const words = []
const wordsOfBoth = []
let res = null

function getToArray() {
  words.push(input.value)
  wordsOfBoth.push(input.value.split('-'))
  input.value = ''
  list.innerHTML += `${words.at(-1)}<br/>`
  console.log(wordsOfBoth)
}

function delLastOfArray() {
  words.pop()
  wordsOfBoth.pop()
  list.innerHTML = `${words.join('<br/>')}`
}

btnAdd.addEventListener('click', getToArray)
btnDel.addEventListener('click', delLastOfArray)
btnAdd.addEventListener('touchstart', getToArray)
btnDel.addEventListener('touchstart', delLastOfArray)

form.addEventListener('change', getToArray)

function showRandomWord() {
  getRandomNumb()
  if (words.length === 0) {
    incomingWord.innerHTML = `list is empty!`
  } else {
    incomingWord.innerHTML = `${wordsOfBoth[res - 1][0]}`
  }
}
function showTranslateWord() {
  if (words.length === 0) {
    translationWord.innerHTML = `Translation word`
  } else {
    translationWord.innerHTML = `${wordsOfBoth[res - 1][1]}`
  }
}

btnNext.addEventListener('click', showRandomWord)
btnTranslate.addEventListener('click', showTranslateWord)
btnNext.addEventListener('touchstart', showRandomWord)
btnTranslate.addEventListener('touchstart', showTranslateWord)

function getRandomNumb() {
  res = Math.floor(Math.random() * words.length + 1)
}

document.addEventListener('touchstart', function (event) {
  if (event.target.className === 'close_box') {
    navList.classList.toggle('navListActiv')
    navPanel.classList.toggle('navActive')
  }
})
