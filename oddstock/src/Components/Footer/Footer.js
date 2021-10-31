import './Footer.css';

import React from 'react';
import logo from '../../images/logo_transparent.png';
import { Row,Col,Image,Container } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div id="footerSection" className="py-3">
            <Container >
                <Row>
                    <Col md={6}>
                        <Image src={logo} className="m-0"/>
                        <h6 className="my-1" style={{color:"#84a9d2",fontWeight:"400",fontSize:"1rem",lineHeight:"1.5"}}>The time one talks about stock market, another word also clicks and 
                        that is risk. OddStock has been initiated with an aim of providing 
                        the basic share market related information to the user.</h6>
                    </Col>
                    <Col md={3}>
                        <h4>OddStocks</h4>
                        <ul>
                            <li>Home</li>
                            <li>Search Stock</li>
                            <li>News</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4>Help</h4>
                        <ul>
                            <li>About</li>
                            <li>Support</li>
                            <li>Project Link</li>
                            <li><GitHubIcon /></li>
                        </ul>
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
