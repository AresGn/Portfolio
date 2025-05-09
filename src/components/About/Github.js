import React from "react";
import { Row, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Mes contributions <strong className="purple">GitHub</strong>
      </h1>
      <div className="text-center mb-3">
        <p>Consultez mon activité de code sur GitHub:</p>
        <Button 
          variant="primary" 
          href="https://github.com/AresGn" 
          target="_blank"
          rel="noreferrer"
          className="github-btn"
          style={{ 
            padding: "10px 20px", 
            fontSize: "1.2rem",
            marginTop: "10px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <AiFillGithub style={{ fontSize: "1.5rem" }} />
          Voir mon profil GitHub
        </Button>
      </div>
      <div className="text-center mt-2">
        <small className="text-muted">
          Le calendrier d'activité GitHub a été temporairement désactivé pendant la mise à jour de React 18.
        </small>
      </div>
    </Row>
  );
}

export default Github;
