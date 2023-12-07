import React, { useEffect, useState } from 'react'
import './FetchAPI.css'

export default function FetchAPI() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = '5923c983e11d4d01a29b697669f485a4';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setNews(data.articles);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <div className='loading'>Loading...</div>;
    if (error) return <div className='error'>Error fetching news: {error.message}</div>;

    return (
        <div className='fetch-container'>
            {news.length > 0 && (
                <div className='fetch'>
                    <a href='/news'>
                        <img src={news[0].urlToImage} className='img' alt={news[0].title}/>
                    </a>
                </div>
            )}
            {news.length > 0 && (
                <div className='fetch text'>
                    <a href='/news' className='news'>
                        <div className='text name' style={{marginTop:"130px"}}>
                            <h1>{news[0]?.source.name}</h1>
                            <h2>{news[0]?.title}</h2>
                            <p>{news[0]?.description}</p>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}
