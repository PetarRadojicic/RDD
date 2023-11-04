import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Intro = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section id="intro">
      <div className="introContent">
        <motion.span
          className="hello"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Zdravo,
        </motion.span>
        <motion.span
          className="introText"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Ja sam <span className="introName">Petar</span> <br />
          Web Dizajner/Programer
        </motion.span>
        <motion.p
          className="introPara"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Ja sam vešt veb programer sa iskustvom u kreiranju
          <br />
          vizualno privlačnih i korisnički prijateljskih veb sajtova.
        </motion.p>
        <Link to="your-destination" smooth={true}>
          <motion.button
            className="btn"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <img src={btnImg} alt="CV" className="btnImg" />
            Skini moj CV
          </motion.button>
        </Link>
      </div>
      <motion.img
        src={bg}
        alt="Profil"
        className="bg"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />
    </section>
  );
};

export default Intro;
