import React, { Component } from "react";
import "./Commentlist.css";
import CommentItem from "./CommentItem";
class Commentlist extends Component {
  render() {
    const comments = [
      { user: "Murat", comment: "Great content" },
      { user: "Ahmo", comment: "Awa Ciya!!" },
      { user: "Benjamin", comment: "Cok Awesome" }
    ];
    const commentsElemets = comments.map((element, index) => (
      <CommentItem user={element.user} comment={element.comment} />
    ));
    return <div>{commentsElemets}</div>;
  }
}
export default Commentlist;
