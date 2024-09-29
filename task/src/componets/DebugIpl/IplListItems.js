import React from 'react'
import { Link } from 'react-router-dom';

const IplListItems = (props) => {
    const {item}=props;
    const {id,name,teamImageUrl}=item
   
  return (
    <div>
        <Link to={`/team-match/${id}`}>
        <img src={teamImageUrl} alt={name} />
        <h3>{name}</h3>
        </Link>
        
      
    </div>
  )
}

export default IplListItems
