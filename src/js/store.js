import {Map} from 'immutable'

// State
const IMAGES = ['beach.jpg', 'mars.jpg', 'wedding.jpg']
export const INITIAL_STATE = Map({image: IMAGES[0]})

// Action
export function nextPanorama() {
  return { type: 'NEXT_PANORAMA' }
}

// Reducer
export function clickHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_PANORAMA':
      let imageIndex = IMAGES.indexOf(state.get('image'))
      imageIndex++
      if (imageIndex >= IMAGES.length) { imageIndex = 0 }

      let nextImage = IMAGES[imageIndex]
      return state.set('image', nextImage)
  }
  return state
}
