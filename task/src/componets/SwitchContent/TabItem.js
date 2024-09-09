import React from 'react'

const TabItem = (props) => {
    const {tabDetails, clickTabItem, isActive,updateTabList} = props
    const {tabId, displayText} = tabDetails
    // const onClickTabItem = () => {
    //   clickTabItem(tabId)
    // }
  
    // const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
    const onUpadateTab=()=>{
      updateTabList(tabId)
    }
  
    return (
      <li className="tab-item-container ">
        <button
          type="button"
          className={`tab-btn `} onClick={onUpadateTab}
        >
          {displayText}
        </button>
      </li>
    )
}

export default TabItem
