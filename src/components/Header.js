import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  getExpenses = () => {
    const { expenses } = this.props;
    const asks = expenses.map((expense) => (
      Number(expense.exchangeRates[expense.currency].ask) * Number(expense.value)));

    const total = asks.reduce((acc, curr) => acc + curr, 0).toFixed(2);

    return total;
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <section>
          <p>TrybeWallet</p>
        </section>
        <section>
          <p>
            <span>Total de despesas: </span>
            <span data-testid="total-field">
              { this.getExpenses() }
            </span>
            <span data-testid="header-currency-field">BRL </span>
          </p>
        </section>
        <section>
          <p data-testid="email-field">{ email }</p>
        </section>
      </div>
    );
  }
}
const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default connect(mapStateToProps)(Header);
