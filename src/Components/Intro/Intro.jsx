import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import gi from "../../img/gi.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>
            Hey, Hiring Team...
          </span>
          <span>Welcome to My Profile...!</span>
          <span>
            I am a developer, want to kick start my career in react
            development,have got 7+ months experience in QA Automation, I have
            got practical knowledge of numerous skills,to know about my profile
            more click on Download CV in Services.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          {/* <a href="link">                To give links to img
                <img src="" alt="" />
            </a> */}
          <a href="https://github.com/raghavendra-13">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/raghavendra-kattimani-649285137/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={gi}
          alt=""
        />
        <div style={{ top: "-4%", left: "68%" }} className="floating-div">
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "1rem" }} className="floating-div">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
