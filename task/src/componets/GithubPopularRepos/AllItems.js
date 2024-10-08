import React from 'react'

const AllItems = (props) => {
    const { item } = props
    const {avatarUrl,forksCount,id,issuesCount,name,starsCount}=item
  return (
    <div>
        <div>
                  <img src={avatarUrl} alt={name} />
          <h2>{name}</h2>
          <p>Stars: {starsCount}</p>
          <p>Forks: {forksCount}</p>
          <p>Issues: {issuesCount}</p>
        </div>
        <div>
        <button onClick={() => props.deleteItem(id)}>Delete</button>
        <hr />
      </div>
      
    </div>
  )
}

export default AllItems
