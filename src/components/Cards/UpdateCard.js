import React, { useState, useEffect } from 'react';
import './UpdateCard.css';
import MoreCard from './MoreCard';
import { useParams } from 'react-router-dom';

export default function UpdateCard() {
   const [news, setNews] = useState([]);
   const { id } = useParams();

   useEffect(() => {
       const apiKey = '5923c983e11d4d01a29b697669f485a4';
       const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
 
       fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
         setNews(data.articles);
       })
       .catch(error => {
           console.error('Error fetching news:', error);
       });
   }, []);

   return (
       <div className="update-container">
           <div className='update'>
               <h1 style={{textAlign:"center",marginLeft:"150px"}}>LATEST</h1>
           </div>

           <div className='update'>
               <a href='/news/0' style={{textDecoration:'none', color:"black"}}>
               {news.slice(11, 21).map((article, index) => (
                  <div key={index} className='updates'>
                      <img src={article[id.Id].urlToImage} className='images' alt={article[id.Id].title} />
                      <p className='news-titles'>{article[id.Id].title}</p>
                  </div>
               ))}
               </a>
           </div>
           <MoreCard/>
       </div>
   );
}
