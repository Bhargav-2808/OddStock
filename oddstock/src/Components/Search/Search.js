import "./Search.css";
import buy from "../../images/buy.png";
import sell from "../../images/sell.png";

//import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
//import react from 'react'

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Spellcheck } from "@material-ui/icons";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const Search = () => {
  const [Search, setSearch] = useState(["SBIN"]);
  const [Stock, setStock] = useState([]);
  const [RSI,setRSI] = useState([]);
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=BSE:${Search}&outputsize=compact&apikey=demo=B2CB6L3XPS4OUJYK`;
  //const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a645d6723b8a4f42bd0ff76a67460c9d`;
  
  const urlRSI =`https://www.alphavantage.co/query?function=RSI&symbol=BSE:${Search}&interval=daily&time_period=14&series_type=open&apikey=B2CB6L3XPS4OUJYK`

  let fetchApi = async () => {
    let result = await fetch(url);
    let response = await result.json();
    setStock(response["Time Series (Daily)"]);

    let Rresult = await fetch(urlRSI);
    let Rresponse = await Rresult.json();
    setRSI(Rresponse);
    // console.log(response["Time Series (Daily)"]);
    //console.log(Stock);
  };
  useEffect(() => {
    fetchApi();
    // fetchApi();
  }, [Search]);

  const valueRSI =40;

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
                <Container className="my-3 searchContainer mt-5">
                  <Card className="card-search">
                    <Card.Body>
                      <h4
                        className="centerComponent"
                        style={{ color: "#0179ff" }}
                      >
                        SBIN
                      </h4>
                      <Row>
                        <Col>
                          <h3>high : </h3>
                          <h3>Low : </h3>
                          <h3>Open : </h3>
                          <h3>Close : </h3>
                          <h3>RSI : </h3>
                        </Col>
                        <Col>
                          {valueRSI >= 50 ? (
                            <>
                              <Row>
                                <Col>
                                  <h6 className="searchDetails">
                                    Stock can be worth Buying for you. You can{" "}
                                    <span style={{ color: "#0179ff" }}>
                                      bet
                                    </span>{" "}
                                    on it.
                                  </h6>
                                </Col>
                                <Col>
                                  <img src={buy} className="searchImage"/>
                                </Col>
                              </Row>
                            </>
                          ) : (
                            <>
                              <Row>
                                <Col>
                                  <h6 className="searchDetails">
                                    Stock going downwards direction. You can
                                    look for another stock.{" "}
                                   
                                  </h6>
                                </Col>
                                <Col>
                                  <img src={sell} className="searchImage"/>
                                </Col>
                              </Row>
                            </>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Search;
