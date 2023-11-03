import React from "react";
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import "./skills.css";
import CorpDesign from "../../assets/skills4.webp";
import WebDesign from "../../assets/skills1.webp";
import AppDesign from "../../assets/skills2.webp";
import PhotoDesign from "../../assets/skills3.webp";

const Skills = () => {
  const itemVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 3.6 }
    }
  };

  return (
    <section id="skills">
      <span className="skillTitle">Usluge</span>
      <span className="skillDesc">
        U "Radojicic Digital Design", transformišemo vašu viziju u stvarnost
        koristeći najnovije trendove i tehnike u digitalnom dizajnu. Naša misija
        je da pružimo jedinstvena i kreativna rešenja koja odražavaju identitet
        vašeg brenda, komuniciraju vašu poruku i privlače vašu ciljnu publiku.
      </span>
      <div className="skillBars">
        <InView threshold={0.25} triggerOnce={true}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="skillBar"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <img src={CorpDesign} alt="UIDizajn" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Kreiranje Korporativnog Identiteta</h2>
                <p>Logo dizajn</p>
                <p>Vizit kartice i papirna korespondencija</p>
                <p>Korporativni brending i smernice za brend</p>
                <p>Pakovanje i dizajn etiketa proizvoda</p>
              </div>
            </motion.div>
          )}
        </InView>

        <InView threshold={0.25} triggerOnce={true}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="skillBar"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <img src={WebDesign} alt="Web Dizajn" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Kreiranje Web Dizajna</h2>
                <p>UI/UX dizajn</p>
                <p>Responzivni dizajn</p>
                <p>Interakcija i animacija</p>
                <p>Prototipovanje i wireframe</p>
                <p>Korisničko iskustvo i testiranje</p>
              </div>
            </motion.div>
          )}
        </InView>

        <InView threshold={0.25} triggerOnce={true}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="skillBar"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <img src={AppDesign} alt="App Dizajn" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Veštine Photoshopa</h2>
                <p>Obrada i retuširanje fotografija</p>
                <p>Digitalno slikarstvo i ilustracija</p>
                <p>Kreiranje tekstura i uzoraka</p>
                <p>Dizajn web elemenata i mockupova</p>
                <p>Manipulacija slike i kompozicija</p>
              </div>
            </motion.div>
          )}
        </InView>

        <InView threshold={0.25} triggerOnce={true}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="skillBar"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <img src={PhotoDesign} alt="Editovanje Video Materijala" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Kreiranje Reklama i Editovanje Video Materijala</h2>
                <p>Storyboarding i konceptualizacija</p>
                <p>Rezanje i montaža video klipova</p>
                <p>Kolor korekcija i grading</p>
                <p>Specijalni efekti i grafike u pokretu</p>
                <p>Audio obrada i sound design</p>
              </div>
            </motion.div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default Skills;
