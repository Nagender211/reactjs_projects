import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class IplDeatiles extends Component {
  state = {
    latest_match_details: {},
    recent_matches: []
  };

  componentDidMount() {
    this.getRecentMatchData();
  }

  getRecentMatchData = async () => {
    const { id } = this.props;
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
    const data = await response.json();
    console.log(data);
    
    const updateDataRecent = data.recent_matches.map(item => ({
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
    }));
    
    const updateDataLatestMatch = {
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
    };

    this.setState({
      latest_match_details: updateDataLatestMatch,
      recent_matches: updateDataRecent,
    });
  };

  render() {
    const { latest_match_details, recent_matches } = this.state;
    const {
      competingTeam, competingTeamLogo, date, result, id, venue,
      umpires, manOfTheMatch, firstInnings, secondInnings, matchStatus
    } = latest_match_details;

    return (
      <div className="DashBoardDetails">
        <h1 className="team-name">{competingTeam}</h1>
        <img src={competingTeamLogo} alt="Team Logo" className="team-logo" />
        
        <h2 className="section-heading">Latest Match Details</h2>
        <p className="detail">{date}</p>
        <p className="detail">{result}</p>
        <p className="detail">{id}</p>
        <p className="detail">{venue}</p>
        <p className="detail">{umpires}</p>
        <p className="detail">{manOfTheMatch}</p>
        <p className="detail">{firstInnings}</p>
        <p className="detail">{secondInnings}</p>
        <p className="detail">{matchStatus}</p>
        
        <h2 className="section-heading">Recent Matches</h2>
        <ul className="recent-matches-list">
          {recent_matches.map(match => (
            <li key={match.id} className="match-item">
              <h3 className="match-team-name">{match.competingIeam}</h3>
              <img src={match.competingTeamLogo} alt="Team Logo" className="match-team-logo" />
              <p className="detail">{match.date}</p>
              <p className="detail">{match.result}</p>
              <p className="detail">{match.id}</p>
              <p className="detail">{match.venue}</p>
              <p className="detail">{match.umpires}</p>
              <p className="detail">{match.manOfTheMatch}</p>
              <p className="detail">{match.firstInnings}</p>
              <p className="detail">{match.secondInnings}</p>
              <p className="detail">{match.matchStatus}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// To use with React Router, wrap it with a higher-order component to get the params
const BlogDetailsWithParams = (props) => {
  const { id } = useParams();
  return <IplDeatiles {...props} id={id} />;
};

export default BlogDetailsWithParams;

// export default IplDeatiles


// export default IplDeatiles
