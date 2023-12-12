import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from '../ListDiv/List';


export default function NewsPage() {
  const id = useParams();
  const [news, setNews] = useState();
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
      const apiKey = '5923c983e11d4d01a29b697669f485a4';
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch(error => {
          console.error('Error fetching news:', error);
      });
  }, []);


    if(Loading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
       <div>
            <List/>
            <div>
                <h1>{news[id.Id].title}</h1>
                <img src={news[id.Id].urlToImage} alt={news[id.Id].title} />
                <p>{news[id.Id].description}</p>
                <a href={news[id.Id].url}>Read more</a>
            </div>
       </div>
   );

}
