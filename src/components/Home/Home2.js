import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../translations/LanguageContext";

function Home2() {
  const { translations, language } = useLanguage();
  const navigate = useNavigate();
  
  // Phrases de transition pour chaque langue
  const transitionPhrases = {
    en: "while for web applications, I rely on",
    fr: "tandis que pour les applications web, j'utilise",
    es: "mientras que para aplicaciones web, utilizo"
  };
  
  const scrollToProjectCTA = () => {
    // Navigate to projects page with correct path (singular "project" not "projects")
    navigate('/project');
    
    // Wait for navigation to complete and component to mount
    setTimeout(() => {
      try {
        // Essayer de trouver la section par ID
        const projectCTA = document.getElementById('project-cta-section');
        if (projectCTA) {
          // Scroll avec un offset pour éviter que l'en-tête ne cache la section
          window.scrollTo({
            top: projectCTA.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        } else {
          console.warn("Project CTA section not found in the DOM after navigation");
          // Plan B: faire défiler vers le bas de la page
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }
      } catch (error) {
        console.error("Error scrolling to project CTA section:", error);
      }
    }, 2000); // Augmentation du délai pour s'assurer que la page est complètement chargée
  };
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">{translations.home2.introduce}</span>
            </h1>
            <p className="home-about-body">
              {translations.home2.about_body}
              <br />
              <br />{translations.home2.languages}
              <i>
                <b className="purple"> {translations.home2.languages_list} </b>
              </i>
              <br />
              <br />
              {translations.home2.expertise} &nbsp;
              <i>
                <b className="purple">{translations.home2.expertise_details}</b>
                </i>, {translations.home2.interest}{" "}
                <b className="purple">
                  {translations.home2.interest_details}
                </b>
              <br />
              <br />
              {translations.home2.leverage}{" "}
              <b className="purple"> {translations.home2.mobile_tech}</b>, {transitionPhrases[language] || transitionPhrases.en} 
              <i>
                <b className="purple">
                  {" "}
                  {translations.home2.web_tech}
                </b>
              </i>
              &nbsp; {translations.home2.web_desc}
              <br />
              <br />
              {translations.home2.partnership}
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex justify-content-center align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <div style={{
              position: "relative",
              zIndex: 10000,
              marginBottom: "40px"
            }}>
              <Button
                variant="primary"
                size="lg"
                className="project-cta-button"
                onClick={scrollToProjectCTA}
              >
                {translations.home.talkAboutProject}
              </Button>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{translations.home2.find_me}</h1>
            <p>
              <span className="purple">{translations.home2.connect}</span>
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
