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
      description: "We ♥ hacker news!",
      news: [],
    }

    this.deleteNew = this.deleteNew.bind(this);
  }

  componentDidMount(){
    getNews().then(res => {
      this.setState({news: res.data});
    })
  }

  deleteNew( storyId ){
    removeNew(storyId).then( res => {
      console.log(res);
      console.log(storyId);
      if (res.data.story_id == storyId ){
        let storyIndex = this.state.news.map(function(story) { return story.story_id; }).indexOf(storyId);
        if(storyIndex > -1){
          let news = [...this.state.news];
          news.splice(storyIndex,1);
          this.setState({news: news});
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
          title={this.state.title} 
          description={this.state.description} />
        <NewsBody news={this.state.news} onDeleteStory={this.deleteNew} />
      </div>
    );
  }
}

export default App;
