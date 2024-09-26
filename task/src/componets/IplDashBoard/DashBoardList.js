
import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoardList.css';

const DashBoardList = (props) => {
    const { item } = props;
    const { name, teamImageUrl, id } = item;
    return (
        <div className="dashboard-list">
            <Link to={`/team-match/${id}`}>
                <img src={teamImageUrl} alt={name} />
                <h3>{name}</h3>
            </Link>
        </div>
    );
}

export default DashBoardList;
