import React from 'react'

const Tabnavigationstore = (probs) => {
  const {tabDetails,updateTabList}=probs;
  const {tabId,displayText}=tabDetails;
  const onUpadateSate=()=>{
    updateTabList(tabId)
  }
    
  return (
    <div>
      <button onClick={onUpadateSate}>{displayText}</button>
    </div>
  )
}

export default Tabnavigationstore
