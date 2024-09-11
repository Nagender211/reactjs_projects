import React from 'react'
import { formatDistanceToNow } from 'date-fns'

const Comment = (props) => {
  const { eachComment, deleteComment, onEdit, toggleEventFfav } = props
  const { name, comment, id, isLike, timestamp } = eachComment
  const likeIcon = isLike 
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png' 
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const editComment = () => {
    onEdit(id)
  }

  const onLikeUpdate = () => {
    toggleEventFfav(id)
  }

  return (
    <div>
      <h1 style={{ width: '50px', height: '50px', background: 'red', padding: '0.5rem', borderRadius: '50%', display: 'inline-block', textAlign: 'center', color: '#fff' }}>{name[0]}</h1>
      <p>{formatDistanceToNow(new Date(timestamp), { addSuffix: true })}</p>
      <h1>{name}</h1>
      <p>{comment}</p>
      <button onClick={editComment}>Edit Comment</button>
      <img 
        src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png' 
        alt="delete" 
        onClick={onDeleteComment} 
        style={{ cursor: 'pointer' }}
      />
      <button onClick={onLikeUpdate}>
        <img src={likeIcon} alt="like" />
      </button>
    </div>
  )
}

export default Comment
