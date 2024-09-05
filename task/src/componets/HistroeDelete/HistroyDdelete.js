import React from 'react'

const HistroyDdelete = (props) => {
    const {histoyList,updateWithArrow}=props;
    const {title, id,date}=histoyList;
    const deleteHisteoy=()=>{
        updateWithArrow(id)
        if(!id){
            return "Not found"
        }
  
    }
  return (
    <div>
      <ul>
        <li>{date} {title}</li>
        <img src='https://assets.ccbp.in/frontend/react-js/delete-img.png' onClick={deleteHisteoy}/>
      </ul>
    </div>
  )
}

export default HistroyDdelete
