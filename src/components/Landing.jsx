import React from 'react'

function Landing({news}) {
  return (
    <div>
        <a className="grid col-span-1 my-10" href={'/0'}>
          <div className="grid lg:grid-cols-3 bg-white">
            <div className="grid lg:col-span-2 gap-5">
                <img
                className="h-96 w-full object-cover"
                src={news[0]?.urlToImage}
                alt=""
                />
            </div>
            <div className="grid gap-5 p-5">
            <p className="text-gray-800 text-2xl font-bold">{news[0]?.source.name}</p>
              <p className="text-gray-800 text-2xl font-bold">{news[0]?.title}</p>
              <p className="text-lg">{news[0]?.description}</p>
            </div>
          </div>
        </a>
    </div>
  );
}

export default Landing