import React, { Component } from "react";

import "./App.css";
import TopHeader from "./components/TopHeader";
import PostBody from "./components/PostBody";
import Commentlist from "./components/Commentlist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopHeader />
        </header>
        <PostBody />

        <hr />
        <Commentlist />
      </div>
    );
  }
}

export default App;
