import React from 'react'

const ContentStore = (probs) => {
  const {projectDetails}=probs;
  const {projectId,catagery,title}=projectDetails
  return (
    <div>
       {/* <h1>{catagery}</h1> */}
       <h2>{title}</h2>
      
    </div>
  )
}

export default ContentStore
