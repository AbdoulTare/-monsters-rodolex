import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

constructor(){
  super();

  this.state = {
    monsters:[ ],
    searchField:'',
    title:''
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}))
}

onSearchChange = event => {
  this.setState({ searchField: event.target.value, 
    title: event.target.value
  });
};

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <h1> Monster Rodolex </h1>
      <SearchBox className="fa fa-search" onSearchChange={this.onSearchChange} 
      placeholder='Search Monster'/>
      <CardList monsters={filteredMonsters} />
 
      </div>
    )
  }
  
}

export default App;
