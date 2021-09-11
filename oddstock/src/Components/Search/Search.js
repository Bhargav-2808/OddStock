import './Search.css';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
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
                        <div className="search-form centerComponent mt-5">
                            <input type="search"  className="search-input"/>
                            <SearchRoundedIcon className="search-icon"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Search;