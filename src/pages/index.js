import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import homeStyles from "./index.module.scss"
import Layout from "../components/layout"
import {
  buttonVariants,
  nameVariants,
  userExperienceVariants,
} from "../animations/home"

function index() {
  return (
    <Layout>
      <Helmet title="Home | Tyler Lai" />
      <div className={homeStyles.container}>
        <main className={homeStyles.main}>
          <p className={homeStyles.subheading}>Frontend Developer</p>
          <motion.h1
            className={homeStyles.heading}
            variants={nameVariants}
            initial="initial"
            animate="visible"
            whileHover="hover"
          >
            TYLER LAI
          </motion.h1>
          <p className={homeStyles.content}>
            I build and design apps that focus on the{" "}
            <motion.span
              variants={userExperienceVariants}
              initial="initial"
              whileHover="hover"
            >
              user experience
            </motion.span>
            .
          </p>
          <Link to="/work">
            <motion.button
              className={homeStyles.button}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              My Work
            </motion.button>
          </Link>
        </main>
      </div>
    </Layout>
  )
}

export default index
