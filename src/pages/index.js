import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
// import lottie from "lottie-web/build/player/lottie_light"
import { motion } from "framer-motion"
import homeStyles from "./index.module.scss"
import Layout from "../components/layout"
import {
  buttonVariants,
  fullNameVariants,
  nameVariants,
  userExperienceVariants,
} from "../animations/home"

function Index() {
  // const thumbContainer = useRef(null)

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: thumbContainer.current,
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: true,

  //     // path: "../assets/like.json",
  //     animationData: require("../assets/like.json"),
  //   })
  // }, [])

  const name = ["T", "y", "l", "e", "r", " ", "L", "a", "i"]

  return (
    <Layout>
      <Helmet title="Home | Tyler Lai" />
      <div className={homeStyles.container}>
        <main className={homeStyles.main}>
          <p className={homeStyles.subheading}>Frontend Developer</p>
          <motion.h1
            className={homeStyles.heading}
            variants={fullNameVariants}
            initial="initial"
            animate="visible"
            whileHover="hover"
            onTap="initial"
          >
            {name.map(letter => (
              <motion.span variants={nameVariants}>{letter}</motion.span>
            ))}
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
            {/* <span
              className={homeStyles.thumb}
              ref={thumbContainer}
              style={{ width: 20, height: 20 }}
            ></span> */}
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

export default Index
