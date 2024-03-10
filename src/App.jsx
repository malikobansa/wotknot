import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { posts } = await graphcms.request(QUERY);
        setPosts(posts);
        setPostsLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setPostsLoading(false);
      }
    }

    fetchPosts();

    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5923c983e11d4d01a29b697669f485a4`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setNewsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch news:", error);
        setNews([]);
        setNewsLoading(false);
      });

  }, []);

  return (
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
                author={post.author?.name}
                coverPhoto={post.coverPhoto?.url || "https://via.placeholder.com/150"}// Ensure you're accessing the url property correctly
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
