import React from 'react'

const Home = ({BlogListq}) => {
    // const {BlogListq}=props;
    const {title,content,author,date}=BlogListq;
  return (
    <div>
        {
            BlogListq.map(eachItem=>(
                <dib>
                    <h2>{eachItem.title}</h2>
                    <p>{eachItem.content}</p>
                    <p>Author: {eachItem.author}</p>
                    <p>Date: {eachItem.date}</p>
                    <hr />     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal line after each blog post to separate them.     // Add a horizontal
                </dib>
            ))
        }
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
    </div>
  )
}

export default Home
