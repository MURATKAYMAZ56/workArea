import React, { Component } from "react";
import "./Commentlist.css";
class Commentlist extends Component {
  render() {
    const comments = [
      { user: "Murat", comment: "Great content" },
      { user: "Ahmo", comment: "Awa Ciya!!" },
      { user: "Benjamin", comment: "Cok Awesome" }
    ];
    const commentsElemets = comments.map((element, index) => (
      <div key={index} className="comment">
        <span>
          <strong>{element.user} said:</strong> {element.comment}
        </span>
      </div>
    ));
    return <div>{commentsElemets}</div>;
  }
}
export default Commentlist;
