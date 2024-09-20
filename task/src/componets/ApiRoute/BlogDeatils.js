import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class BlogDetails extends Component {
  state = {
    blogDetails: {}, 
  };

  componentDidMount() {
    this.getIndividual();
  }

  getIndividual = async () => {
    const { id } = this.props; 
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
    const data = await response.json();
    console.log(data);
    this.setState({ blogDetails: data }); 
  };

  render() {
    const { blogDetails } = this.state;
    const {author,avatar_url,content,image_url,title,topic}=blogDetails
    return (
      <div>
        <h1>{title}</h1>
        <img src={image_url} alt="blog-image" />
        <p>{content}</p>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <img src={avatar_url} alt={avatar_url} />
       
        
      </div>
    );
  }
}

// To use with React Router, wrap it with a higher-order component to get the params
const BlogDetailsWithParams = (props) => {
  const { id } = useParams();
  return <BlogDetails {...props} id={id} />;
};

export default BlogDetailsWithParams;
