import React from 'react';
import './BlogItems.css'; // Import the CSS file

const BlogItems = (props) => {
  const { items } = props;
  const { title, image_url, avatar_url, author, topic } = items;

  return (
    <div className="blog-item">
      <h2 className="blog-title">{title}</h2>
      <img className="blog-image" src={image_url} alt={title} />
      <div className="blog-info">
        <p>Author: <img className="avatar" src={avatar_url} alt={author} /> {author}</p>
        <p>Topic: {topic}</p>
      </div>
    </div>
  );
};

export default BlogItems;