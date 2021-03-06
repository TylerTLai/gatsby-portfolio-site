import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
// import lottie from "lottie-web/build/player/lottie_light"
import { motion } from "framer-motion"
import homeStyles from "./index.module.scss"
import Layout from "../components/layout"
import {
  buttonVariants,
  containerVariants,
  nameVariants,
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
      <motion.div
        className={homeStyles.container}
        variants={containerVariants}
        initial="initial"
        animate="visible"
      >
        <main className={homeStyles.main}>
          <p className={homeStyles.subheading}>Frontend Developer</p>
          <h1 className={homeStyles.heading}>
            {name.map(letter => (
              <motion.span variants={nameVariants}>{letter}</motion.span>
            ))}
          </h1>
          <p className={homeStyles.content}>
            I build and design apps that focus on the{" "}
            <span style={{ color: "#1d1d1f" }}>user experience</span>.
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
      </motion.div>
    </Layout>
  )
}

export default Index
