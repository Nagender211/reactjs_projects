import React, { Component } from 'react'
import DashBoardList from './DashBoardList';



class DashBoardItems extends Component{
    state = {
        iplData: {
            teams: [], 
        },
    };

    componentDidMount(){
        this.getIplData();
    }
    getIplData=async()=>{
        const response=await fetch('https://apis.ccbp.in/ipl');
        const data=await response.json();
        console.log('API Data:', data);
        const updateData={
           
                teams: data.teams.map(item=>({
                    name: item.name,
                    id: item.id,
                    teamImageUrl: item.team_image_url
                }))
            
        }
        this.setState({iplData: updateData});
    }
    render(){
        const {iplData}=this.state;
        return(
            <div>
                {iplData.teams.map((item)=>(
                    <DashBoardList item={item} key={item.id} />
                ))}

            </div>
        )
    }
}

export default DashBoardItems
