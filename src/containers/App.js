import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { robots, searchField } = this.state; //Destructuring
    const filteredRobots = robots.filter(robotItem => {
      return robotItem.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? 
      ( <h1>Loading</h1> ) :
      (
        <div className='tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
  }
}

export default App;