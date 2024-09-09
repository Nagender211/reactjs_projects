import React from 'react'

const FeedBackApp = (props) => {
    const {FeedBackItem,btnClicked}=props;
    const {title,id}=FeedBackItem;
    const clickedBtn = () => {
      btnClicked(id);
    }
  return (
    <div>
      <button onClick={clickedBtn}>{title}</button>
    </div>
  )
}

export default FeedBackApp
