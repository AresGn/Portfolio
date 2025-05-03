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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordMagician}
              isBlog={false}
              title="WordMagician"
              description="A Microsoft Word add-in that integrates AI capabilities into your word processing. WordMagician enhances your document creation experience with intelligent features, making writing more efficient and effective."
              ghLink="https://github.com/AresGn/WordMagician"
              demoLink="https://word-magician.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CodeNexus"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/AresGn/CodeNexus"
              demoLink="https://kloo.me/Ares-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoSavePro}
              isBlog={false}
              title="AutoSavePro"
              description="A Windows application that monitors and automatically saves files opened in various software, protecting users' work against accidental data loss. AutoSavePro runs in the background, providing seamless protection for your important documents."
              ghLink="https://github.com/AresGn/Autosave_site"
              demoLink="https://autosavepro.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yllenCrea}
              isBlog={false}
              title="yllen-crea"
              description="A landing page for a resin jewelry creation business. This elegant, responsive site showcases unique handcrafted pieces, featuring a modern design that highlights the artistry and craftsmanship behind each product."
              ghLink="https://github.com/AresGn/yllen_crea"
              demoLink="https://yllen-crea.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teachAssist}
              isBlog={false}
              title="TeachAssist"
              description="A desktop application that statically analyzes Java code submitted by students based on rules defined by the teacher in JSON files. It aims to automate part of the grading process, provide structured data points for further evaluation, and organize submissions efficiently."
              ghLink="https://github.com/AresGn/TeachAssist_Py"
              demoLink="https://teachassist-demo.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monMedicament}
              isBlog={false}
              title="MonMedicament"
              description="UI design for a web platform that revolutionizes medication search in Africa. MonMedicament is an intuitive digital platform that connects patients and pharmacies through cutting-edge technology, making healthcare accessible to all by enabling patients to quickly and efficiently find their treatments."
              ghLink=""
              demoLink="https://www.figma.com/design/Mywd6NLRCvDZhYJl3ZrFzd/PharmLocator?node-id=0-1&t=LxeJvPxEMOvGugRr-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catholicQuiz}
              isBlog={false}
              title="Catholic Quiz App"
              description="UX/UI design for a mobile application focused on Catholic quizzes. This interactive learning platform features an engaging interface with carefully crafted user journeys, providing an educational experience through religious questions and answers in an intuitive mobile environment."
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
