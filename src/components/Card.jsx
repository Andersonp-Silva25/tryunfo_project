import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isDeleteButtonDisabled,
      onDeleteButtonClick,
    } = this.props;
    return (
      <div>
        <div>
          <h3 data-testid="name-card">{ cardName }</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        </div>
        {
          isDeleteButtonDisabled && (
            <button
              type="button"
              data-testid="delete-button"
              onClick={ onDeleteButtonClick }
              id={ cardName }
            >
              Excluir
            </button>
          )
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isDeleteButtonDisabled: PropTypes.bool,
  onDeleteButtonClick: PropTypes.func,
};

Card.defaultProps = {
  isDeleteButtonDisabled: false,
  onDeleteButtonClick: () => {},
};
