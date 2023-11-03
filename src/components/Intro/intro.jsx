import React from 'react';
import { motion } from 'framer-motion';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.2 } },
    };

    return (
        <section id="intro">
            <motion.div
                className="introContent"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span
                    className="hello"
                    variants={itemVariants}
                >
                    Zdravo,
                </motion.span>
                <motion.span
                    className="introText"
                    variants={itemVariants}
                >
                    Ja sam <span className="introName">Petar</span> <br />Web Dizajner/Programer
                </motion.span>
                <motion.p
                    className="introPara"
                    variants={itemVariants}
                >
                    Ja sam vešt veb programer sa iskustvom u kreiranju<br />vizualno privlačnih i korisnički prijateljskih veb sajtova.
                </motion.p>
                <Link to="your-destination" smooth={true}>
                    <motion.button
                        className="btn"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img src={btnImg} alt="Zaposli" className='btnImg'/>Skini moj CV
                    </motion.button>
                </Link>
            </motion.div>
            <motion.img
                src={bg}
                alt="Profil"
                className="bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
            />
        </section>
    );
}

export default Intro;
