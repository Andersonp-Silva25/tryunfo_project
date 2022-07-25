import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome da carta:
          <input
            type="text"
            name="name-input"
            id="name-input"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição da carta:
          <textarea
            name="description-input"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1-input">
          1° Atributo:
          <input
            type="number"
            name="attr1-input"
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          2° Atributo:
          <input
            type="number"
            name="attr2-input"
            id="attr2-input"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          3° Atributo:
          <input
            type="number"
            name="attr3-input"
            id="attr3-input"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Imagem da carta:
          <input
            type="text"
            name="image-input"
            id="image-input"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rare-input">
          Selecione a raridade:
          <select name="rare-input" id="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Está carta é um Super Trunfo?
          <input
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}
