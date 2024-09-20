import React, { Component } from 'react';
import BlogItems from './BlogItems';
import './BlogList.css'; // Add the CSS file

class BlogList extends Component {
    state = {
        blogList: []
    }

    componentDidMount() {
        this.getApiCall();
    }

    getApiCall = async () => {
        const response = await fetch('https://apis.ccbp.in/blogs');
        const data = await response.json();
        this.setState({ blogList: data });
    }

    render() {
        const { blogList } = this.state;
        return (
            <div className="blog-list">
                {blogList.map((items) => (
                    <BlogItems items={items} key={items.id} />
                ))}
            </div>
        );
    }
}

export default BlogList;
