import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useLanguage } from "../../translations/LanguageContext";

function Home() {
  const { translations } = useLanguage();
  const navigate = useNavigate();
  
  const scrollToProjectCTA = () => {
    // D'abord, on navigue vers la page des projets
    navigate('/projects');
    
    // On attend que la navigation soit terminée et que le composant soit monté
    setTimeout(() => {
      const projectCTA = document.getElementById('project-cta-section');
      if (projectCTA) {
        projectCTA.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 500); // Augmentation du délai pour s'assurer que la navigation est terminée
  };
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {translations.home.greeting}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {translations.home.intro}
                <strong className="main-name"> {translations.home.name}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              
              <Button
                variant="primary"
                size="lg"
                className="project-cta-button"
                onClick={scrollToProjectCTA}
                style={{ 
                  marginTop: "20px",
                  position: "relative",
                  zIndex: 10,
                  cursor: "pointer"
                }}
              >
                {translations.home.talkAboutProject}
              </Button>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
