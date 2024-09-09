import React from 'react'

const CapitalsApp = (props) => {
    const {tabDetails,updateTabList}=props;
    const {name,id,capital}=tabDetails;
    const onUpdateClick=()=>{
        updateTabList(capital)
  
    }
  return (
    <div>
       <p onClick={onUpdateClick}>{name}</p>
      
    </div>
  )
}

export default CapitalsApp
