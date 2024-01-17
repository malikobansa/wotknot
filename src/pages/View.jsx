import React from 'react';
import { useParams } from "react-router-dom";

function View({ news }) {
  const id = useParams();

  return (
    <div className='pt-20'>
      {news && (
        <>
          <span>{news[id.slug]?.title}</span>
          <img src={news[id.slug]?.urlToImage}/>
        </>
      )}
    </div>
  );
}

export default View;
