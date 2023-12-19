import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import CV from "../../assets/PetarRadojičićCV.pdf";
import btnImg from "../../assets/hireme.png";
import bg from "../../assets/image.png";
import useButtonHover from "../../hooks/useButtonHover";
import "./intro.css";

const Intro = () => {
  const buttonHover = useButtonHover();

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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "PetarRadojicicCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <motion.span
          className="introText"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Radojičić <span className="introName">Digital Design</span> <br />
        </motion.span>
        <motion.p
          className="introPara"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Vizija u svakom pikselu
          <br />
        </motion.p>
        <Link to="your-destination" smooth={true}>
          <motion.button
            className="btn"
            onClick={handleDownload}
            variants={textVariants}
            initial="initial"
            animate="animate"
            whileHover={buttonHover}
          >
            <img src={btnImg} alt="CV" className="btnImg" />
            Preuzmi moj CV
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
