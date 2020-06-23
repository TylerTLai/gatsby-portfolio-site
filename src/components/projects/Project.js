import React from "react"
import projects from "./projects.json"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { containerVariant } from "../../animations/project"
import projectStyles from "./project.module.scss"

function Project() {
  console.log("from project", projects)
  return (
    <main>
      {projects.map(project => {
        return (
          <motion.div
            className={projectStyles.container}
            variants={containerVariant}
            initial="initial"
            whileHover="hover"
          >
            <h2>{project.title}</h2>
            <p>
             { project.url !== "" && <a href={project.url} target="_blank" rel="noreferrer">
                <FiExternalLink style={{ fontSize: "2rem", margin: "1rem" }} />
              </a>}
              <a href={project.github} target="_blank" rel="noreferrer">
                <AiFillGithub style={{ fontSize: "2rem", margin: "1rem" }} />
              </a>
            </p>
            <p>{project.description}</p>
            <p>{project.technology}</p>
          </motion.div>
        )
      })}
    </main>
  )
}

export default Project
