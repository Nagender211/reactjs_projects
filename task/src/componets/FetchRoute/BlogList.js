import React from 'react'

const BlogList = (props) => {
  const {item}=props;
  const {id,title,image_url,avatar_url,author,topic}=item
  return (
    <div>
      <h1>{title}</h1>
      <img src={image_url} alt={title} />
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <img src={avatar_url} alt={author} style={{width: '100px', borderRadius: '50%'}} />
      
    </div>
  )
}

export default BlogList

