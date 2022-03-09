import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <Layout>
      <section>
        <StaticImage
          src="../assets/images/stars.png"
          alt="stars"
          placeholder="tracedSVG"
          layout="fullWidth"
          className="images"
        />
        <StaticImage
          src="../assets/images/moon.png"
          alt="the moon"
          placeholder="tracedSVG"
          layout="fullWidth"
          className="images"
          id="moon"
        />
        <StaticImage
          src="../assets/images/mountains_behind.png"
          alt="behind mountains"
          placeholder="tracedSVG"
          layout="fullWidth"
          className="images"
        />
        <StaticImage
          src="../assets/images/mountains_front.png"
          alt="front mountains"
          placeholder="tracedSVG"
          layout="fullWidth"
          className="images"
        />
      </section>
    </Layout>
  )
}

export default Home
