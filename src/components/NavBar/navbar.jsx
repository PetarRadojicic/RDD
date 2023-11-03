import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import { Image } from 'antd';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 70 }}
        >
            <Image src={logo} alt="Logo" className='logo' width={100}/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Početna</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Usluge</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Portfolijo</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Saradnja</Link>
            </div>
            <motion.button
                className="desktopMenuBtn"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                <img src={contactImg} alt="Kontaktirajte me" className="desktopMenuImg" />Kontaktirajte me
            </motion.button>
            
            <img src={menu} alt="Meni" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            
            <motion.div
                className="navMenu"
                variants={menuVariants}
                initial="closed"
                animate={showMenu ? "open" : "closed"}
                transition={{ type: 'spring', stiffness: 125 }}
            >
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;
