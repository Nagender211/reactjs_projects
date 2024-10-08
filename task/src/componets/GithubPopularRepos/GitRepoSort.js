import React from 'react'

const GitRepoSort = (props) => {
    const  {sortRepo,activeRepo,updateRepo}=props
    const onUpadateRepo=(e)=>{
        updateRepo(e.target.value)
    }
  return (
    <div>
        <ul onClick={onUpadateRepo} value={activeRepo}>
            {sortRepo.map(item=>(
                <li key={item.id} value={item.id}>{item.text}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default GitRepoSort
