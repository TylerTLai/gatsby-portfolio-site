import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { RiMoonLine, RiSunLine } from "react-icons/ri"
import ThemeContext from "../../contexts/ThemeContext"
import headerStyles from "./header.module.scss"

function Header() {
  const theme = useContext(ThemeContext)
  const [dark, setDark] = useState(theme.dark)
  const [styleName, setStyleName] = useState("navbar")

  const toggleTheme = () => {
    setDark(prevState => !prevState)
    console.log("switching modes")
    console.log(dark)
  }

  const renderHeader = theme => {
    return (
      <nav
        className={headerStyles.navbar}
        activeClassName={headerStyles.navbar}
      >
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
          <li onClick={toggleTheme}>
            {dark ? (
              <RiSunLine className={headerStyles.themeIcon} />
            ) : (
              <RiMoonLine className={headerStyles.themeIcon} />
            )}
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => renderHeader(value)}
    </ThemeContext.Consumer>
  )
}

export default Header
