import React from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import ScrollUpButton from "react-scroll-up-button"
import workStyles from "./work.module.scss"
import Layout from "../components/layout"
import Project from "../components/projects/Project"
import { containerVariants } from "../animations/work"

function work() {
  return (
    <Layout>
      <Helmet title="Work | Tyler Lai" />
      <ScrollUpButton
        style={{
          backgroundColor: "#1d1d1f",
          border: '2px solid #f0f0f0',
          width: "15px",
          padding: "15px",
          height: "15px",
          borderRadius: "5px",
          marginRight: "-11px",
        }}
      />
      <motion.div
        className={workStyles.container}
        variants={containerVariants}
        initial="initial"
        animate="visible"
      >
        <main className={workStyles.main}>
          <h1 className={workStyles.heading}>Work</h1>
          <p className={workStyles.content}>
            Here are some projects that I have built.
          </p>
          <br />
          <Project />
        </main>
      </motion.div>
    </Layout>
  )
}

export default work
