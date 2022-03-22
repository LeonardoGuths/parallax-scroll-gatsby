import React from "react"
import "../styles/button.css"
import styled from "styled-components"

const Button = props => {
  return (
    <StyledButton href={props.href} className={props.className} id={props.id}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </StyledButton>
  )
}

const StyledButton = styled.a`
  transform: translateY(0px);
  text-decoration: none;
  font-size: 2.5em;
  color: white;
  background: transparent;
  padding: 1rem 2rem;
  z-index: 9;
  letter-spacing: 1px;
  transition: background 0.5s, color 0.5s, box-shadow 0.5s, border-radius 0.5s;
  overflow: hidden;

  :hover {
    background: white;
    color: #370554;
    border-radius: 6px;
    box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, white);
    animation: btn-anim1 1s linear infinite;
    animation-delay: 0s;
  }

  @keyframes btn-anim1 {
    0% {
      left: 100%;
    }

    100% {
      left: -100%;
    }
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(white, transparent);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: 100%;
    }

    100% {
      top: -100%;
    }
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, white);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: 100%;
    }

    100% {
      right: -100%;
    }
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(transparent, white);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: 100%;
    }

    100% {
      bottom: -100%;
    }
  }
`
export default Button
