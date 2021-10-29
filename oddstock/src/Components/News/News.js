import './News.css';
import { React,useState,useEffect } from 'react';
import { Card,Button,Image,Row,Col } from 'react-bootstrap'; 

const News = () => {

    const [newsHeadline, setNewsHeadline] = useState([])

    const api=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a645d6723b8a4f42bd0ff76a67460c9d`

    let  fetchNews=async()=>    {
        let apiData= await fetch(api);
        let parsedData= await apiData.json();
        setNewsHeadline(parsedData['articles']);
       
    }

     useEffect(()=>{
          fetchNews();
     },[]);
    

    return (
        <div className="container">
            <Card>
                <Card.Body>
                    {
                        newsHeadline.map((element)=>{
                            return <div key={element.url} className="py-4" style={{width:'100%'}}>
                                        <Row className="newsImage" >
                                            <Col>
                                                <Card.Title>{element.title}</Card.Title>
                                                <a href={element.url} target="_blank">
                                                    <Button variant="primary" style={{width:"7rem"}}>Read More</Button>
                                                </a>
                                            </Col>
                                            <Col className="newsImage">
                                                <Image src={element.urlToImage
                                              ?element.urlToImage:"https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmV3c3x8fHx8fDE2MzAyMzE1MzI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"} rounded />
                                            </Col>
                                        </Row>  
                                    </div>
                        })
                    }
                </Card.Body>
            </Card>          
        </div>
    )
}

export default News
