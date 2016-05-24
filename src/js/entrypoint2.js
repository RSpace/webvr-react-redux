import React from 'react'
import { render } from 'react-dom'
import Panorama from 'panorama2'
import { clickHandler } from 'store'
import { createStore } from 'redux'

let store = createStore(clickHandler)

render(
  <Panorama store={store} />,
  document.getElementById('root')
)
