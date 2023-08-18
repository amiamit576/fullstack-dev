import React from 'react'
import './PlayButton.css'
import { useState } from 'react'

function PlayButton({ message, children, onPlay, onPause }) {
   
  const [playing, setPlaying] = useState(false);
   const handleClick = (e) => {
        e.stopPropagation()
        if (playing) onPause()
        else onPlay()
       setPlaying(! playing)
        
      //console.log(message) 
    }
  return (
      <button onClick={handleClick} > {children}:{playing?">":"||"}</button>
  )
}
// optionally we early does that

 // const handleClick = (e) => {
    //     e.stopPropagation()
    //     if (playing) onPause()
    //     else onPlay()
    //     playing = !playing;
        
    //   //console.log(message) 
    // }
export default PlayButton