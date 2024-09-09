import React from 'react'

const DisplayImages = (props) => {
    const {projectDetails}=props;
    const {projectId,projectUrl}=projectDetails
  return (
    <div>
        <img src={projectUrl} alt={projectId} />
      
    </div>
  )
}

export default DisplayImages
