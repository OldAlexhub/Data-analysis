import React, { useRef } from "react";
import html2canvas from "html2canvas";
import Poverty from "../controllers/Poverty";
import NumberPoor from "../controllers/NumberPoor";
import GDP from "../controllers/GDP";
import RealGDP from "../controllers/RealGDP";
import Dollar from "../controllers/Dollar";
import DebtvsGDP from "../controllers/DebtvsGDP";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Charts.css";

const Charts = () => {
  const povertyRef = useRef(null);
  const numberPoorRef = useRef(null);
  const gdpRef = useRef(null);
  const realGdpRef = useRef(null);
  const dollarRef = useRef(null);
  const debtVsGdpRef = useRef(null);

  const saveAsImage = (ref, imageName) => {
    if (ref.current) {
      html2canvas(ref.current).then((canvas) => {
        const image = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = image;
        link.download = `${imageName}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  return (
    <Container fluid>
      <Row className="my-4">
        <Col>
          <h1 className="text-center">Society</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12} className="mb-3">
          <Card ref={povertyRef}>
            <Card.Body>
              <Card.Title>Poverty Rates</Card.Title>
              <Poverty />
            </Card.Body>
          </Card>
          <Button onClick={() => saveAsImage(povertyRef, "PovertyChart")}>
            Save as JPG
          </Button>
        </Col>
        <Col md={6} xs={12} className="mb-3">
          <Card ref={numberPoorRef}>
            <Card.Body>
              <Card.Title>Number of People Below Poverty Line</Card.Title>
              <NumberPoor />
            </Card.Body>
          </Card>
          <Button onClick={() => saveAsImage(numberPoorRef, "NumberPoorChart")}>
            Save as JPG
          </Button>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h1 className="text-center">Economy</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12} className="mb-3">
          <Card ref={gdpRef}>
            <Card.Body>
              <Card.Title>Gross Domestic Product (GDP)</Card.Title>
              <GDP />
            </Card.Body>
          </Card>
          <Button onClick={() => saveAsImage(gdpRef, "GDPChart")}>
            Save as JPG
          </Button>
        </Col>
        <Col md={6} xs={12} className="mb-3">
          <Card ref={dollarRef}>
            <Card.Body>
              <Card.Title>Currency Value (Dollar)</Card.Title>
              <Dollar />
            </Card.Body>
          </Card>
          <Button onClick={() => saveAsImage(dollarRef, "DollarChart")}>
            Save as JPG
          </Button>
        </Col>
        <Col md={6} xs={12} className="mb-3">
          <Card ref={realGdpRef}>
            <Card.Body>
              <Card.Title>Real GDP</Card.Title>
              <RealGDP />
            </Card.Body>
          </Card>
          <Button onClick={() => saveAsImage(realGdpRef, "RealGDPChart")}>
            Save as JPG
          </Button>
        </Col>
        <Col md={6} xs={12} className="mb-3">
          <Card ref={debtVsGdpRef}>
            <Card.Body>
              <Card.Title>Debt vs GDP</Card.Title>
              <DebtvsGDP />
            </Card.Body>
          </Card>
          <Button onClick={() => saveAsImage(debtVsGdpRef, "DebtVsGDPChart")}>
            Save as JPG
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Charts;
