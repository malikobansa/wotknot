import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from './components/layouts/Layouts'
import Index from './pages/Index'
import View from './pages/View'

function App() {
    const [news, setNews] = useState(null)
    const API_KEY = "5923c983e11d4d01a29b697669f485a4";

    useEffect(() => {
      fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY)
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch(setNews(null));
    }, [])
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Index news={news} />,
      },
      {
        path: "/:slug",
        element: <View news={news} />,
      },
    ]);

  return (
    <Layouts>
      <RouterProvider router={router} />
    </Layouts>
  );
}

export default App