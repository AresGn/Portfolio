import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useLanguage } from '../../translations/LanguageContext';
import './ProjectCTA.css';

const ProjectCTA = () => {
  const { translations } = useLanguage();
  const [activeForm, setActiveForm] = useState('uiux');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    requirements: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log('Form submitted:', formData);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container fluid className="project-section" id="project-cta-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center mb-5">
            <h2 className="cta-title">{translations.projects.cta.title}</h2>
            <p className="cta-description">{translations.projects.cta.description}</p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <div className="service-buttons">
              <Button
                variant={activeForm === 'uiux' ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setActiveForm('uiux');
                  console.log('UI/UX button clicked');
                }}
                className="service-button"
              >
                {translations.projects.cta.services.uiux.title}
              </Button>
              <Button
                variant={activeForm === 'web' ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setActiveForm('web');
                  console.log('Web button clicked');
                }}
                className="service-button"
              >
                {translations.projects.cta.services.web.title}
              </Button>
              <Button
                variant={activeForm === 'mobile' ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setActiveForm('mobile');
                  console.log('Mobile button clicked');
                }}
                className="service-button"
              >
                {translations.projects.cta.services.mobile.title}
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={formVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="service-description mb-4">
                <h3>{translations.projects.cta.services[activeForm].title}</h3>
                <p>{translations.projects.cta.services[activeForm].description}</p>
              </div>

              <Form onSubmit={handleSubmit} className="project-form">
                <Form.Group className="mb-3">
                  <Form.Label>{translations.projects.cta.form.name}</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{translations.projects.cta.form.email}</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{translations.projects.cta.form.projectDescription}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{translations.projects.cta.form.budget}</Form.Label>
                  <Form.Control
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{translations.projects.cta.form.timeline}</Form.Label>
                  <Form.Control
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{translations.projects.cta.form.requirements}</Form.Label>
                  <Form.Control
                    type="file"
                    name="requirements"
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-button">
                  {translations.projects.cta.form.submit}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectCTA; 