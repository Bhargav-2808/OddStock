import './Footer.css';

import React from 'react';
import logo from '../../images/logo_transparent.png';
import { Row,Col,Image,Container } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div id="footerSection" className="pt-5 pb-3">
            <Container >
                <Row>
                    <Col md={6}>
                        <Image src={logo} className="m-0"/>
                        <h6 className="mt-3" style={{color:"#84a9d2",fontWeight:"400",fontSize:"1rem",lineHeight:"1.5"}}>The time one talks about stock market, another word also clicks and 
                        that is risk. OddStock has been initiated with an aim of providing 
                        the basic share market related information to the user.</h6>
                    </Col>
                    <Col md={3}>
                        <h4>OddStocks</h4>
                        <h6>Home</h6>
                        <h6>Search Stock</h6>
                        <h6>News</h6>
                    </Col>
                    <Col md={3}>
                        <h4>Help</h4>
                        <h6>About</h6>
                        <h6>Project Link</h6>
                        <h6><GitHubIcon /></h6>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>&copy; 2021 All right's reserved.</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
