import * as elements from './elements.js'
import state from './state.js'
import * as timer from './timer.js'

export function startTimer () {
  state.isRunning = true
  elements.controls.classList.add('isRunning')
  timer.countDown()
}

export function pauseTimer () {
  elements.controls.classList.remove('isRunning')
  timer.pauseTimer()
}

export function stopTimer () {
  elements.controls.classList.remove('isRunning')
  timer.stopStimer()
}


export function addFiveMinutes () {
  timer.addFiveMinutes()
}

export function removeFiveMinutes () {
  timer.removeFiveMinutes()
}