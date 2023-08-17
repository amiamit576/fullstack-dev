import React from 'react'
import './PlayButton.css'

function PlayButton({ message, children, onPlay, onPause }) {
    let playing=false// donot use thi apporch
    const handleClick = (e) => {
        e.stopPropagation()
        if (playing) onPause()
        else onPlay()
        playing = !playing;
        
      //console.log(message) 
    }
  return (
      <button onClick={handleClick} > {children}:{playing?">":"||"}</button>
  )
}

export default PlayButton