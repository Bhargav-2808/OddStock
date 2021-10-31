import "./Search.css";

//import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
//import react from 'react'

import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Search = () => {
  const [Search, setSearch] = useState(["SBIN"]);
  const [Stock, setStock] = useState([]);

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=BSE:${Search}&outputsize=&apikey=demo=B2CB6L3XPS4OUJYK`;
    //const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a645d6723b8a4f42bd0ff76a67460c9d`;
  let fetchApi = async () => { 
    let result = await fetch(url);
    let response = await result.json();
    setStock(response[ 'Time Series (Daily)' ]);
    console.log(response["Time Series (Daily)"]);
    
  };
   useEffect(() => {
    
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
               <Button 
                style={{ width: "5rem" }} 
                
                >
                Search
              </Button> 
            </div>
          </Col>
        </Row>
      </Container>

      {!Stock ? (
        <p> No Data found</p>
      ) : (
        <>
         <Container>
           <Row>
             <Col>
              <div className="">
                {
                  
                }

              </div>
             
             </Col>
           </Row>
         </Container>
        </>
      )}
    </>
  );
};

export default Search;
