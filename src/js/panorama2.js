require('aframe')
import React, { Component } from 'react'
import { Scene, Entity } from 'aframe-react'
import { Provider, connect } from 'react-redux'
import { clickHandler, nextPanorama } from 'store'
import { createStore } from 'redux'

class Panorama extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <Scene>
          <a-camera><a-cursor /></a-camera>

          <Entity
            geometry="primitive:sphere; radius:5000"
            scale="-1 1 1"
            material={{src: `url(/images/${this.props.image})`}}>
          </Entity>

          <Entity
            geometry="primitive:sphere; radius:1.75"
            material="color:#f33; roughness: 0.3"
            position="0, 5, -5"
            onClick={this.props.onNextClicked}>
          </Entity>
        </Scene>
      </Provider>
    );
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return { image: state.get('image') }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onNextClicked: () => dispatch(nextPanorama())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panorama)