import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import { motion } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

import projects from "./projects.json"
import {
  containerVariants,
  technologiesVariants,
  technologyVariants,
} from "../../animations/project"

import projectStyles from "./project.module.scss"

function Project() {
  return (
    <div className={projectStyles.container}>
      {projects.map(project => {
        // Technologies collection
        const technologies = project.technology.map(tech => {
          return (
            <div key={uuidv4()} className={projectStyles.technologiesContainer}>
              <motion.ul
                className={projectStyles.list}
                variants={technologiesVariants}
                initial="initial"
                animate="visible"
              >
                <motion.li variants={technologyVariants}>{tech}</motion.li>
              </motion.ul>
            </div>
          )
        })
        // Main content
        return (
          <motion.main
            className={projectStyles.main}
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
          >
            <h2 className={projectStyles.projectTitle}>{project.title}</h2>
            <p className={projectStyles.projectLinks}>
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
            <p className={projectStyles.projectDescription}>
              {project.description}
            </p>
            <p className={projectStyles.technologies}>{technologies}</p>
          </motion.main>
        )
      })}
    </div>
  )
}

export default Project
