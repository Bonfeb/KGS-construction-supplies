import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";

// Custom TikTok icon component using MUI-like styling
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: "24px", height: "24px" }}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        {/* Two Column Layout - Always 2 columns on all screens */}
        <Row className="footer-main">
          {/* Left Column - Company Info */}
          <Col xs={6} className="footer-left">
            <div className="footer-logo-section">
              <img src="/KGS_Logo.ico" alt="KGS Logo" className="footer-logo" />
              <h6 className="footer-company-name">KGS KACHRA</h6>
            </div>
            <p className="footer-description">
              Your trusted partner for all construction materials and supplies
              in Malindi. Quality products, competitive prices, lightning-fast
              delivery.
            </p>
          </Col>

          {/* Right Column - Contact Info */}
          <Col xs={6} className="footer-right">
            <h6 className="footer-heading">Contact Info</h6>
            <div className="contact-info">
              <div className="contact-item">
                <LocationOn
                  style={{
                    fontSize: 18,
                    color: "#fbbf24",
                    marginTop: "0.2rem",
                    flexShrink: 0,
                  }}
                />
                <span className="contact-text">
                  Malindi, Kwachocha
                  <br />
                  Opp. Kurawa Medical Clinic
                </span>
              </div>
              <div className="contact-item">
                <Phone
                  style={{
                    fontSize: 18,
                    color: "#fbbf24",
                    marginTop: "0.2rem",
                    flexShrink: 0,
                  }}
                />
                <span className="contact-text">+254 745 188 133</span>
              </div>
              <div className="contact-item">
                <Email
                  style={{
                    fontSize: 18,
                    color: "#fbbf24",
                    marginTop: "0.2rem",
                    flexShrink: 0,
                  }}
                />
                <span className="contact-text contact-email">
                  infokachrageneralsuppliers@gmail.com
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Social Media Row - Full Width */}
        <Row>
          <Col xs={12} className="footer-social-section">
            <div className="social-icons">
              {/* Facebook */}
              <a
                href="#"
                className="social-icon facebook-icon"
                aria-label="Facebook"
              >
                <Facebook style={{ fontSize: 28, color: "#1877F2" }} />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="social-icon tiktok-icon"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="social-icon instagram-icon"
                aria-label="Instagram"
              >
                <Instagram style={{ fontSize: 28, color: "#E4405F" }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
