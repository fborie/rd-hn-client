import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NewsBody from './Scenes/NewsBody';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "HN Feed",
      description: "We <3 hacker news!"
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          title={this.state.title} 
          description={this.state.description} />
        <NewsBody />
      </div>
    );
  }
}

export default App;
