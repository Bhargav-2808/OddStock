import './News.css';
import { React,useState,useEffect } from 'react';
import NewsCard from './NewsCard.js';

const News = () => {

    const [newsHeadline, setNewsHeadline] = useState([])

    const api=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a645d6723b8a4f42bd0ff76a67460c9d`

    let  fetchNews=async()=>{
        let apiData= await fetch(api);
        let parsedData= await apiData.json();
        setNewsHeadline(parsedData['articles']);
        console.log(newsHeadline);
    }

    useEffect(()=>{
            fetchNews();
    });
    

    return (
        <>
        {
            newsHeadline.map((element)=>{
                return <div key={element.url}>
                            <NewsCard title={element.title} urlToNews={element.url}/>
                       </div>
            })
        }
            
        </>
    )
}

export default News
