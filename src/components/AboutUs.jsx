import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  LocalShipping,
  AttachMoney,
  HeadsetMic,
  Inventory,
  Build,
  CheckCircle,
} from "@mui/icons-material";


export default function AboutUs() {
  const whyChooseUs = [
    {
      icon: <LocalShipping fontSize="large" />,
      title: "Efficient & Fast Delivery",
      description: "We ensure your materials arrive on time, every time.",
    },
    {
      icon: <AttachMoney fontSize="large" />,
      title: "Competitive Pricing",
      description: "We offer high-quality products at unbeatable prices.",
    },
    {
      icon: <HeadsetMic fontSize="large" />,
      title: "Exceptional Service",
      description:
        "Our team is professional, friendly, and always ready to assist.",
    },
    {
      icon: <Inventory fontSize="large" />,
      title: "Quality & Variety",
      description:
        "We stock a wide range of trusted brands and top-grade materials.",
    },
    {
      icon: <Build fontSize="large" />,
      title: "Expert Advice",
      description:
        "Need help with your project? Our knowledgeable staff can help.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <div className="about-header">
          <h2 className="about-title">WHY CHOOSE US?</h2>
          <div className="title-divider"></div>
          <p className="about-description">
            We're committed to providing exceptional service and quality
            products that help bring your construction projects to life.
          </p>
        </div>

        <Row className="g-4">
          {whyChooseUs.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card className="feature-card h-100">
                <Card.Body className="feature-card-body">
                  <div className="icon-wrapper">
                    {item.icon}
                  </div>
                  <h5 className="feature-title">
                    <CheckCircle className="check-icon" />
                    {item.title}
                  </h5>
                  <p className="feature-description">
                    {item.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}