import React from "react"
import { motion } from "framer-motion"
import Head from "../components/head"

import workStyles from "./work.module.scss"
import Layout from "../components/layout"
import { containerVariants} from "../animations/work"

function work() {
  return (
    <Layout>
      <Head title="Work | Tyler Lai" />
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
        </main>
      </motion.div>
    </Layout>
  )
}

export default work
