import React from 'react';
import { Card,Button } from 'react-bootstrap'; 

const NewsCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <a href={props.urlToNews} target="_blank">
                        <Button variant="primary">Read More</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NewsCard
