import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NewsBody from './Scenes/NewsBody';
import { getNews, removeNew } from './Helpers/ApiHelper';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "HN Feed",
      description: "We <3 hacker news!",
      news: [],
    }
  }

  componentDidMount(){
    getNews().then(res => {
      this.setState({news: res.data});
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
          title={this.state.title} 
          description={this.state.description} />
        <NewsBody news={this.state.news} />
      </div>
    );
  }
}

export default App;
