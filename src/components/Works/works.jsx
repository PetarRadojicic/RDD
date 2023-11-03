import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './works.css';
import { Card } from 'antd';

const { Meta } = Card;

const Works = () => {
    const containerVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 2.5 } },
        hidden: { opacity: 0, y: 20 },
    };

    const buttonVariants = {
        hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 2.3 } },
    };

    return (
        <InView threshold={0.2} triggerOnce={true}>
            {({ inView, ref }) => (
                <motion.section
                    id='works'
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="worksTitle"
                        initial={{ x: -400, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : ""}
                        transition={{ type: 'spring', stiffness: 120 }}
                    >
                        Moj Portfolijo
                    </motion.h2>
                    <motion.span
                        className="worksDesc"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : ""}
                        transition={{ duration: 3 }}
                    >
                        Ponosim se pažnjom koju posvećujem najmanjim detaljima i brinem se da moj rad bude savršen do najsitnijih piksela. Radujem se što ću svoje veštine i iskustvo upotrebiti da pomognem poslovima da ostvare svoje ciljeve i stvore snažno prisustvo na internetu.
                    </motion.span>
                    <motion.a
                        className="workBtn"
                        href="https://github.com/PetarRadojicic"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        Github
                    </motion.a>
                </motion.section>
            )}
        </InView>
    );
}

export default Works;
