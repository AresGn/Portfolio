import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../translations/LanguageContext";

function AboutCard() {
  const { translations } = useLanguage();
  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {translations.about.intro} <span className="purple">Arès GNIMAGNON </span>
            {translations.about.from} <span className="purple"> {translations.about.location}</span>
            <br />
            {translations.about.education}
            <br />
            <br />
            {translations.about.passion}
            <br />
            <br />
            {translations.about.brand}
            <br />
            <br />
            {translations.about.activities}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {translations.about.activity1}
            </li>
            <li className="about-activity">
              <ImPointRight /> {translations.about.activity2}
            </li>
            <li className="about-activity">
              <ImPointRight /> {translations.about.activity3}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{translations.about.quote}"{" "}
          </p>
          <footer className="blockquote-footer">Arès</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
