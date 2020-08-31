import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
// import { FiCodesandbox } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { GrTwitter } from "react-icons/gr"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import contactStyles from "./contact.module.scss"
import {
  containerVariants,
  // emojiVariants,
  linksVariants,
} from "../animations/contact"
import Layout from "../components/layout"

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
            // variants={emojiVariants}
            // initial="initial"
            // whileHover="hover"
          >
            Say Hello!{" "}
            {/* <span
              role="img"
              aria-label="wave emoji"
              variants={emojiVariants}
              initial="initial"
              whileHover="hover"
            >
              👋
            </span> */}
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
                <FaLinkedin style={{ fontSize: "2rem", margin: ".5rem" }} />
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
                <AiFillGithub style={{ fontSize: "2rem", margin: ".5rem" }} />
              </motion.li>
            </a>
            <a
              href="https://twitter.com/tylertlai"
              rel="noreferrer"
              target="_blank"
            >
              <motion.li
                variants={linksVariants}
                initial="initial"
                whileHover="hover"
              >
                <GrTwitter style={{ fontSize: "2rem", margin: ".5rem" }} />
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
                <FiMail style={{ fontSize: "2rem", margin: ".5rem" }} />
              </motion.li>
            </a>
          </motion.ul>
          <p className={contactStyles.content}>
            Feel free to reach out to me and <br /> I will get back with you the
            best I can.
          </p>
        </main>
      </motion.div>
    </Layout>
  )
}

export default contact
