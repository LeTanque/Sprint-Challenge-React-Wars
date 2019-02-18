import React from 'react';
import CharacterProfile from './components/CharacterProfile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      previousPage: '',
      currentPage: `https://swapi.co/api/people/?page=1`
    };
  }


  componentDidMount() {
    this.getCharacters(this.state.currentPage);
  }

  getCharacters = URL => {
    // At a high level we are calling an API to fetch some starwars data.
    // We then take that data and resolve it in our state.
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
      this.setState({ nextPage: data.next });  // Store next page of characters url to nextPage object value.
      this.setState({ previousPage: data.previous });  // Store next page of characters url to nextPage object value.
    })
    .catch(err => {
      throw new Error(err);
    });
  };

  gotoNextPage = () => { // This function invokes getCharacters with the stateful nextPage url string.
    if (this.state.nextPage === null){
      this.getCharacters(this.state.currentPage);
    } else {
      this.getCharacters(this.state.nextPage);
    }
  }

  gotoPreviousPage = () => { // This function does the same as NextPage, but reverse.
    if (this.state.previousPage === null){
      this.getCharacters(this.state.currentPage);  
    } else {
      this.getCharacters(this.state.previousPage);
    }
    
  }

  render() {
    // Notes on design of application:
    // Components will connect to App.js
    // Character profile will take in the character stats as props and return the styled card
    
    // console.log(this.state.nextPage);
    return (
      <div className='bg-splash'>
        <div className="App">
          <h1 className="Header">React Wars</h1>
            <hr className='hr'></hr>
            <div className='button-container'>
            <button 
                className='btn-clear' 
                onClick={this.gotoPreviousPage} 
              >
                Previous Page
              </button>
              <button 
                className='btn-clear' 
                onClick={this.gotoNextPage} 
              >
                Next Page
              </button>
            </div>
            <CharacterProfile
              starwarsChars={this.state.starwarsChars}
            />
            
        </div>
      </div>
    );
  }
}



export default App;
