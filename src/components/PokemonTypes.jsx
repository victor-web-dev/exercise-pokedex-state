import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/pokemonTypes.css';

export default class PokemonTypes extends Component {

  render() {
    const { types, handler } = this.props;
    const arr = ['All', ...types];
    return (
      <div className="type-list">
        {
          arr.map((e) => {
            return (
            <button key={e} className="type" value={e} onClick={handler}>{e}</button>
            )
          })
        }
      </div>
    );
  }

}

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  handler: PropTypes.func
}