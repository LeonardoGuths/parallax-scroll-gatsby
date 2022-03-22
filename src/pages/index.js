import React from "react"
import Layout from "../components/Layout"
import Button from "../components/Button"
import "../styles/home.css"
import "../styles/button.css"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect } from "react"
import Loading from "../components/Loading"

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let value = window.scrollY
      document.getElementById("stars").style.left = value * 0.25 + "px"
      document.getElementById("moon").style.top = value * 0.75 + "px"
      document.getElementById("mountains_behind").style.top = value * 0.5 + "px"
      document.getElementById("text_moonlight").style.marginRight =
        value * 3 + "px"
      document.getElementById("text_moonlight").style.textShadow =
        (250 - value) * 0.35 +
        "px " +
        (500 - value) * 0.2 +
        "px " +
        "16px black"
      document.getElementById("text_moonlight").style.marginTop =
        value * 0.3 + "px"
      document.getElementById("middle_button").style.marginTop =
        value * 0.75 + "px"
      document.querySelector("header").style.marginTop = value * 0.75 + "px"
    })
  })

  return (
    <Layout>
      <section className="start-section">
        <StaticImage
          src="../assets/images/stars.png"
          alt="stars"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="stars"
        />
        <StaticImage
          src="../assets/images/moon.png"
          alt="the moon"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="moon"
        />
        <StaticImage
          src="../assets/images/mountains_behind.png"
          alt="behind mountains"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="mountains_behind"
        />
        <h2 className="middle-text" id="text-moonlight">
          Moonlight
        </h2>

        <Button
          href="#textdiv"
          className="middle-button"
          id="middle_button"
          text="Explore"
        />

        <StaticImage
          src="../assets/images/mountains_front.png"
          alt="front mountains"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="mountains_front"
        />
      </section>

      <div className="text-div" id="textdiv">
        <h1>Parallax Scroll Effect</h1>
        <Loading />
      </div>
    </Layout>
  )
}

export default Home
