import React, { Component } from 'react'
import BlogLlist from './BlogLlist';

class BlogListItem extends Component{
    state={
        blogList: [],
    }
    componentDidMount(){
        this.getApiBlog();
    }
    getApiBlog=async()=>{
        const respose= await fetch('https://apis.ccbp.in/blogs');
        const data=await respose.json();
        console.log(data);
        const updatedList=data.map(item=>({
            id: item.id,
            author: item.author,
            avatarUrl: item.avatar_url,
            imageUrl: item.image_url,
            title: item.title,
            topic: item.topic
        }))
        this.setState({blogList: updatedList})
    }
    render() {
        const { blogList } = this.state;
      return (
        <div>
            {blogList.map((item)=>(
                <BlogLlist item={item} id={item.id} />
            ))}
          
        </div>
      )
    }
}

export default BlogListItem
