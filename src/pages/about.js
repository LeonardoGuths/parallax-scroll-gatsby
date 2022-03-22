import React from "react"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import "../styles/about.css"

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <h1>About Page</h1>
      </div>
      <Loading />
    </Layout>
  )
}

export default About
