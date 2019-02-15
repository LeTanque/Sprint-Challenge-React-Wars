import React, { Component } from 'react';
import CharacterProfile from './components/CharacterProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }


  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
  };

  render() {
    // Design
    // Components will connect to App.js
    // Character profile will take in the character stats as props and return the profile card
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          <CharacterProfile
            starwarsChars={this.state.starwarsChars}
          />

      </div>
    );
  }
}



export default App;
