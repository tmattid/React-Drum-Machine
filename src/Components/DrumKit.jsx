import React from 'react'

import '../Design/style.css'
import clap from '../assets/sounds/clap.mp3'
import hihat from '../assets/sounds/hihat.mp3'
import kick from '../assets/sounds/kick.mp3'
import openhat from '../assets/sounds/openhat.mp3'
import boom from '../assets/sounds/boom.mp3'
import ride from '../assets/sounds/ride.mp3'
import snare from '../assets/sounds/snare.mp3'
import tom from '../assets/sounds/tom.mp3'
import tink from '../assets/sounds/tink.mp3'

const DrumKit = () => {
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
  }

  const keys = Array.from(document.querySelectorAll('.key'))
  keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound)

  return (
    <React.Fragment>
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>

      <audio data-key="65" src={clap}></audio>
      <audio data-key="83" src={hihat}></audio>
      <audio data-key="68" src={kick}></audio>
      <audio data-key="70" src={openhat}></audio>
      <audio data-key="71" src={boom}></audio>
      <audio data-key="72" src={ride}></audio>
      <audio data-key="74" src={snare}></audio>
      <audio data-key="75" src={tom}></audio>
      <audio data-key="76" src={tink}></audio>
    </React.Fragment>
  )
}

export default DrumKit
