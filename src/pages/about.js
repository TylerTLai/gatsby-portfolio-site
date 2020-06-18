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
    "JavaScript ES6",
    "React",
    "Redux",
    "Firebase",
    "Git / Github",
    "Semantic UI",
    "GatsbyJS",
    "GraphQL",
    "Framer Motion",
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
        <div className={aboutStyles.main}>
          <h1 className={aboutStyles.heading}>About Me</h1>
          <p className={aboutStyles.content}>
            I enjoy turning ideas into useful, well-polished products. Having a
            sharp eye for design helps me deliver quality user experiences.
          </p>
        </div>

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
