import React, { Component } from 'react'
import AllItems from './AllItems';


const sortRepo=[
    {
        id: 'All',
        text: 'All'
    },
    {
        id: 'JavaScript',
        text: 'JavaScript'
    },
    {
        id: 'Ruby',
        text: 'Ruby'
    },
    {
        id: 'Java',
        text: 'Java'
    },
    {
        id: 'Css',
        text: 'Css'
    }
]

class All extends Component{
    state={
        // repositories:[],
        activeRepo: sortRepo[0].id
    }
    componentDidMount(){
        this.getApiData();
    }
    getApiData=async()=>{
        const {activeRepo}=this.state
        const response=await fetch(`https://apis.ccbp.in/popular-repos?language=${activeRepo}`);
        const data=await response.json();
        console.log(data)
        const update=data.popular_repos.map(item=>({
            avatarUrl: item.avatar_url,
            forksCount: item.forks_count,
            id: item.id,
            issuesCount: item.issues_count,
            name: item.name,
            starsCount: item.stars_count
        }))
        this.setState({repositories: update})

    }
    updateRepo=(activeRepo)=>{
        this.setState({activeRepo},this.getApiData)
    }
    render() {
        const { repositories } = this.state;
        const { activeRepo } = this.state;
        
      return (
        <div>
            {
                repositories.map(item=>(
                    <AllItems item={item} activeRepo={activeRepo} sortRepo={sortRepo} key={item.id} updateRepo={this.updateRepo}/>

                ))
            }
          
        </div>
      )
    }
}

export default All
