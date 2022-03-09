import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Logo
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/work" activeClassName="active-link">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active-link">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
