import * as elements from './elements.js'
import state from './state.js'

export function updateStateTime (minutes, seconds) {
  let min = minutes ?? state.minutes
  let sec = seconds ?? state.seconds
  state.minutes = min
  state.seconds = sec
  updateDisplay()
}

export function updateDisplay () {
  elements.minutes.innerText = String(state.minutes).padStart(2, 0)
  elements.seconds.innerText = String(state.seconds).padStart(2,0 )
}

export function addFiveMinutes () {
  let minutes = state.minutes

  if (minutes >= 60) {
    return
  }

  minutes += 5

  updateStateTime(minutes, 0)
}

export function removeFiveMinutes () {
  let minutes = state.minutes

  if (minutes < 5) {
    return
  }

  minutes -= 5
  updateStateTime(minutes, 0)
}

export function pauseTimer() {
  state.isRunning = false
}

export function stopStimer () {
  state.isRunning = false
  updateStateTime(0, 0)
}

export function countDown () {
  clearTimeout(state.countDownID)

  if (state.isRunning == false) {
    return
  }
  
  state.seconds--

  if (state.seconds < 0) {
    state.seconds = 59
    state.minutes--
    updateDisplay()
  }

  if (state.minutes < 0) {
    resetTimer()
  }

  if (state.minutes == 0 && state.seconds == 0) {
    resetTimer()
    return
  }

  updateDisplay()

  state.countDownID = setTimeout(() => countDown(), 1000)
}

export function resetTimer () {
  elements.controls.classList.remove('isRunning')
  state.isRunning = false
  updateDisplay()
}