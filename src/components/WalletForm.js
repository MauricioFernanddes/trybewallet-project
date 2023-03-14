import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, saveWalletFormData } from '../redux/actions';
import getCurrency from '../services/currecyApi';

class WalletForm extends Component {
  state = {
    id: -1,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const exchangeRates = await getCurrency();
    delete exchangeRates.USDT;
    this.setState((prevState) => ({
      id: prevState.id + 1,
      exchangeRates,
    }), () => {
      const { dispatch } = this.props;
      dispatch(saveWalletFormData(this.state));

      this.setState({
        value: '',
        description: '',
      });
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="inputNumber">
          Valor:
          <input
            data-testid="value-input"
            id="inputNumber"
            type="text"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((currencyItem, i) => (
              <option
                key={ i }
                value={ currencyItem }
              >
                {currencyItem}
              </option>))}
          </select>
        </label>

        <label htmlFor="methodPayment">
          Método de pagamento:
          <select
            name="method"
            id="methodPayment"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria
          <select
            name="tag"
            id="category"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
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
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
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
