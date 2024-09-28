import React from 'react'

const BlogLlist = (props) => {
    const {item}=props;
    const {author,avatarUrl,imageUrl,title,topic}=item
  return (
    <div>
        <img src={avatarUrl} alt={author} />
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <img src={imageUrl} alt={title} />
        {/* <p>Read more: <a href={`https://www.example.com/blog/${title.toLowerCase().replace(' ', '-')}`}>Link</a></p> */}
  
      
    </div>
  )
}

export default BlogLlist
