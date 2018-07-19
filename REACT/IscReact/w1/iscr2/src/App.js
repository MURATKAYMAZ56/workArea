import React, { Component } from "react";

import "./App.css";
import TopHeader from "./components/TopHeader";
import PostBody from "./components/PostBody";
import Commentlist from "./components/Commentlist";
import comments from "./data/comments";

class App extends Component {
  state = {
    comments: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopHeader />
        </header>
        <PostBody />

        <hr />
        <Commentlist comments={this.state.comments} />
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      comments: comments
    });
  }
}

export default App;
