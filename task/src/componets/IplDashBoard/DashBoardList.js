import React from 'react'
import { Link } from 'react-router-dom';

const DashBoardList = (props) => {
    const {item}=props;
    const {name,teamImageUrl,id}=item
  return (
    <div>
        <Link to={`/team-match/${id}`}>
            <img src={teamImageUrl} alt={name} />
            <h3>{name}</h3>
        </Link>
      
    </div>
  )
}

export default DashBoardList
