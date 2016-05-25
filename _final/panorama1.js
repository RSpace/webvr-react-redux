require('aframe')
import React, { Component } from 'react'
import { Scene } from 'aframe-react'

export default class Panorama extends Component {
  render () {
    return (
      <Scene>
        <a-camera><a-cursor /></a-camera>
        <a-sky src="/images/beach.jpg"></a-sky>
      </Scene>
    );
  }
}