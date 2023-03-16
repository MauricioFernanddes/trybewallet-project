import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';

import { saveUserEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleValidation = () => {
    const { email, password } = this.state;

    const MIN_CHARACTER_PASSWORD = 6;

    const validateEmail = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const validatePassword = password.length >= MIN_CHARACTER_PASSWORD;

    this.setState({
      isDisabled: !(validateEmail && validatePassword),
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.handleValidation);
  };

  handleClick = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(saveUserEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="page-login">
        <form onSubmit={ this.handleClick } className="form-login">
          <input
            className="field-login"
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            placeholder="digite seu E-mail"
            onChange={ this.handleChange }
          />
          <input
            className="field-login"
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            placeholder="digite sua Senha"
            onChange={ this.handleChange }
          />
          <button
            className="field-login btn-login"
            type="submit"
            disabled={ isDisabled }
          >
            <h1>Entrar</h1>
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null)(Login);
