import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import IplDashBoard from './IplDashBoard';
class DashBoardDatials extends Component{
    state={
        
            latest_match_details: {},
            
        
       
            recent_matches: []
    
    }
    componentDidMount(){
        this.getRecentMatchData();
    }
    getRecentMatchData = async () => {
        const { id } = this.props; 
        const response=await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data=await response.json();
        console.log(data)
        const updateDataRecent=data.recent_matches.map(item=>({
            id: item.id,
                competingIeam: item.competing_team,
                competingTeamLogo: item.competing_team_logo,
                date: item.date,
                firstInnings: item.first_innings,
                manOfTheMatch: item.man_of_the_match,
                matchStatus: item.match_status,
                result: item.result,
                secondInnings: item.second_innings,
                umpires: item.umpires,
                venue: item.venue
        }))
        const updateDataLatestMatch={
            
                competingTeam: data.latest_match_details.competing_team,
                competingTeamLogo: data.latest_match_details.competing_team_logo,
                date: data.latest_match_details.date,
                firstInnings: data.latest_match_details.first_innings,
                manOfTheMatch: data.latest_match_details.man_of_the_match,
                matchStatus: data.latest_match_details.match_status,
                result: data.latest_match_details.result,
                secondInnings: data.latest_match_details.second_innings,
                umpires: data.latest_match_details.umpires,
                venue: data.latest_match_details.venue,
                id: data.latest_match_details.id
        

        }
        this.setState({
            latest_match_details: updateDataLatestMatch,
            recent_matches: updateDataRecent,
        });


    }



    render() {
        const { latest_match_details, recent_matches } = this.state;
        const {competingTeam,competingTeamLogo,date,result,id,venue,umpires,manOfTheMatch,firstInnings,secondInnings, matchStatus}=latest_match_details
      return (
        <div>
            <h1>{competingTeam}</h1>
            <img src={competingTeamLogo} alt="Team Logo" />
            <h2>Latest Match Details</h2>
            <p>{date}</p>
            <p>{result}</p>
            <p>{id}</p>
            <p>{venue}</p>
            <p>{umpires}</p>
            <p>{manOfTheMatch}</p>
            <p>{firstInnings}</p>
            <p>{secondInnings}</p>
            <p>{matchStatus}</p>
            <h2>Recent Matches</h2>
            <ul>
                {
                    recent_matches.map(match=>(
                        <li key={match.id}>
                            <h3>{match.competingIeam}</h3>
                            <img src={match.competingTeamLogo} alt="Team Logo" />
                            <p>{match.date}</p>
                            <p>{match.result}</p>
                            <p>{match.id}</p>
                            <p>{match.venue}</p>
                            <p>{match.umpires}</p>
                            <p>{match.manOfTheMatch}</p>
                            <p>{match.firstInnings}</p>
                            <p>{match.secondInnings}</p>
                            <p>{match.matchStatus}</p>

                        </li>
                    ))
                }
            </ul>
          
        </div>
      )
    }
}
const BlogDetailsWithParams = (props) => {
  const { id } = useParams();
  return <DashBoardDatials {...props} id={id} />;
};

export default BlogDetailsWithParams;
