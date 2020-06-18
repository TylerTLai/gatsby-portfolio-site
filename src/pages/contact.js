import React from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import contactStyles from "./contact.module.scss"
import Layout from "../components/layout"
import {
  containerVariants,
  emojiVariants,
  linksVariants,
} from "../animations/contact"

function contact() {
  return (
    <Layout>
      <Helmet title="Contact | Tyler Lai" />
      <motion.div
        className={contactStyles.container}
        variants={containerVariants}
        initial="initial"
        animate="visible"
      >
        <main className={contactStyles.main}>
          <motion.h1
            className={contactStyles.heading}
            variants={emojiVariants}
            initial="initial"
            whileHover="hover"
          >
            Say Hello!{" "}
            <span
              role="img"
              aria-label="wave emoji"
              variants={emojiVariants}
              initial="initial"
              whileHover="hover"
            >
              👋
            </span>
          </motion.h1>
          <motion.ul className={contactStyles.links}>
            <a
              href="https://www.linkedin.com/in/tylertlai/"
              rel="noreferrer"
              target="_blank"
            >
              <motion.li
                variants={linksVariants}
                initial="initial"
                whileHover="hover"
              >
                LinkedIn
              </motion.li>
            </a>
            <a
              href="https://github.com/TylerTLai"
              rel="noreferrer"
              target="_blank"
            >
              <motion.li
                variants={linksVariants}
                initial="initial"
                whileHover="hover"
              >
                GitHub
              </motion.li>
            </a>
            <a
              href="mailto:lai.t.tyler@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <motion.li
                variants={linksVariants}
                initial="initial"
                whileHover="hover"
              >
                Email
              </motion.li>
            </a>
          </motion.ul>
          <p className={contactStyles.content}>
            Feel free to reach out to me and I will get back with you the best I
            can.
          </p>
        </main>
      </motion.div>
    </Layout>
  )
}

export default contact
