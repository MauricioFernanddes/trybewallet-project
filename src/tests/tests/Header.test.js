import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../helpers/renderWith';

import Header from '../../components/Header';

describe('Testa componente Header', () => {
  it('Header', () => {
    renderWithRouterAndRedux(<Header />);
    expect(screen.getByTestId('header-currency-field')).toBeInTheDocument();
    expect(screen.getByTestId('total-field')).toBeInTheDocument();
  });
});
