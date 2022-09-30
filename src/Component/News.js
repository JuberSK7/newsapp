import React, {useState,  useEffect} from 'react';
import axios from 'axios';
import './News.css';


const News = () => {
  const [news, setNews] =  useState([]);

  ///////////// fetch Rest Newsapi using react axios

  useEffect(() => {
    const loadNews = async () => {
const responce = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=59443656f0e74d46b55070e02da79298");
setNews(responce.data.articles);
      
    };
    loadNews()
  }, []);

  //console.log('news', news);

  return (
    /////// renders the api elements in jsx

    <div className="news">
       <h1> Reputeted News India</h1>
      {
        news && news.map((item,index) => {
          return(
           
            <div key={index} className='news-box'>

              <h2 className='headline'>{item.title}</h2>
              <p className='description'>{item.description}</p>
              <img alt='image' src={item.urlToImage}/>
              <a className='direct-btn' href={item.url}>Read More</a>
            </div>
          )
        })
      }
  
    </div>
  );
}

export default News;
