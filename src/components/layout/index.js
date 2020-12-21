import React from "react"

import "../../styles/index.scss"
import layoutStyles from './layout.module.scss'

import Header from "../header/"

function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
