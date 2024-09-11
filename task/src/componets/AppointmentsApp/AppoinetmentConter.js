import React from 'react'
import './AppointmentsApp.css'  // Import CSS

const AppoinetmentConter = (props) => {
    const { appointment, toggleEvenFav } = props
    const { text, date, isFavorite, id } = appointment
    const starIcon = isFavorite ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png' : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

    const favIcon = () => {
        toggleEvenFav(id)
    }

    return (
        <div className="appointment-card">
            <div className="appointment-info">
                <h1>{text}</h1>
                <p>{date}</p>
            </div>
            <img src={starIcon} onClick={favIcon} alt="favorite-icon" className="favorite-icon" />
        </div>
    )
}

export default AppoinetmentConter
