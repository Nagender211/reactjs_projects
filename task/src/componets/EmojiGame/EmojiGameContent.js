import React from 'react';
import './EmojiGame.css';


const EmojiGameContent = (props) => {
  const { emoji, emojiName, id, onclickEmoji } = props;
  
  const imageClicked = () => {
    onclickEmoji(id);
  };

  return (
    <div className='emoji-item'>
      <img 
        src={emoji} 
        alt={emojiName} 
        style={{ width: '100px', height: '100px', cursor: 'pointer' }} 
        onClick={imageClicked}
      />
    </div>
  );
};

export default EmojiGameContent;
