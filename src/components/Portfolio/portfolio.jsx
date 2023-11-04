import React from "react";
import { Card, Image } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { motion } from 'framer-motion';
import "./portfolio.css";
import WeightFinderImage from "../../assets/WeightFinder.png";
import ASCIIImage from "../../assets/ASCII.png";
import ToDoImage from "../../assets/Todo.png";

const { Meta } = Card;

const cardData = [
  {
    id: 1,
    title: "WeightFinder",
    description:
      "This is a simple application featuring an input field where you can type in a name. Once you provide a name, the application will display its corresponding weight.",
    imageUrl: WeightFinderImage,
    liveViewUrl: "https://radojicic.co/WeightFinder",
    sourceCodeUrl: "https://github.com/PetarRadojicic/WeightFinder",
  },
  {
    id: 2,
    title: "ASCII Write",
    description:
      "This is a streamlined tool that converts user-input text into ASCII art. Simply input your desired text, choose from multiple ASCII styles, and the app instantly renders your message into a customizable ASCII design.",
    imageUrl: ASCIIImage,
    liveViewUrl: "https://radojicic.co/Ascii",
    sourceCodeUrl: "https://github.com/PetarRadojicic/AscsiiWrite",
  },
  {
    id: 3,
    title: "ToDo List",
    description:
      "This is a React-based ToDo List app that utilizes local storage to ensure data persistence, it calculates and displays the duration for which each task has been active, helping you stay organized and efficient.",
    imageUrl: ToDoImage,
    liveViewUrl: "https://radojicic.co/ToDoList/",
    sourceCodeUrl: "https://github.com/PetarRadojicic/ToDoList",
  },
];
const Portfolio = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <section id="Portfolio">
      <h2 className="worksTitle">Moj Portfolio</h2>
      <div className="worksGallery">
        {cardData.map((data, index) => (
          <motion.div
            key={data.id}
            className="cardMotionWrapper" 
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card
              hoverable
              className="worksCard"
              cover={
                <Image
                  alt={data.title}
                  src={data.imageUrl}
                  className="worksImg"
                />
              }
            >
              <Meta
                title={<h1 className="cardTitle">{data.title}</h1>}
                description={
                  <div className="cardContent">
                  <p>{data.description}</p>
                  <div className="cardLinks">
                    <a
                      href={data.liveViewUrl}
                      className="cardLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live view <LinkOutlined />
                    </a>
                    <a
                      href={data.sourceCodeUrl}
                      className="cardLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source code <LinkOutlined />
                    </a>
                  </div>
                </div>
              }
            />
            </Card>
          </motion.div>
        ))}
      </div>
      <a className="workBtn" href="https://github.com/PetarRadojicic">
        See More! / my Github
      </a>
    </section>
  );
};

export default Portfolio;