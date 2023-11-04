import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiGit, 
  SiGithub, 
  SiNpm, 
  SiReact, 
  SiSass, 
  SiTypescript, 
  SiWebpack,
  SiJest
} from 'react-icons/si';
import { motion } from 'framer-motion';
import './skills.css';

const Skills = () => {
  const skillVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ opacity: 1, y: 0, transition: { delay: custom * 0.1 } })
  };

  const skills = [
    { icon: <SiHtml5 />, name: 'HTML' },
    { icon: <SiCss3 />, name: 'CSS' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiGithub />, name: 'GitHub' },
    { icon: <SiNpm />, name: 'NPM' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiSass />, name: 'Sass' },
    { icon: <SiWebpack />, name: 'Webpack' },
    { icon: <SiJest />, name: 'Jest' },
    { icon: <SiTypescript />, name: 'TypeScript' }
  ];

  return (
    <>
      <div id="Veštine">
        <h1 className="contactPageTitle">Veštine</h1>
        <br></br>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill"
              custom={index}
              variants={skillVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skill.icon}
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
