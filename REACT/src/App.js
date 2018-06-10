import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";

import Paragraph1, { Paragraph3 } from "./Paragraph1";
import Paragraph2 from "./Paragraph2"
import Anothercomponent from "./Anothercomponent"

class App extends Component {
  render() {



    return (
      <div className="App">


        <Header />


        <Paragraph1 />
        <Paragraph2 />
        < Paragraph3 />
        <Anothercomponent info={"First value"} />
        <Anothercomponent info={"Second different value"} />

      </div >
    );
  }
}

export default App;
