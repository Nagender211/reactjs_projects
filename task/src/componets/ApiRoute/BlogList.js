import React, { Component } from 'react';
import BlogItems from './BlogItems';
import './BlogList.css'; 
import { TailSpin } from 'react-loader-spinner'; 
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class BlogList extends Component {
    state = {
        blogList: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getApiCall();
    }

    getApiCall = async () => {
        const response = await fetch('https://apis.ccbp.in/blogs');
        const data = await response.json();
        this.setState({ blogList: data, isLoading: false }); 
    }

    render() {
        const { blogList, isLoading } = this.state;
        return (
            <div className="blog-list">
                {isLoading ? (
                    <TailSpin color="#00BFFF" height={50} width={50} />
                ) : (
                    blogList.map((items) => (
                        <BlogItems items={items} key={items.id} />
                    ))
                )}
            </div>
        );
    }
}

export default BlogList;
