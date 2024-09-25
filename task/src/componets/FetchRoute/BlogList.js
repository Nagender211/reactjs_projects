import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = (props) => {
  const {item}=props;
  const {id,title,imageUrl,avatarUrl,author,topic}=item
  return (
    <div>
      <Link to={`blogs/${id}`}>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <img src={avatarUrl} alt={author} style={{width: '100px', borderRadius: '50%'}} />
      </Link>
      
    </div>
  )
}

export default BlogList

