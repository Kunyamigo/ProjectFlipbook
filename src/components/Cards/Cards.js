import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { motion } from "framer-motion";
import card from "../../images/foto1.jpg";
import card1 from "../../images/foto2.jpg";
import card2 from "../../images/foto3.jpg";
import AnimationWhenVisible from "../Animations/AnimationWhenVisible";

const Cards = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="cards">
      <motion.h2
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        LO MAS DESTACADO
      </motion.h2>

      <div className="cards__container">
        <div className="cards__wrapper">
          <AnimationWhenVisible
            transition={{ duration: 0.4 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 500 },
            }}
          >
            <ul className="cards__items">
              <CardItem
                src={card}
                text="The Mexicas were a Mesoamerican culture that flourished in central Mexico in the post-classic period from 1300 to 1521. "
                path="/galeria"
              />
              <CardItem
                src={card1}
                text="The Mexicas were a Mesoamerican culture that flourished in central Mexico in the post-classic period from 1300 to 1521. "
                path="/galeria"
              />
              <CardItem
                src={card2}
                text="The Mexicas were a Mesoamerican culture that flourished in central Mexico in the post-classic period from 1300 to 1521. "
                path="/galeria"
              />
            </ul>
          </AnimationWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Cards;
