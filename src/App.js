import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

class App extends Component {

  state = {
    clicked: [],
    minions: [
      {
        id: 1,
        url: 'http://howtodrawdat.com/wp-content/uploads/2014/01/1st-pic-Dave-Minion-from-despicable-me.png'
      },
      {
        id: 2,
        url: 'https://www.planwallpaper.com/static/images/4628fbb9dc70514d389ed9491243866f_400x400.png'
      },
      {
        id: 3,
        url: 'https://i.pinimg.com/originals/5b/65/29/5b6529e1bb325a6f144cb40ceeb40365.png'
      },
      {
        id: 4,
        url: 'https://weseeclip.com/upload/photos/2017/12/wXnO1c4LjlfVNNkiIhIo_04_06f8846e98ebad51f980643fa0973265_image.jpg'
      },
      {
        id: 5,
        url: 'https://img.scoop.it/OuVQ7hki6eMmSbXDkl1pr4XXXL4j3HpexhjNOf_P3YmryPKwJ94QGRtDb3Sbc6KY'
      },
      {
        id: 6,
        url: 'http://2.bp.blogspot.com/-RXAcp33VqgA/Vl8m23exUpI/AAAAAAAAQT4/T_AE167Sa5w/s640/Minions.jpg'
      },
      {
        id: 7,
        url: 'https://media.giphy.com/media/rStiIrpslM63u/giphy.gif'
      },
      {
        id: 8,
        url: 'https://data.whicdn.com/images/91497933/large.jpg'
      },
      {
        id: 9,
        url: 'https://i.pinimg.com/originals/b1/59/cc/b159cc73a513aba1df58a6ab3924d0ce.jpg'
      },
    ]
  }

  handleCardClick = (id) => {
    console.log('id', id);
    // TODO: track if id has been clicked

    let minions = shuffle(this.state.minions);
    this.setState({ minions });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Click It</h1>
        </header>
        <div>
          {
            this.state.minions.map(minion => {
              return (
                <Card
                  key={minion.id}
                  url={minion.url}
                  id={minion.id}
                  onCardClick={this.handleCardClick}  // need to work on this part
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}