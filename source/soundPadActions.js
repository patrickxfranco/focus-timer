import * as audio from './songs.js'

export function toggleSongForest (event) {
  let isPlaying = event.target.classList.contains('isPlaying')
  
  if (isPlaying) {
    event.target.classList.remove('isPlaying')
    audio.forest.pause()
    return
  }

  event.target.classList.add('isPlaying')
  audio.forest.play()
}

export function toggleSongRain (event) {
  let isPlaying = event.target.classList.contains('isPlaying')

  if (isPlaying) {
    event.target.classList.remove('isPlaying')
    audio.rain.pause()
    return
  }

  event.target.classList.add('isPlaying')
  audio.rain.play()
}

export function toggleSongShopping (event) {
  let isPlaying = event.target.classList.contains('isPlaying')

  if (isPlaying) {
    event.target.classList.remove('isPlaying')
    audio.shopping.pause()
    return
  }

  event.target.classList.add('isPlaying')
  audio.shopping.play()
}

export function toggleSongCampfire (event) {
  let isPlaying = event.target.classList.contains('isPlaying')

  if (isPlaying) {
    event.target.classList.remove('isPlaying')
    audio.campfire.pause()
    return
  }

  event.target.classList.add('isPlaying')
  audio.campfire.play()
}