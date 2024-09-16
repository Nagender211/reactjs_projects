import React from 'react'

const MatchGameContent = (props) => {
    const {eachfillter}=props;
    const {catagery,imgUrl}=eachfillter
  return (
    <div>
      <h1>Hello THIS THE MatchGameContent</h1>
      <h1>{catagery}</h1>
      <img src={imgUrl} alt={catagery} />
    </div>
  )
}

export default MatchGameContent
