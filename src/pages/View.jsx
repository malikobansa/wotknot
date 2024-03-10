import React from 'react';
import { useParams } from "react-router-dom";
import SideBar from '../components/SideBar';

function View({ news, posts}) {
  const id = useParams();

  return (
    <div className='grid lg:grid-cols-3 gap-6 pt-[100px] pl-[100px] pb-[100px]'>
      <div className="grid  w-[200%] gap-5">
      {news && (
        <>
          <span className='text-4xl font-extrabold w-100px'>{news[id.slug]?.title}</span>
          <p className='text-2xl font-normal mt-[20px]'>{news[id.slug]?.description}</p>
          <p>{news[id.slug]?.source.name}</p>
          <p className='font-bold'>BY {news[id.slug]?.author}</p>
          <p>{news[id.slug]?.publishedAt}</p>
          <img src={news[id.slug]?.urlToImage} className='w-[600px] h-[300px]'/>
          <p className='pt-[50px]'>{news[id.slug]?.content}</p>
          <a href={news[id.slug]?.url} target="_blank" rel="noopener noreferrer">
            <button className='bg-black text-white mt-[20px] p-[20px] hover:text-black hover:bg-white'>
              READ MORE
            </button>
            </a>
        </>
      )}
      </div>
      <div>
        { news && (
        <SideBar news={news} posts={posts}/>
        )}
      </div>
    </div>
  );
}

export default View;
