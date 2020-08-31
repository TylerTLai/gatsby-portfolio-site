import React, { useContext } from "react"

import ThemeContext from "../../contexts/ThemeContext"

import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

import Header from "../header/"
// import Footer from "../footer/"

function Layout({ children }) {
  
  const theme = useContext(ThemeContext)

  return (
    <ThemeContext.Provider value={theme}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
