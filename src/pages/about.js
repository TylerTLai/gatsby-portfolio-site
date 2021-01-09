import React from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"

import aboutStyles from "./about.module.scss"
import Layout from "../components/layout"

import {
  containerVariants,
  skillsVariants,
  skillsItemVariants,
} from "../animations/about"

function about() {
  const skills = [
    "HTML5",
    "CSS3 / SCSS",
    "JavaScript ES6+",
    "React",
    "Redux",
    "MongoDB",
    "Express",
    "Node",
    "GatsbyJS",
    "Framer Motion",
    "Figma",
    "Adobe XD",
  ]

  return (
    <Layout>
      <Helmet title="About | Tyler Lai" />
      <motion.div
        className={aboutStyles.container}
        variants={containerVariants}
        initial="initial"
        animate="visible"
      >
        <main className={aboutStyles.main}>
          <h1 className={aboutStyles.heading}>About Me</h1>
          <h2>Frontend Focused. Backend Capable.</h2>
          <p className={aboutStyles.content}>
            Having been a{" "}
            <a
              href="https://500px.com/p/TylerLai?view=photos"
              target="_blank"
              rel="noreferrer"
            >
              photographer
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/watch?v=bwIy-tcUt0Q"
              target="_blank"
              rel="noreferrer"
            >
              video editor
            </a>
            , and now, developer, I’m passionate about pushing my creative and
            technical limits to build software with rich user experiences.
            <br />
            <br />
            In my life and approach, I believe less is more and that simplicity
            tends to be the best route.
            <br />
            <br />
            If I’m not creating or coding, I’m{" "}
            <a
              href="https://www.goodreads.com/user/show/48338817-tyler-lai"
              target="_blank"
              rel="noreferrer"
            >
              reading
            </a>
            .
          </p>
        </main>

        <motion.div className={aboutStyles.skills}>
          <h1 className={aboutStyles.heading}>Techincal skills</h1>
          <p className={aboutStyles.content}>
            <motion.ul
              className={aboutStyles.skillsList}
              variants={skillsVariants}
              initial="initial"
              animate="visible"
            >
              {skills.map(skill => (
                <motion.li
                  key={skill}
                  variants={skillsItemVariants}
                  whileHover="hover"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

export default about
