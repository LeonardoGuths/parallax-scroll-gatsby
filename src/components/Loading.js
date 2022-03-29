import React from "react"
import "../styles/loading.css"
import VanillaTilt from "vanilla-tilt"
import { useEffect } from "react"

const Loading = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".text-card"), {
      max: 15,
      speed: 200,
    })
  })

  return (
    <div className="loading">
      <span className="loader one"></span>
      <span className="loader two"></span>
      <span className="loader three"></span>
      <p className="text-card">
        Under construction<span className="dot first">.</span>
        <span className="dot second">.</span>
        <span className="dot third">.</span>
      </p>
      <script type="text/javascript" src="vanilla-tilt.js"></script>
    </div>
  )
}

export default Loading
