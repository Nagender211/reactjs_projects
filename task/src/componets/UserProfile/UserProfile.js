import React from 'react'
const UserProfile = (probs) => {
    const {UserProfileList,deleteUser}=probs
    const {imageUrl, name, role,uniqueNo}=UserProfileList
   const onChange=()=>{
    deleteUser(uniqueNo);
    }
  return (
    <li>
      <div>
      <img src={imageUrl} alt='png' />
      <h2>{name}</h2>
      <p>{role}</p>
      </div>
      <button type='button' className='button-cls'>
        <img src='https://assets.ccbp.in/frontend/react-js/cross-img.png' alt='cross' className='cross' onClick={onChange}/>
        </button>
    </li>
  )
}
export default UserProfile
