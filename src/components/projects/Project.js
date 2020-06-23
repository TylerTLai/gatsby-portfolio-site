import React from "react"
import projects from "./projects.json"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import { motion } from "framer-motion"
import { containerVariant } from "../../animations/project"
import projectStyles from "./project.module.scss"

function Project() {
  return (
    <main>
      {projects.map(project => {
        const projectCollection = project.technology.map(tech => {
          return (
            <ul className={projectStyles.list}>
              <li>{tech}</li>
            </ul>
          )
        })

        return (
          <motion.div
            className={projectStyles.container}
            variants={containerVariant}
            initial="initial"
            whileHover="hover"
          >
            <h2>{project.title}</h2>
            <p>
              {project.url !== "" && (
                <a href={project.url} target="_blank" rel="noreferrer">
                  <FiExternalLink
                    style={{ fontSize: "2rem", margin: "1rem" }}
                  />
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer">
                <AiFillGithub style={{ fontSize: "2rem", margin: "1rem" }} />
              </a>
            </p>
            <p>{project.description}</p>
            <h3>Technology Used</h3>
            <p>{projectCollection}</p>
          </motion.div>
        )
      })}
    </main>
  )
}

export default Project
