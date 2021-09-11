import './Search.css';
import react from 'react'

import { Container, Row, Col } from 'react-bootstrap';

const  Search =()=>{
    return(
        <>
            <Container className="mt-5">
                <Row >
                    <Col >
                        <h1 className="centerComponent searchTitle">Search the Stock Here</h1>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="search">
                            <input type="Search"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Search;