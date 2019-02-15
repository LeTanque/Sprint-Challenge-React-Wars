import React from 'react';
import CharacterProfile from './components/CharacterProfile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      // currentPage: `https://swapi.co/api/people/?page=${this.state.pageNumber}`
      currentPage: `https://swapi.co/api/people/?page=1`
    };
  }


  componentDidMount() {
    this.getCharacters(this.state.currentPage);
  }

  getCharacters = URL => {
    // At a high level we are calling an API to fetch some starwars data.
    // We then take that data and resolve it our state.
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      // console.log(data);
      this.setState({ 
        starwarsChars: data.results,
        nextPage: data.next 
      });
      // this.setState({ nextPage: data.next });  // Store next page of characters url to nextPage object value.
    })
    .catch(err => {
      throw new Error(err);
    });
  };

  // nextPage = () => {
  //   this.setState( this.currentPage = this.nextPage );
  // }

  render() {
    // Notes on design of application:
    // Components will connect to App.js
    // Character profile will take in the character stats as props and return the styled card
    
    // console.log(this.state.starwarsChars);
    console.log(this.state.nextPages);
    return (
      <div className='bg-splash'>
        <div className="App">
          <h1 className="Header">React Wars</h1>
            <hr className='hr'></hr>
            <div className='button-container'>
              <button 
                // href={this.state.nextPage} 
                className='btn-clear' 
                // onClick={this.nextPage} 
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
