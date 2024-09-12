import React from 'react'

const EmojiGameContent = (props) => {
  // const {onclickEmoji}=props
  const {emoji,emojiName,id,onclickEmoji}=props
  const imageClicked = () => {
    onclickEmoji(id)
  }
  return (
    <div className='saparate'>
        <img src={emoji} alt={emojiName} style={{width: '100px', height: '100px', cursor: 'pointer'}} onClick={imageClicked}/>
      
    </div>
  )
}

export default EmojiGameContent
