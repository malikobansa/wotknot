import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ title, author, coverPhoto, datePublished, slug }) {
  console.log('Cover: ', coverPhoto)
  return (
    <div>
      <Link to={`/${slug}`}>
        <h2>{title}</h2>
        <h2>{author.name}</h2>
        <time dateTime={datePublished}>{new Date(datePublished).toLocaleDateString()}</time>
      </Link>
    </div>
  );
}
