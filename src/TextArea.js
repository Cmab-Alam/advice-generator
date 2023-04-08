import React from "react";

import mobilePattern from './images/pattern-divider-mobile.svg'
import desktopPattern from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
import { useState } from "react";

export default function TextArea() {
     // function adviceGen(){
  //   fetch('https://api.adviceslip.com/advice')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     setText(data.slip)
  //   })
  // }
  const [text, setText] = useState({})
  const adviceGen= async()=>{
   
    const result = await fetch('https://api.adviceslip.com/advice')
    const data = await result.json()
    setText(data.slip)
  }
  return (
   <> <div>
    <h2>{text.id}</h2>
    <p>{text.advice}</p>
    <picture>
    <source media="(min-width: 768px)" srcSet={desktopPattern} />
      <img src={mobilePattern} alt="" />
    </picture>
  </div>
  <div>
  <picture>
    <button onClick={adviceGen}>
    <img src={dice} alt=""  />
    </button>
    </picture>
  </div>
  </>
  )
}

