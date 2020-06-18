import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

function Header() {
  return (
    <nav className={headerStyles.navbar} activeClassName={headerStyles.navbar}>
      <ul className={headerStyles.navList}>
        <Link
          to="/"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/about"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          <li>About</li>
        </Link>
        <Link
          to="/work"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          <li>Work</li>
        </Link>
        <Link
          to="/contact"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Header
