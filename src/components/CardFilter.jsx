import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardFilter extends Component {
  render() {
    const { onCardFilter, trunfoCheck } = this.props;
    return (
      <div>
        <h3>Filtrar Cartas</h3>
        <form>
          <label htmlFor="card-filter-name">
            <input
              type="text"
              name="name"
              id="card-filter-name"
              placeholder="Filtrar pelo nome"
              onChange={ onCardFilter }
              data-testid="name-filter"
              disabled={ trunfoCheck }
            />
          </label>
          <br />
          <label htmlFor="card-filter-rare">
            <select
              name="rare"
              id="card-filter-rare"
              data-testid="rare-filter"
              onChange={ onCardFilter }
              disabled={ trunfoCheck }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
            <br />
          </label>
          <label htmlFor="trunfo">
            Filtrar Super Trunfo
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo"
              data-testid="trunfo-filter"
              onChange={ onCardFilter }
            />
          </label>
        </form>
      </div>
    );
  }
}

CardFilter.propTypes = {
  onCardFilter: PropTypes.func.isRequired,
  trunfoCheck: PropTypes.bool.isRequired,
};
