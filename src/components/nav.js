/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styles from "./nav.css"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <div>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <a href="#" className="brand">
            BrokenLamp
          </a>
          <nav className="nav">
            <ul className="nav__wrapper">
              <li className="nav__item cli">
                <a href="#">About</a>
              </li>
              <li className="nav__item cli nav__item--end">
                <a href="#">Series</a>
              </li>
              <li className="nav__item cli">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Nav
