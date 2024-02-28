import * as timer from './timerActions.js'
import * as soundPad from './soundPadActions.js'
import * as elements from './elements.js'


export function registerControlsActions () {
  elements.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if (typeof timer[action] != 'function') {
      return
    }
    
    timer[action]()
  })
}

export function registerSoundPadActions () {
  elements.songPad.addEventListener('click', (event) => {
    let action = event.target.dataset.action

    if (typeof soundPad[action] != 'function') {
      return
    }

    soundPad[action](event)
  })
}