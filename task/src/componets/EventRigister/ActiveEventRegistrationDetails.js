import React from 'react';
import './EventItem.css';  // Import the same CSS file

const ActiveEventRegistrationDetails = (props) => {
  const { event,onClick } = props;
  const { imageUrl, location, name, registrationStatus,id } = event;
  const imageClicked=()=>{
    onClick(id); // Call the parent component's function to handle the click event

  }
  
  return (
    <div>
      <h3 className="event-title">{name}</h3>
      <img className="event-image" src={imageUrl} alt={name} onClick={imageClicked}/>
      <p className="event-location">{location}</p>
      <p className="event-registration">{registrationStatus}</p>
    </div>
  );
}

export default ActiveEventRegistrationDetails;
