import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

const About = () => {
  return (
    <>
      <div className="contactPage">
        <h1 className="innerTitle" style={{ marginTop: "40px" }}>
          About Us
        </h1>
        <motion.div
          className="homePage"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://www.ciphernutz.com/_next/static/images/about-547a820cde1401f3e9d91e722fa39be1.png"
            alt="about"
            className="aboutSVG"
          />
          <div className="homeh1">
            <p>
              CIPHERNUTZ is an IT services agency that specializes in IT
              solutions for companies and organizations from around the globe.
              Information and knowledge in this day and age, especially with the
              advent of the internet, have become instrumental for
              differentiation, and our job is to equip our clients with all the
              right tools and strategies that will help them go head to head
              with their industry competitors and enable them to stand out. By
              combining the use of the best and most effective industry
              practices, as well as analysis of data models, we are able to
              ensure that our clients can meet all their business objectives.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="homeh1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="innerTitle">WE ARE THE BEST</h2>
          <h1 className="footerh1">
            Leveraging modern day technology to maximize business success
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default About;
