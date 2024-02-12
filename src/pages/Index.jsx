import Landing from "../components/Landing";
import MoreCard from "../components/MoreCard";
import NewsDisplay from "../components/NewsDisplay";
import SideBar from "../components/SideBar";

function Index({ news, posts }) {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto py-9 px-5">
        {news && (
          <div className="my-10 grid gap-9">
            <Landing news={news} posts={posts} />
            <div className="grid gap-5">
              <div className="grid grid-cols-3 gap-6">
                {/* Adjust width and height of NewsDisplay */}
                <NewsDisplay news={news} posts={posts} width="100%" height="100%" />

                {/* Adjust width and height of SideBar */}
                <SideBar news={news} posts={posts} width="100%" height="100%" />
              </div>
            </div>
            <div>
              <MoreCard news={news} posts={posts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
