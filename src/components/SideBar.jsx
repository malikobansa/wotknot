import { useState } from "react";


function SideBar({news}) {

  const [visibleNewsCount, setVisibleNewsCount] = useState(5);

  const showMoreNews = () => {
    setVisibleNewsCount(prevCount => prevCount + 5); // show 5 more news items
  };



  return (
    <div className="w-[300px] mx-[500px]">
      {news.map((nw, index) => (
          <a className="grid" href={'/' + index} key={index}>
            <div className="flex items-center bg-white gap-2 w-full">
              <div className="flex items-center w-full">
                <img
                  className="h-24 w-full object-cover"
                  src={nw.urlToImage}
                  alt=""
                />
              </div>
              <div className="flex items-center w-full p-5">
                <p className="text-gray-800 text-sm font-bold">
                  {nw.title.slice(0, 50)}...
                </p>
              </div>
            </div>
          </a>
        ))
        .slice(0, visibleNewsCount)}
        {visibleNewsCount < news.length && (
        <button onClick={showMoreNews} className="w-full bg-black text-white p-2 mt-4">
          More
        </button>
      )}
    </div>
  );
}

export default SideBar