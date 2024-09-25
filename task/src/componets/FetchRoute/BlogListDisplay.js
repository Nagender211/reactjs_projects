import React, { Component } from 'react'
import BlogList from './BlogList'
import { TailSpin } from 'react-loader-spinner'; 

class BlogListDisplay extends Component{
  state={
    blogList: [],
    isLoading: true,
  }
  componentDidMount(){
    this.getFetchApi();
  }
  getFetchApi= async ()=>{
    const response=await fetch('https://apis.ccbp.in/blogs');
    const data=await response.json();
    const updateDate=data.map(item=>({
      title: item.title,
      imageUrl: item.image_url,
      author: item.author,
      avatarUrl: item.avatar_url,
      topic: item.topic,
      id: item.id,
    }));
    this.setState({blogList: updateDate, isLoading: false});

  }
    render() {
      const { blogList } = this.state;
      const { isLoading } = this.state;
      return (
        <div>
          
         {isLoading ? (<TailSpin color="#00BFFF" height={50} width={50} />):
         (blogList.map(item=>(
          <BlogList item={item} id={item.id} />
         )))}
        </div>
      )
    }
}

export default BlogListDisplay
