import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardFilter extends Component {
  render() {
    const { onCardFilter } = this.props;
    return (
      <div>
        <h3>Filtrar Cartas</h3>
        <form>
          <input
            type="text"
            name="card-filter"
            id="card-filter"
            placeholder="Filtrar pelo nome"
            onChange={ onCardFilter }
            data-testid="name-filter"
          />
        </form>
      </div>
    );
  }
}

CardFilter.propTypes = {
  onCardFilter: PropTypes.func.isRequired,
};
