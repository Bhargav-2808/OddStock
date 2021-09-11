import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import react from 'react'

import { Container, Row, Col } from 'react-bootstrap';

const Search = () => {
    return (
        <>
            <Container className="mt-5">
                <Row >
                    <Col >
                        <h1 className="centerComponent searchTitle">Search the Stock Here</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form action="">
                            <input type="search"/>
                            <SearchIcon/>
                            <a id="clear-btn">Clear</a>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Search;