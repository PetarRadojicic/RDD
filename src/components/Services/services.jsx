import React from "react";
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import "./services.css";
import CorpDesign from "../../assets/skills4.webp";
import WebDesign from "../../assets/skills1.webp";
import AppDesign from "../../assets/skills2.webp";
import PhotoDesign from "../../assets/skills3.webp";

const itemVariants = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.6 }
  }
};

const SkillBar = ({ imgSrc, title, description, altText }) => (
  <InView threshold={0.25} triggerOnce={true}>
    {({ inView, ref }) => (
      <motion.div
        ref={ref}
        className="skillBar"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <img src={imgSrc} alt={altText} className="skillBarImg" />
        <div className="skillBarText">
          <h2>{title}</h2>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </motion.div>
    )}
  </InView>
);

const Services = () => {
  const skillSets = [
    {
      imgSrc: CorpDesign,
      altText: "UIDizajn",
      title: "Kreiranje Korporativnog Identiteta",
      description: [
        "Logo dizajn",
        "Vizit kartice i papirna korespondencija",
        "Korporativni brending i smernice za brend",
        "Pakovanje i dizajn etiketa proizvoda"
      ],
    },
    {
      imgSrc: WebDesign,
      altText: "Web Dizajn",
      title: "Kreiranje Web Dizajna",
      description: [
        "UI/UX dizajn",
        "Responzivni dizajn",
        "Interakcija i animacija",
        "Prototipovanje i wireframe",
        "Korisničko iskustvo i testiranje"
      ],
    },
    {
      imgSrc: AppDesign,
      altText: "App Dizajn",
      title: "Veštine Photoshopa",
      description: [
        "Obrada i retuširanje fotografija",
        "Digitalno slikarstvo i ilustracija",
        "Kreiranje tekstura i uzoraka",
        "Dizajn web elemenata i mockupova",
        "Manipulacija slike i kompozicija"
      ],
    },
    {
      imgSrc: PhotoDesign,
      altText: "Editovanje Video Materijala",
      title: "Kreiranje Reklama i Editovanje Video Materijala",
      description: [
        "Storyboarding i konceptualizacija",
        "Rezanje i montaža video klipova",
        "Kolor korekcija i grading",
        "Specijalni efekti i grafike u pokretu",
        "Audio obrada i sound design"
      ],
    }
  ];

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
        {skillSets.map((skill, index) => (
          <SkillBar
            key={index}
            imgSrc={skill.imgSrc}
            altText={skill.altText}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
