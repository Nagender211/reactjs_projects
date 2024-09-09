import React from 'react'
import './index.css'

const GalleryApp = (props) => {
    const {tabDetails,updateImage}=props;
    const {imgId,imgUrl}=tabDetails
    const onImgShow=()=>{
        updateImage(imgId)

    }
  return (
    <div className='imges'>
        <img src={imgUrl} onClick={onImgShow}/>
      
    </div>
  )
}

export default GalleryApp
