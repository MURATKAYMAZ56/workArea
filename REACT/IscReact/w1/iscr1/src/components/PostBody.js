import React, { Component } from "react";
class PostBody extends Component {
  render() {
    const title = <h2>Fist Post</h2>;
    const dateOfpost = new Date().toLocaleDateString();
    const content = "I have started to design my own Blog page.";

    return (
      <section>
        {title}
        <h4>{dateOfpost}</h4>
        {content}
      </section>
    );
  }
}

export default PostBody;
