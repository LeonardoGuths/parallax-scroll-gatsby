import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      {new Date().getFullYear()} &copy; All rights reserved. Built with{" "}
      <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </footer>
  )
}

export default Footer
