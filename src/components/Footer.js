import React from "react"
import GatsbySVG from "../assets/gatsby.svg"
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-text">
        <p>
          {new Date().getFullYear()} &copy; All rights reserved. Built with{" "}
        </p>
        <a href="https://www.gatsbyjs.com/">
          Gatsby <GatsbySVG />
        </a>
      </div>
    </footer>
  )
}

export default Footer
