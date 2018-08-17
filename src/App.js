import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
  render() {
    return (
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox />
        <CardList robots={robots}/>
      </div>
    );
  }
}

export default App;