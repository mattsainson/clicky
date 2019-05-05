import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';
import Images from './components/images.json'

class App extends Component {

  state = {
    images: Images,
    totalClicks: 0,
    clickedImages: [],
    highScore: 0
  }

  endGame() {
    if (this.state.totalClicks > this.state.highScore) {
      this.setState ({
        highScore: this.state.totalClicks
      })
    }
    this.setState ({
      images: this.state.images.sort(() => Math.random() - 0.5),
      totalClicks: 0,
      clickedImages: []
    })
  }

  handleShuffle(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState({
        totalClicks: this.state.totalClicks + 1,
        clickedImages: [...this.state.clickedImages, id],
      });
      if (this.state.totalClicks === 12) {
        this.endGame();
      } else {
        this.setState({
          images: this.state.images.sort(() => Math.random() - 0.5)
        })
      }
    } else {
      this.endGame();
    }
  }

  render() {
    return (
      <div className="App">
        <Nav score={this.state.totalClicks} highScore={this.state.highScore} />
        <Header />
        <Main>
          {this.state.images.map(i => (
            <Card
              key={i.id}
              name={i.name}
              image={i.image}
              onClick={() => this.handleShuffle(i.id)}
            />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
