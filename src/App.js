import React from 'react';
import Card from './components/Card';
import CardFilter from './components/CardFilter';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      isDeleteButtonDisabled: true,
      deck: [],
      filter: '',
      rareFilter: 'todas',
      trunfoCheck: false,
    };
  }

  onInputChange = ({ target: { value, name, type, checked } }) => {
    if (type === 'checkbox') {
      this.setState({ [name]: checked }, () => this.saveButtonDisabled());
    } else {
      this.setState({ [name]: value }, () => this.saveButtonDisabled());
    }
  }

  saveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attr1 = +cardAttr1;
    const attr2 = +cardAttr2;
    const attr3 = +cardAttr3;

    const maxAttr = 90;
    const minAttr = 0;
    const totalAttr = 210;

    const sumAttr = attr1 + attr2 + attr3;
    const cardTotalAttr = sumAttr <= totalAttr;

    const verifyAttr1 = attr1 >= minAttr && attr1 <= maxAttr;
    const verifyAttr2 = attr2 >= minAttr && attr2 <= maxAttr;
    const verifyAttr3 = attr3 >= minAttr && attr3 <= maxAttr;
    const verifyAttrs = verifyAttr1 && verifyAttr2 && verifyAttr3;

    const buttonState = (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
    );

    const verifyConditions = verifyAttrs && cardTotalAttr && buttonState;

    if (verifyConditions) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    this.setState({ isSaveButtonDisabled: true });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) this.setState({ hasTrunfo: true });

    const objCard = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((prevState) => ({
      deck: [...prevState.deck, objCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  onDeleteButtonClick = ({ target: { id } }) => {
    const { deck } = this.state;

    const newDeck = deck.filter((card) => (
      card.name !== id
    ));

    const verifyCard = deck.filter((card) => (
      card.name === id
    ));

    const isCardTrunfo = verifyCard.find((card) => card);

    if (isCardTrunfo.trunfo) {
      this.setState({
        deck: newDeck,
        hasTrunfo: false,
      });
    } else {
      this.setState({ deck: newDeck });
    }
  };

  onCardFilter = ({ target: { value, name, type, checked } }) => {
    if (name === 'name') this.setState({ filter: value });
    if (name === 'rare') this.setState({ rareFilter: value });
    if (type === 'checkbox') {
      this.setState({ trunfoCheck: checked });
    }
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      isDeleteButtonDisabled,
      deck,
      filter,
      rareFilter,
      trunfoCheck,
    } = this.state;

    const cardsFilter = deck.filter((card) => (
      trunfoCheck ? card.trunfo === trunfoCheck
        : card.name.toLowerCase().includes(filter.toLowerCase())
      && (card.rare.toLowerCase() === rareFilter.toLowerCase() || rareFilter === 'todas')
    ));

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <CardFilter onCardFilter={ this.onCardFilter } trunfoCheck={ trunfoCheck } />

        { cardsFilter.map((card) => (
          <Card
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.image }
            cardRare={ card.rare }
            cardTrunfo={ card.trunfo }
            isDeleteButtonDisabled={ isDeleteButtonDisabled }
            onDeleteButtonClick={ this.onDeleteButtonClick }
            id={ card.name }
            className={ card.trunfo }
            key={ card.name }
          />
        ))}

      </div>
    );
  }
}

export default App;
