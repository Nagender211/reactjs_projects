import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class BlogListDeatils extends Component {
  state = {
    blogDetails: {}, 
  };

  componentDidMount() {
    this.getIndividual();
  }

  getIndividual = async () => {
    const {id}=this.props;
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
    const data=await response.json();
    const update={
      author: data.author_name,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({ blogDetails: update });
  };


  render() {
    const { blogDetails } = this.state;
    const {author,avatarUrl,content,imageUrl,title,topic}=blogDetails
    return (
      <div>
        <h1>{title}</h1>
        <img src={imageUrl} alt="blog-image" />
        <p>{content}</p>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <img src={avatarUrl} alt={avatarUrl} />
       
        
      </div>
    );
  }
}

// To use with React Router, wrap it with a higher-order component to get the params
const BlogDetailsWithParams = (props) => {
  const { id } = useParams();
  return <BlogListDeatils {...props} id={id} />;
};

export default BlogDetailsWithParams;

// export default BlogListDeatils
