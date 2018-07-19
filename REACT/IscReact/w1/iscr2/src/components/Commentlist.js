import React, { Component } from "react";
import "./Commentlist.css";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
class Commentlist extends Component {
  render() {
    const comments = this.props.comments;
    const commentsElemets = comments.map((element, index) => (
      <CommentItem user={element.user} comment={element.comment} />
    ));
    return (
      <div>
        {commentsElemets}
        <CommentForm />
      </div>
    );
  }
}
export default Commentlist;
