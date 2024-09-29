import React from 'react'
import {Link} from 'react-router-dom'

const BlogLlist = (props) => {
    const {item}=props;
    const {author,avatarUrl,imageUrl,title,topic,id}=item
  return (
    <div>
      <Link to={`blogs/${id}`}>
      <img src={avatarUrl} alt={author} />
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <img src={imageUrl} alt={title} />
      </Link>
       
        {/* <p>Read more: <a href={`https://www.example.com/blog/${title.toLowerCase().replace(' ', '-')}`}>Link</a></p> */}
  
      
    </div>
  )
}

export default BlogLlist
