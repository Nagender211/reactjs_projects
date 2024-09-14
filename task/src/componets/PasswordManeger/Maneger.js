import React from 'react'
import './Manger.css'
const Maneger = (props) => {
    const {website,maskPassword,showPassword,onDelete}=props;
    const {websiteName,name,username,password,id,count}=website;
    // const maskPassword=(password)=>{
    //     return '•'.repeat(password.length);
  
    // }
    // const Cclick=()=>{
    //     alert(password);
    //     // navigator.clipboard.writeText(password);

    // }
    const DdeleteList=()=>{
       onDelete(id);
    }


  return (
    <div className='manager-item'>
     
      <h2>{name}</h2>
      <p> {username}</p>
      <p>{showPassword ? maskPassword(password): password}</p>
      <button onClick={DdeleteList}>Delete</button>
    </div>
  )
}

export default Maneger
