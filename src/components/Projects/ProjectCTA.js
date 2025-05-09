import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useLanguage } from '../../translations/LanguageContext';
import { SimpleDatePicker } from '../ui/SimpleDatePicker';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import '../../styles/datepicker.css';
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
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      setFormData({
        ...formData,
        timeline: format(date, 'dd MMMM yyyy', { locale: fr })
      });
    } else {
      setFormData({
        ...formData,
        timeline: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree's free tier for form submission
      const formId = process.env.REACT_APP_FORMSPREE_FORM_ID || 'xzblvmkj';
      
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          service: activeForm
        }),
      });
      
      if (response.ok) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          projectDescription: '',
          budget: '',
          timeline: '',
        });
        setSelectedDate(null);
        setSubmitStatus({
          show: true,
          type: 'success',
          message: 'Votre message a été envoyé avec succès! Je vous contacterai bientôt.'
        });
      } else {
        setSubmitStatus({
          show: true,
          type: 'danger',
          message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        show: true,
        type: 'danger',
        message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
                }}
                className="service-button"
              >
                {translations.projects.cta.services.uiux.title}
              </Button>
              <Button
                variant={activeForm === 'web' ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setActiveForm('web');
                }}
                className="service-button"
              >
                {translations.projects.cta.services.web.title}
              </Button>
              <Button
                variant={activeForm === 'mobile' ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setActiveForm('mobile');
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

              {submitStatus.show && (
                <Alert 
                  variant={submitStatus.type} 
                  onClose={() => setSubmitStatus({ show: false, type: '', message: '' })} 
                  dismissible
                >
                  {submitStatus.message}
                </Alert>
              )}

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
                  <div className="date-picker-wrapper">
                    <SimpleDatePicker 
                      value={selectedDate}
                      onChange={handleDateChange}
                      placeholder={translations.projects.cta.form.timeline}
                    />
                  </div>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : translations.projects.cta.form.submit}
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