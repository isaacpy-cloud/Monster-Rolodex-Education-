import { Component } from 'react';
import CardList from './Components/card-list/card-list.component.';

import './Styles/App.css';

import SearchBox from './Components/searchbox-component/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state)
        }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
     

    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const { monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className='app'>
        <SearchBox onSearchChange={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
