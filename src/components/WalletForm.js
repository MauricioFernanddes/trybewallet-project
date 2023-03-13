import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="inputNumber">
            Valor:
            <input
              name="inputNumber"
              id="inputNumber"
              type="number"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select name="currency" id="currency" data-testid="currency-input">
              { currencies.map((currency, i) => (
                <option
                  key={ i }
                  value={ currency }
                >
                  {currency}
                </option>))}
            </select>
          </label>

          <label htmlFor="methodPayment">
            Método de pagamento:
            <select name="methodPayment" id="methodPayment" data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Categoria
            <select name="category" id="category" data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
export default connect(mapStateToProps)(WalletForm);
