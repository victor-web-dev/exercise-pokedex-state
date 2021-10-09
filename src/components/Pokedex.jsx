import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';
import PokemonTypes from './PokemonTypes';

export default class Pokedex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonList: pokemons,
      filteredList: [],
      filteredListPosition: 0,
      filteredListLength: 0,
      pokemonTypes: [],
      selectedType: 'All'
    }

   // this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  fillUpTypes = () => {
    const { pokemonTypes, pokemonList} = this.state;
    // copies the state data
    const arr = pokemonTypes.slice();
    // verify and add types
    pokemonList.forEach((e) => {
      if(!arr.includes(e.type)) arr.push(e.type); 
    });

    arr.sort();
    // sets new value to the state
    this.setState((state) => ({
      pokemonTypes: arr,
    }));
  };

  // gets the pokemonList and Filter according to the selectedType
  filterSelectedTypePokemons = () => {
    const { selectedType, pokemonList } = this.state;
    const arr = pokemonList.filter((e) => {
      if (selectedType === 'All') return e;
      if (selectedType === e.type) return e;
    });
    this.setState((state) => ({
      filteredList: arr,
      filteredListLength: arr.length
    }));
  };

  componentDidMount() {
    this.fillUpTypes();
  }

  handleTypeChange = (event) => {
    this.setState(() => ({
      selectedType: event.target.value
    }));
    console.log(this.state.selectedType);
  }; 

  render() {
    return (
      <div className="pokemon-container">
        <PokemonTypes types={this.state.pokemonTypes} handler={this.handleTypeChange} />
      </div>
    );
  }
}

