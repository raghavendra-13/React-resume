import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from '../rkresume24.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Services() {
  const transition = {duration: 1, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Skills</span>
        <span>
          Lorem ispum is simpley dummy text of priniting lorem iiiipssssuuummm
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
        whileInView={{left: '14rem'}}
        initial={{left: '25%'}}
        transition={transition} 
        style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Javascript Development"}
            detail={"React,Javascript,HTML,CSS,API"}
          />
        </motion.div>
        <motion.div 
          whileInView={{left: '-5rem'}}
          initial={{left: '5%'}}
          transition={transition} 
           style={{ top: "12rem", left: "15rem" }}>
          <Card
            emoji={Glasses}
            heading={"JAVA development"}
            detail={"Core Concepts,OOPS,HackerRank GoldBadge"}
          />
        </motion.div>
        <motion.div
        whileInView={{left: '14rem'}}
        initial={{left: '25%'}}
        transition={transition} 
         style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"QA Automation"}
            detail={"WebdriverIO,CYPRESS,Jmeter"}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background:"var(--purple)" }}></div>
      </div>
    </div>
  );
}

export default Services;
