import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import notFoundStyles from "./404.module.scss"
import Layout from "../components/layout"

function NotFound() {
  
  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      backgroundColor: "#b50000",
      color: "f0f0f0",
      transition: { duration: 0.1 },
    },
  }

  const containerVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Layout>
      <Helmet title="Not Found | Tyler Lai" />
      <motion.div
        className={notFoundStyles.container}
        variants={containerVariants}
        intial="initial"
        animate="visible"
      >
        <main className={notFoundStyles.main}>
          <h1>
            Uh oh, page not found.{" "}
            <span role="img" aria-label="crying emoji">
              😭
            </span>
          </h1>
          <Link to="/">
            <motion.button
              className={notFoundStyles.button}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              Head home
            </motion.button>
          </Link>
        </main>
      </motion.div>
    </Layout>
  )
}

export default NotFound
