import React, { Component } from 'react';
import CardList from './CardList'
import Search from './Search'

class App extends Component {
 
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      return res.json()
    }).then(users=>{
      this.setState({robots: users})
    })
  }

  oninputChange = (e) => {
    this.setState({searchfield: e.target.value})
    console.log(e.target.value)
  }

  render() {
    const filterCards = this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(this.state.searchfield)
    })
    return (
      <div className="App">
        <h1>ROBOFRIENDS</h1>
        <Search inputChange={this.oninputChange} />
        <CardList robots={filterCards}/>
      </div>
    );
  }
}

export default App;
