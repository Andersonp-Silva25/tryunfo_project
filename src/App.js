import React from 'react';
import Card from './components/Card';
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
    };
  }

  onInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sumAttr = (+cardAttr1) + (+cardAttr2) + (+cardAttr3);
    const maxAttr = 90;
    const minAttr = 0;
    const totalAttr = 210;

    if (+cardAttr1 > maxAttr) return true;
    if (+cardAttr2 > maxAttr) return true;
    if (+cardAttr3 > maxAttr) return true;
    if (+cardAttr1 < minAttr || +cardAttr2 < minAttr || +cardAttr3 < minAttr) return true;
    if (sumAttr === minAttr || sumAttr > totalAttr) return true;

    const buttonState = (
      cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0
    );

    if (buttonState) return true;
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
    } = this.state;

    if (cardTrunfo === 'on') this.setState({ cardTrunfo: true });

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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
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
      </div>
    );
  }
}

export default App;
