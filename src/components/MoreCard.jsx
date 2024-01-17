import React, { useState } from 'react';

export default function MoreCard({ news }) {
  const [visibleNewsCount, setVisibleNewsCount] = useState(5);

  const showMoreNews = () => {
    setVisibleNewsCount(prevCount => prevCount + 5); // Increase the count to show more news
  };

  return (
    <div className='grid md:grid-cols-3 gap-5 '>
      {news.slice(0, visibleNewsCount).map((nw, index) => (
        <div key={index} className='bg-white'>
          <a href={'/' + index}>
          <img src={nw.urlToImage} alt={nw.title} />
          <h3>{nw.title}</h3>
          {/* ... other news details */}
          </a>
          {/* Display news item details here */}
        </div>
      ))}

      {visibleNewsCount < news.length && (
        <button onClick={showMoreNews} className="w-full bg-black text-white p-2 mt-4">
          More
        </button>
      )}
    </div>
  );
}
