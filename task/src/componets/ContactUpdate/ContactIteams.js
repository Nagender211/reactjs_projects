import React from 'react'

const ContactIteams = (props) => {
    const {contactDeaitles,toggleEventFfav}=props;
    const {name,phoneNumber,id,isFavorite}=contactDeaitles;
    const startfav=isFavorite ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png' : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

    const onFavIcon=()=>{
        toggleEventFfav(id);
  
    }
  return (
    <div>
      <p>name: {name}</p>

      <p>phoneNumber: {phoneNumber}</p>
      
      <button onClick={onFavIcon}><img src={startfav} /></button>
    </div>
  )
}

export default ContactIteams


// ContactIteams
