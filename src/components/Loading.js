import React from "react"
import "../styles/loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <span className="loader one"></span>
      <span className="loader two"></span>
      <span className="loader three"></span>
      <p>
        Under construction<span className="dot first">.</span>
        <span className="dot second">.</span>
        <span className="dot third">.</span>
      </p>
    </div>
  )
}

export default Loading
