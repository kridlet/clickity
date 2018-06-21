import React, { Component } from 'react';
import './App.css';
import cards from './cards.json';
import { Nav } from './components/Nav';
import { Head } from './components/Head';
import { Card } from './components/Card';
import { Foot } from './components/Foot';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      highClicks: 0,
      currentClicks: 0,
      cards: cards,
      unClickedCards: cards
    };

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  handleCardClick = clickedId => {
    const clickedCard = this.state.unClickedCards.find(item => item.id === clickedId);

    if(clickedCard === undefined) {
      // incorrect
      this.setState({ 
        result: -1,
        highClicks: (this.state.currentClicks > this.state.highClicks) ? this.state.currentClicks : this.state.highClicks,
        currentClicks: 0,
        cards: cards,
        unClickedCards: cards
      });
    }
    else {
      // correct
      const newCards = this.state.unClickedCards.filter(item => item.id !== clickedId);
      
      this.setState({ 
        result: 1,
        currentClicks: this.state.currentClicks + 1,
        cards: cards,
        unClickedCards: newCards
      });
    }

    this.shuffle(cards);
  };

  render() {
    return (
      <div className="wrapper">
        <Nav 
            result={this.state.result}
            currentClicks={this.state.currentClicks}
            highClicks={this.state.highClicks}
        />
        <Head />
        <main className="container">
        {
          this.state.cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              onCardClick={this.handleCardClick} 
              result={this.state.result}
            />
          ))
        }
        </main>
        <Foot />
      </div>
    );
  }
}