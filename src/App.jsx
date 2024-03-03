import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layouts from './components/layouts/Layouts';
import Index from './pages/Index';
import View from './pages/View';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from './BlogCard';

const graphcms = new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cls73m10h0txm01uqonl6385m/master");

const QUERY = gql`
  {
    posts{
      id,
      title,
      datePublished,
      slug,
      content{
        html
      },
      author{
        name,
        avatar{
          url
        },
      },
      coverPhoto{
          url
        }
    }
  }
`;

function App() {
    const [newsLoading, setNewsLoading] = useState(true);
    const [postsLoading, setPostsLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [posts, setPosts] = useState([]);
    const mounted = useRef(true); // Ref to track if the component is still mounted

    useEffect(() => {
      async function fetchPosts() {
        const { posts } = await graphcms.request(QUERY);
        console.log(posts)
        if (mounted.current) {
          setPosts(posts);
          console.log("Fetched Posts Data:", posts); // Log the fetched posts data
          setPostsLoading(false);
        }

      }
    
      fetchPosts().catch(console.error);
    
      fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5923c983e11d4d01a29b697669f485a4`)
        .then((response) => response.json())
        .then((data) => {
          if (mounted.current) {
            console.log('Data: ', data)
            setNews(data.articles);
            console.log("Fetched News Data:", data.articles); // Log the fetched news data
            setNewsLoading(false);
          }
        })
        .catch(error => {
          console.error("Failed to fetch news:", error);
          if (mounted.current) {
            setNews([]);
            setNewsLoading(false);
          }
        });
    

    }, []);
    
    return(
      <Layouts>
      <Router>
        <Routes>
          <Route path="/" element={<Index news={news} posts={posts} loading={newsLoading || postsLoading} />} />
          <Route path="/:slug" element={<View news={news} posts={posts} loading={newsLoading || postsLoading} />} />
        </Routes>
        {!newsLoading && !postsLoading && (
          <main>
            {posts.map((post) => (
              <BlogCard
                title={post.title}
                author={post.author.name}
                coverPhoto={post.coverPhoto}
                key={post.id}
                datePublished={post.datePublished}
                slug={post.slug}
              />
            ))}
          </main>
        )}
      </Router>
    </Layouts>
  );
}

export default App;
