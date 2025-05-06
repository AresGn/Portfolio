import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yllenCrea from "../../Assets/Projects/yllen-crea.png";
import monMedicament from "../../Assets/Projects/MonMedicament.png";
import wordMagician from "../../Assets/Projects/WordMagician.png";
import autoSavePro from "../../Assets/Projects/AutoSavePro.png";
import teachAssist from "../../Assets/Projects/TeachAssist.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import catholicQuiz from "../../Assets/Projects/Catholic Quiz App.png";
import { useLanguage } from "../../translations/LanguageContext";

function Projects() {
  const { translations } = useLanguage();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {translations.projects.project_heading.split(" ").slice(0, -1).join(" ")} <strong className="purple">{translations.projects.project_heading.split(" ").slice(-1)} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {translations.projects.description}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordMagician}
              isBlog={false}
              title={translations.projects.wordmagician.title}
              description={translations.projects.wordmagician.description}
              ghLink="https://github.com/AresGn/WordMagician"
              demoLink="https://word-magician.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={translations.projects.codenexus.title}
              description={translations.projects.codenexus.description}
              ghLink="https://github.com/AresGn/CodeNexus"
              demoLink="https://kloo.me/Ares-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoSavePro}
              isBlog={false}
              title={translations.projects.autosavepro.title}
              description={translations.projects.autosavepro.description}
              ghLink="https://github.com/AresGn/Autosave_site"
              demoLink="https://autosavepro.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yllenCrea}
              isBlog={false}
              title={translations.projects.yllencrea.title}
              description={translations.projects.yllencrea.description}
              ghLink="https://github.com/AresGn/yllen_crea"
              demoLink="https://yllen-crea.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teachAssist}
              isBlog={false}
              title={translations.projects.teachassist.title}
              description={translations.projects.teachassist.description}
              ghLink="https://github.com/AresGn/TeachAssist_Py"
              demoLink="https://teachassist-demo.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monMedicament}
              isBlog={false}
              title={translations.projects.monmedicament.title}
              description={translations.projects.monmedicament.description}
              ghLink=""
              demoLink="https://www.figma.com/design/Mywd6NLRCvDZhYJl3ZrFzd/PharmLocator?node-id=0-1&t=LxeJvPxEMOvGugRr-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catholicQuiz}
              isBlog={false}
              title={translations.projects.catholicquiz.title}
              description={translations.projects.catholicquiz.description}
              ghLink=""
              demoLink="https://www.figma.com/proto/Yk1kbQTsobmYBIRFU353YO/App_Catholique?node-id=124-530&p=f&t=lw0UIitVsMepvrlO-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
