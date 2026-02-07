import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { GeoAltFill } from "react-bootstrap-icons";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="g-4 align-items-stretch">
          {/* Left Column - Main Content */}
          <Col xs={12} md={7}>
            <div className="hero-content">
              <h1 className="hero-title">KGS KACHRA</h1>
              <h4 className="hero-subtitle">GENERAL SUPPLIES</h4>
              <h5 className="hero-tagline">
                "Your competitive hardware store, lightning fast."
              </h5>
              <h3 className="hero-description">
                CONSTRUCTION MATERIALS & SUPPLIES
              </h3>
              <div className="hero-buttons d-flex flex-row gap-2 gap-sm-3">
                <Button
                  variant="warning"
                  size="lg"
                  className="btn-contact flex-fill flex-sm-grow-0"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us Today
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="btn-products flex-fill flex-sm-grow-0"
                  onClick={() => scrollToSection("products")}
                >
                  View Products
                </Button>
              </div>
            </div>
          </Col>

          {/* Right Column - Delivery Card */}
          <Col xs={12} md={5}>
            <Card className="delivery-card">
              <Card.Body>
                <Card.Title className="delivery-title">
                  Get Your Building Needs Delivered Fast!
                </Card.Title>
                <hr className="delivery-divider" />
                <div className="location-info">
                  <div className="location-item">
                    <GeoAltFill className="location-icon" />
                    <span className="location-text">Malindi, Kwachocha</span>
                  </div>
                  <div className="location-item">
                    <GeoAltFill className="location-icon" />
                    <span className="location-text">
                      Opp. Kurawa Medical Clinic
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}