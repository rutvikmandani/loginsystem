import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RemoveUser } from "../../Redux/Action";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../App.css";

const Home = () => {
  const detail = [
    {
      name: "SaaS Product Development",
      about:
        "SaaS products are a way of delivering software that allows our clients access to data from any device through the internet and a web browser.",
    },
    {
      name: "Mobile Application Development",
      about:
        "Create a mobile application for your company that can reach users when most of their attention is focused on the information vehicle, i.e. their mobile phone.",
    },
    {
      name: "Web Application Development",
      about:
        "We do this by utilizing eye-catching graphics and visuals, as well as content that will draw your customers in. This will ultimately allow you to gain website traffic and improve your conversion rates.",
    },
    {
      name: "UI/UX Design",
      about:
        "For many businesses, the website or web application is the first touchpoint where customers interact with the company.",
    },
    {
      name: "Quality Assurance",
      about:
        "As the term itself explains, quality assurance involves the process of making sure that everything is in working order and all operations are being carried out the way they were intended to be.",
    },
    {
      name: "Search Engine Optimization",
      about:
        "What search engine optimization means is that the content on your platform will be dense in a certain keyword.",
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogout, setIsLogout] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.1 });
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3.5,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "200vw" });
    }
  }, [inView]);

  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 8,
          bounce: 0.3,
        },
      });
    }
    if (!inView2) {
      animation2.start({ x: "-100vw" });
    }
  }, [inView2]);

  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView3) {
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 8,
          bounce: 0.3,
        },
      });
    }
    if (!inView3) {
      animation3.start({ x: "120vw" });
    }
  }, [inView3]);

  const [ref4, inView4] = useInView({ threshold: 0.1 });
  const animation4 = useAnimation();

  useEffect(() => {
    if (inView4) {
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 8,
          bounce: 0.3,
        },
      });
    }
    if (!inView4) {
      animation4.start({ x: "-100vw" });
    }
  }, [inView4]);

  const [ref5, inView5] = useInView({ threshold: 0.1 });
  const animation5 = useAnimation();

  useEffect(() => {
    if (inView5) {
      animation5.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      });
    }
    if (!inView5) {
      animation5.start({ y: "100vw" });
    }
  }, [inView5]);

  const logout = () => {
    dispatch(RemoveUser(setIsLogout));
  };
  useEffect(() => {
    !!isLogout && navigate("/");
  }, [isLogout]);
  return (
    <>
      <div className="contactPage">
        <motion.div
          className="homePage"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="homeh1">
            We're nutz about helping your business prosper!
          </h1>
          <img
            src="	https://www.ciphernutz.com/_next/static/images/home-4d72e20e474fc7e53abae11797de8077.webp"
            alt="home"
            className="homeSVG"
          />
        </motion.div>
        <h2>Explore Solutions</h2>
        <motion.div
          className="inner-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {detail.map((el, index) => (
            <span className="home-box" key={index}>
              <img />
              <h2>{el.name}</h2>
              <p className="innerText">{el.about}</p>
            </span>
          ))}
        </motion.div>
        <div ref={ref}>
          <motion.div
            className="homePage"
            animate={animation1}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="homeh1"
            >
              <h2 className="innerTitle">Our Mission</h2>
              <p>
                At Ciphernutz, our mission has always been to help startups and
                businesses looking to enter the world of businesses to establish
                themselves online as viable players in their respective
                industries and to enable them to strengthen their brand image
                through maximum engagement with their target audience. We create
                innovative and intuitive software and platforms for our clients
                so that they can maximize the effectiveness of these crucial
                touchpoints where decisive customer interactions take place. Our
                goal is to provide the highest quality of IT services that would
                make our clients’ websites, web applications, or mobile
                applications, the selling point that helps them stand out from
                the noise and the competition. Furthermore, the product we
                design for our clients is made so that the traffic to their
                platforms is boosted and their conversion rates increase at a
                rapid rate, ultimately allowing them to meet their own
                organizational goals and objectives.
              </p>
            </motion.div>
            <img
              src="	https://www.ciphernutz.com/_next/static/images/mission-d85802120bae5b3844cb73a1b3cb3888.png"
              alt="home"
              className="homeSVG"
            />
          </motion.div>
        </div>
        <div ref={ref2}>
          <motion.div
            className="homePage"
            animate={animation2}
          >
            <img
              src="		https://www.ciphernutz.com/_next/static/images/mission-d85802120bae5b3844cb73a1b3cb3888.png"
              alt="home"
              className="homeSVG"
            />
            <div className="homeh1">
              <h2 className="innerTitle">Our Mission</h2>
              <p>
                Our vision is to become one of the best providers of various IT
                service solutions in the industry around the world because we
                are confident that what we have to offer to our clients is truly
                one of a kind and none other can parallel the quality and
                delivery of our services. We strive to inspire businesses to
                reach their full potential, and to build long-lasting
                relationships with our clientele.
              </p>
            </div>
          </motion.div>
        </div>
        <div ref={ref3}>
          <motion.div
            className="homePage"
            animate={animation3}
          >
            <div className="homeh1">
              <h2 className="innerTitle">Our Commitment to you</h2>
              <p>
                As an IT services firm, we are well aware of the fact that the
                needs of no two customers will ever be the same, and so we
                believe it is impertinent for us to thoroughly analyze every
                client’s needs and come up with a tailor-made solution that
                fulfills each requirement the client has. We consider ourselves
                to be successful only as long as our clients are satisfied with
                our services, and that is why all our clients know they can put
                their trust in us to provide the highest quality of services and
                the highest value for their investments.
              </p>
            </div>
            <img
              src="	https://www.ciphernutz.com/_next/static/images/commit-94c31cf351942357d466377f8d7514fb.jpg"
              alt="home"
              className="homeSVG"
            />
          </motion.div>
        </div>
        <div ref={ref4}>
          <motion.div
            className="homePage"
            animate={animation4}
          >
            <img
              src="https://www.ciphernutz.com/_next/static/images/team-601345a468fdd328257178b6aa816946.png"
              alt="home"
              className="homeSVG"
            />
            <div className="homeh1">
              <h2 className="innerTitle">Our Team</h2>
              <p>
                The teams at ciphernutz consist of highly skilled and qualified
                individuals who boast years of hands-on experience in providing
                IT solutions to a number of different businesses and clients
                across industries. Our in-house specialists are some of the
                best, most proficient as well as professional workers in this
                line of work so that our clients can always rest assured that
                their business is in good hands. Once you avail of our services
                and a new project is underway, our experts will be present
                throughout the entire service process to help our clients should
                any issues arise; conduct quality assurance checks and provide
                tips and guidelines on how to manage the product once the
                service has been delivered.
              </p>
            </div>
          </motion.div>
        </div>
        <div ref={ref5}>
          <motion.div className="homeh1" animate={animation5}>
            <h2 className="innerTitle">WE ARE THE BEST</h2>
            <h1 className="footerh1">
              Leveraging modern day technology to maximize business success
            </h1>
            <button className="button logout" onClick={logout}>
              Logout
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
