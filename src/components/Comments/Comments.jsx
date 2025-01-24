import React, { useState } from 'react';
import { useAuth } from '../../auth/authProvider';
import LogInOut from '../../auth/LogInOut';
import './Comments.css';

const Comments = () => {
  const { isAuthenticated } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {isAuthenticated ? (
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Leave a comment"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>You must be logged in to leave a comment.</p>
      )}
      <LogInOut />
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;