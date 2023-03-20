import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import Login from '../../pages/Login';
import App from '../../App';

const validEmail = 'alguem@alguem.com';
const validPassword = '123456';

describe('Testando a página Login', () => {
  it('teste se aparece um input de email quando a tela é renderizada', () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('teste a habilitação do botão com o preenchimento correto dos inputs ', () => {
    renderWithRouterAndRedux(<Login />);

    const enterButton = screen.getByRole('button', /entrar/i);
    expect(enterButton).toBeDisabled();
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(enterButton).not.toBeDisabled();
  });

  it('teste se ao realizar o login o email do usuário é salvo no estado global', () => {
    const { store } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    const enterButton = screen.getByRole('button', /entrar/i);

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    userEvent.click(enterButton);

    expect(store.getState().user.email).toBe(validEmail);
  });

  it('teste se ao clicar no botão Entrar o usuário é direcionado para rota /carteira', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const enterButton = screen.getByRole('button', /entrar/i);

    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    userEvent.click(enterButton);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/carteira');
  });
});
