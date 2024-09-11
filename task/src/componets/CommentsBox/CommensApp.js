import React, { Component } from 'react'
import Comment from './Comment'
import { v4 as uuid4 } from 'uuid'

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
            ? { ...eachComment, name, comment }  // Update the specific comment
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
        isLike: true,  // Initialize isLike for a new comment
        timestamp: new Date(),  // Store the creation time of the comment
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
          ? { ...eachComment, isLike: !eachComment.isLike }  // Toggle the isLike property
          : eachComment
      )
    }))
  }

  render() {
    const { comments, name, comment } = this.state

    return (
      <div>
        <h1>Comments App</h1>
        <form onSubmit={this.onUpdateComment}>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={this.onNameChange}
          />
          <textarea
            placeholder="Enter your Comment"
            value={comment}
            onChange={this.onCommentChange}
            rows="4"
            cols="40"
          />
          <button type="submit">
            {this.state.id ? 'Update Comment' : 'Submit'}
          </button>
        </form>

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
    )
  }
}

export default CommentsApp
