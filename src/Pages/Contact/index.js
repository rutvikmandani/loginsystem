import React from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import { motion } from "framer-motion";
import "../../App.css";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <h1 className="innerTitle" style={{ margin: "40px 0" }}>
          Contact Us
        </h1>
        <motion.div
          className="inner-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="home-box">
            <div className="icon">
              <AddLocationAltIcon />
            </div>
            <img />
            <h2>Office Location</h2>
            <p className="innerText">
              302 SNS Business Park, Vesu Surat, India
            </p>
          </span>
          <span className="home-box">
            <div className="icon">
              <PhoneIcon />
            </div>
            <img />
            <h2>Contact Number</h2>
            <p className="innerText">+91 7016003347</p>
          </span>
          <span className="home-box">
            <div className="icon">
              <BusinessIcon />
            </div>
            <img />
            <h2>Email address</h2>
            <p className="innerText">contact@ciphernutz.com</p>
          </span>
        </motion.div>
        <input placeholder="E-mail Address" />
        <input placeholder="Message" />
        <button className="button">Submit</button>
      </div>
    </>
  );
};

export default Contact;
