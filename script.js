let step = 0
let currentScore = 0

const anthem = document.getElementById('anthem')
const cikita = document.getElementById('cikita')
const dombra = document.getElementById('dombra')
const semmamme = document.getElementById('semmamme')

const kurd = document.querySelector('.kurd')
const notKurd = document.querySelector('.not-kurd')
const start = document.getElementById('start')
const modal = document.querySelector('.modal')
const score = document.getElementById('score')
const finalScore = document.querySelector('.final-score')
const message = document.querySelector('.message')

start.addEventListener('click', startGame)

function finishBad(timerId, scoreTimerId, e) {
  clearInterval(timerId)
  clearInterval(scoreTimerId)
  modal.classList.add('active')
  finalScore.textContent = currentScore
  message.textContent = 'Banlandin! \n '
}

function finishGood(timerId, scoreTimerId, e) {
  clearInterval(timerId)
  clearInterval(scoreTimerId)
  modal.classList.add('active')
  finalScore.textContent = currentScore
  message.textContent = 'Bravo! \n '
}

function startGame(e) {
  e.preventDefault()

  const scoreTimer = setInterval(() => {
    score.innerText = currentScore
    currentScore++
    if (currentScore === 69) {
      clearInterval(scoreTimer)
    }
  }, 1000)

  kurd.classList.add('active')
  notKurd.classList.add('active')
  anthem.play()
  progress(0)
  countDown(1)
  const progressTimer = setInterval(function () {
    if (step > 4) {
      clearInterval(progressTimer)
    }
    step++
    countDown(step + 1)
    progress(step)
  }, 5000)

  kurd.addEventListener('click', (e) => {
    finishBad(progressTimer, scoreTimer, e)
  })
  notKurd.addEventListener('click', (e) => {
    finishGood(progressTimer, scoreTimer, e)
  })
  e.target.remove()
}

function progress(step) {
  level.innerText = String(step)
  switch (step) {
    case 0:
      renderLevel0()
      break

    case 1:
      renderLevel1()
      break

    case 2:
      renderLevel2()
      break

    case 3:
      renderLevel3()
      break

    case 4:
      renderLevel4()
      break

    case 5:
      renderLevel5()
      break

    case 6:
      renderLevel6()
      break

    default:
      break
  }
  step++
}

function renderLevel0() {
  anthem.play()
}

function renderLevel1() {
  const catSection = document.querySelector('.cat-section')
  catSection.classList.add('active')
}

function renderLevel2() {
  cikita.play()
}

function renderLevel3() {
  const portukalSection = document.querySelector('.portukal-section')
  portukalSection.classList.add('active')
}

function renderLevel4() {
  const opinions = document.querySelectorAll('.opinion')
  opinions.forEach((opinion, i) => {
    setTimeout(() => {
      opinion.classList.add('active')
    }, i * 1000)
  })
}

function renderLevel5() {
  dombra.play()
}

function renderLevel6() {
  window.onmousemove = function (e) {
    kurd.classList.add('move')
    kurd.style.left = e.pageX - 50 + 'px'
    kurd.style.top = e.pageY - 50 + 'px'
  }
}

function countDown(id) {
  let timeleft = 5
  const downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer)
    }
    if (id !== 7) {
      document.getElementById(`loading-${id}`).textContent = ' ' + timeleft
    }
    timeleft -= 1
  }, 1000)
}
