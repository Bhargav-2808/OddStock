import "./Search.css";

//import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
//import react from 'react'

import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Search = () => {
  const [Search, setSearch] = useState(["SBIN"]);
  const [Stock, setStock] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&
      symbol=BSE:${Search}&
      outputsize=full&
      apikey=demo=B2CB6L3XPS4OUJYK`;
      const result = await fetch(url);

      const response = await result.json();
      console.log(response);
       setStock(response);
    };
    fetchApi();
  }, [Search]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="centerComponent searchTitle">Search Stock Here..</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="search-form centerComponent mt-5">
              <input
                type="search"
                className="search-input"
                placeholder="Type a company name"
                autoComplete="off"
                autoFocus
                value={Search}
                onChange={(event) => {
                  setSearch(event.targate.value);
                }}
              />
              {/* <Button 
                style={{ width: "5rem" }} 
                
                >
                Search
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>

      {!Stock ? (
        <p> No Data found</p>
      ) : (
        <>
          <div className="">
           
              
            
     
          </div>
        </>
      )}
    </>
  );
};

export default Search;
