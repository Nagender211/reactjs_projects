import React, { Component } from 'react'
import Comment from './Comment'
import { v4 as uuid4 } from 'uuid'
// import './CommentApp.css';

class CommentsApp extends Component {
  state = {
    comments: [],
    name: '',
    comment: '',
    id: null,
  }

  onUpdateComment = (e) => {
    e.preventDefault()
    const { name, comment, id } = this.state

    if (id) {
      // Update existing comment
      this.setState((prevState) => ({
        comments: prevState.comments.map(eachComment =>
          eachComment.id === id
            ? { ...eachComment, name, comment }
            : eachComment
        ),
        name: '',   
        comment: '',
        id: null   
      }))
    } else {
      // Add new comment with timestamp
      const newComment = {
        id: uuid4(),
        name,
        comment,
        isLike: true,
        timestamp: new Date(),
      }

      this.setState(prevState => ({
        comments: [...prevState.comments, newComment],
        name: '',
        comment: ''
      }))
    }
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  onCommentChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  deleteComment = (id) => {
    const updatedComments = this.state.comments.filter(eachComment => eachComment.id !== id)
    this.setState({ comments: updatedComments })
  }

  onEdit = (id) => {
    const { comments } = this.state
    const editComment = comments.find(eachComment => eachComment.id === id)
    this.setState({
      name: editComment.name,
      comment: editComment.comment,
      id: editComment.id
    })
  }

  toggleEventFfav = (id) => {
    this.setState(prevState => ({
      comments: prevState.comments.map(eachComment =>
        eachComment.id === id
          ? { ...eachComment, isLike: !eachComment.isLike }
          : eachComment
      )
    }))
  }

  render() {
    const { comments, name, comment } = this.state

    return (
      <div className="comments-app">
        <h1 className="app-title">Comments App</h1>
        <form onSubmit={this.onUpdateComment} className="comment-form">
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={this.onNameChange}
            className="input-name"
          />
          {/* <input type='date' /> */}

          <textarea
            placeholder="Enter your Comment"
            value={comment}
            onChange={this.onCommentChange}
            rows="4"
            cols="40"
            className="input-comment"
          />
          <button type="submit" className="submit-button">
            {this.state.id ? 'Update Comment' : 'Submit'}
          </button>
        </form>
        


        <div className="comments-list">
          {comments.map(eachComment => (
            <Comment
              key={eachComment.id}
              eachComment={eachComment}
              deleteComment={this.deleteComment}
              onEdit={this.onEdit}
              toggleEventFfav={this.toggleEventFfav}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CommentsApp
