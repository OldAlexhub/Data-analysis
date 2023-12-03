import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Data Sources</h5>
            <ul>
              <li>
                <a
                  href="https://data.worldbank.org/country/EG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  World Bank Data - Egypt
                </a>
              </li>
              <li>
                <a
                  href="https://www.usinflationcalculator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  US Inflation Calculator
                </a>
              </li>
              <li>
                <a
                  href="https://www.macrotrends.net/countries/EGY/egypt/external-debt-stock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Macrotrends - Egypt External Debt Stock
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>About</h5>
            <p>
              This dashboard presents various economic and societal metrics,
              with data sourced from reputable global databases.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            © {new Date().getFullYear()} Old Alex Hub, LLC. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
