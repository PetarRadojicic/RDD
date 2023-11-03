import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Početna</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">O meni</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolijo</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Klijenti</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Kontaktirajte me</button>
            
            <img src={menu} alt="Meni" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Početna</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>O meni</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolijo</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Klijenti</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Kontakt</Link>
            </div>
        </nav>
    )
}

export default Navbar;
