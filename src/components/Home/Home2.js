import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about technology and deeply believe in the transformative power of 
              programming to shape our world day by day.
              <br />
              <br />I'm proficient in modern languages such as
              <i>
                <b className="purple"> JavaScript, Python, and C#. </b>
              </i>
              <br />
              <br />
              My areas of expertise focus on developing innovative &nbsp;
              <i>
                <b className="purple">Web Applications and Mobile Solutions</b>, along with 
                a strong interest in{" "}
                <b className="purple">
                  Blockchain Technology and Bitcoin.
                </b>
              </i>
              <br />
              <br />
              I leverage my skills to create revolutionary products that can transform how we live 
              by solving real-world challenges. For mobile development, I primarily use 
              <b className="purple"> Flutter</b>, while for web applications, I rely on
              <i>
                <b className="purple">
                  {" "}
                  React.js and Next.js
                </b>
              </i>
              &nbsp; for performant, scalable solutions.
              <br />
              <br />
              Working with me isn't just about outsourcing a project—it's about establishing a 
              collaborative partnership with consistent communication throughout the development process. 
              I'm dedicated to ensuring your product or service authentically represents your brand's vision and values.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AresGn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AresGn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ares-gnimagnon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ares_gnimagnon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
