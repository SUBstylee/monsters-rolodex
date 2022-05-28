// import { Component } from 'react';

import { useState, useEffect } from 'react';

import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.css';

//data for the monster rolodex is being fetched from 'https://jsonplaceholder.typicode.com/users'

// *********** functional Component

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);


  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app__title'>Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='search__box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// *********** class Component

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   };

//   componentDidMount() {

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => this.setState(() => {
//         return { monsters: users };
//       }
//       ));
//   };

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app__title'>Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//           className='search__box'
//         />
//         <CardList monsters={filteredMonsters} anything={['a', 'b', 'c']} />
//       </div>
//     );
//   };
// };

export default App;
