import React from 'react'

const GoogleSsearch = (props) => {
    const {googleSuggestionList,updateWithArrow}=props;
    const {title,id}=googleSuggestionList;
    const onChangeArrow=()=>{
        updateWithArrow(title)
    }
  return (
    <div>
        <h1>{title}</h1>
        <img src='https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png' alt='arrow' onClick={onChangeArrow}/>
        {/* <p>ID: {id}</p> */}
      
    </div>
  )
}

export default GoogleSsearch
