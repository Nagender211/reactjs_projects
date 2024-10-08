import React from 'react'

const ProductSortHeader = (props) => {
    const {sortOption,activeOption,updateActive}=props
    // const {optionId,displaytext}=sortOption
    const onSortrChange=event=>{
        updateActive(event.target.value)
    }
  return (
    <div>
        <div>
            <h1>All product's</h1>
            <h4>sort By</h4>
            <select value={activeOption} onChange={onSortrChange}>
                {
                    sortOption.map(option=>(
                        <option key={option.optionId} value={option.optionId}><p>{option.displayText}</p></option>
                    ))
                }
                
            </select>
        </div>
      
    </div>
  )
}

export default ProductSortHeader
