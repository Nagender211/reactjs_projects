import React from 'react'
import { formatDistanceToNow } from 'date-fns'
// import './CommentApp.css';

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
    <div className="comment-item">
      <div className="comment-avatar">{name[0]}</div>
      <div className="comment-details">
        <p className="comment-time">{formatDistanceToNow(new Date(timestamp), { addSuffix: true })}</p>
        <h2 className="comment-name">{name}</h2>
        <p className="comment-text">{comment}</p>
      </div>
      <div className="comment-actions">
        <button onClick={editComment} className="edit-button">Edit</button>
        <img 
          src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png' 
          alt="delete" 
          onClick={onDeleteComment}
          className="delete-icon"
        />
        <button onClick={onLikeUpdate} className="like-button">
          <img src={likeIcon} alt="like" className="like-icon"/>
        </button>
      </div>
    </div>
  )
}

export default Comment
