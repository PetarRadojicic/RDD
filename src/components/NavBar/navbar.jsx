import { Image } from "antd";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import useButtonHover from "../../hooks/useButtonHover";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const buttonHover = useButtonHover();

  return (
    <nav className="navbar">
      <Image src={logo} alt="Logo" className="logo" width={100} />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          smooth={true}
          offset={-80}
          duration={1000}
          className="desktopMenuListItem"
        >
          Početna
        </Link>
        <Link
          activeClass="active"
          to="skills"
          smooth={true}
          offset={-80}
          duration={1000}
          className="desktopMenuListItem"
        >
          Usluge
        </Link>
        <Link
          activeClass="active"
          to="Portfolio"
          smooth={true}
          offset={-80}
          duration={1000}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="Veštine"
          smooth={true}
          offset={-80}
          duration={1000}
          className="desktopMenuListItem"
        >
          Veštine
        </Link>
        <Link
          activeClass="active"
          to="Iskustvo"
          smooth={true}
          offset={-80}
          duration={1000}
          className="desktopMenuListItem"
        >
          Iskustvo
        </Link>
      </div>
      <motion.button
        whileHover={buttonHover}
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Kontaktirajte me
      </motion.button>

      <img
        src={menu}
        alt="Meni"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Početna
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Usluge
        </Link>
        <Link
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="Veštine"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Veštine
        </Link>
        <Link
          activeClass="active"
          to="Iskustvo"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Iskustvo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
