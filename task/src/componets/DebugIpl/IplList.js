import React, { Component } from 'react'
import IplListItems from './IplListItems';

class IplList extends Component{
  state={
    iplList: {
      teams: []
    }
  }
  componentDidMount(){
    this.getApiDataIpl();
  }
  getApiDataIpl = async () => {
    const response= await fetch('https://apis.ccbp.in/ipl');
    const data= await response.json();
    const update={
      teams: data.teams.map((item)=>({
        id: item.id,
        name: item.name,
        teamImageUrl: item.team_image_url
      }))
    }
    this.setState({
      iplList: update
    })
  }
  render() {
    const {iplList}=this.state
    
    return (
      <div>
        {iplList.teams.map(item=>(
          <IplListItems item={item} key={item.id} />
        ))}
        
      </div>
    )
  }
}

export default IplList
