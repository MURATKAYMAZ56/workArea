import React, { Component } from "react";

class CommentItem extends Component {
  render() {
    const user = this.props.user;
    const comment = this.props.comment;
    return (
      <div className="comment">
        <span>
          <strong>{user} said:</strong> {comment}
        </span>
      </div>
    );
  }
}

export default CommentItem;
==