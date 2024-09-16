import React from 'react'

const TabNnavigation = (props) => {
    const {eachTab,update}=props;
    const {tabId,title}=eachTab;
    const handleClick = () => {
        update(tabId)
    }
  return (
    <div>
      <button onClick={handleClick}>
        {title}
      </button>

    </div>
  )
}

export default TabNnavigation
