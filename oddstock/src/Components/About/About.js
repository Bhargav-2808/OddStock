import "./About.css";
import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "../../images/Illustration1.svg";
// #0179ff  blue
// #782df3 purple
// #e1efff lightblue

const About = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6} className="centerProperty">
            <img src={about} alt="about" className="aboutImage" />
          </Col>
          <Col md={6} className="centerProperty">
            <h1 style={{marginTop:"7rem"}}>
              <b>
                <span className="aboutTitle">O</span>
              </b>
              dd
              <b>
                <span className="aboutTitle">S</span>
              </b>
              tock
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
