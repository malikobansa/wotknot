import './../components/css/index.css'

function NewsDisplay({news}) {
  return (
    <div className="grid lg:grid-cols-2 gap-5 w-[200%]">
      {news.map((nw, index) => (
        <a className="grid col-span-1" href={'/' + index} key={index}>
          <div className="bg-white">
            <img className="h-52 w-full object-cover" src={nw?.urlToImage} alt="" />
            <div className="grid gap-5 p-5">
            <p className="text-gray-800 text-2xl font-bold">{nw?.source.name}</p>
              <p className="text-gray-800 text-2xl font-bold">{nw?.title}</p>
              <p className="text-lg">{nw?.description}</p>
            </div>
          </div>
        </a>
      )).slice(10, 14)}
    </div>
  );
}

export default NewsDisplay