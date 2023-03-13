import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
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
            <span data-testid="total-field">0 </span>
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
const mapStateToProps = ({ user }) => ({
  email: user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);
