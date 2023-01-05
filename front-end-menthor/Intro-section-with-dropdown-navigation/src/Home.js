import React from "react"
import Button from "./Components/Button"
import styles from "./Home.module.css"
import Databiz from "./Assets/client-databiz.svg"
import Audiophile from "./Assets/client-audiophile.svg"
import Meet from "./Assets/client-meet.svg"
import Maker from "./Assets/client-maker.svg"

const Home = () => {
  return (
    <section className={styles.main}>
      <div className={styles.info}>
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team ritual, and whatc proctivity soar.</p>
        <Button text={'Learn more'} border backgroudBlack />
        <div className={styles.clients}>
          <a href="#"><img src={Databiz} alt="Databiz" /></a>
          <a href="#"><img src={Audiophile} alt="Audiophile" /></a>
          <a href="#"><img src={Meet} alt="Meet" /></a>
          <a href="#"><img src={Maker} alt="Maker" /></a>
        </div >
      </div >
      <img
        className={styles.imgHero}
        src={require('./Assets/image-hero-desktop.png')}
        alt="Image Hero"
      />
    </section >
  )
};

export default Home
