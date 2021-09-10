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
        <Row className="mt-3">
          <Col lg={12}>
            <h3 className="moving">You can try our Premium Feature by clicking on <span className="aboutHeader">Premium</span> button</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="centerProperty">
            <img src={about} alt="about" className="aboutImage" />
          </Col>
          <Col md={6} className="centerProperty">
            <div>
            <h1 style={{marginTop:"3rem"}}>
              <b>
                <span className="aboutTitle">O</span>
              </b>
              dd
              <b>
                <span className="aboutTitle">S</span>
              </b>
              tock
            </h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>

            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
