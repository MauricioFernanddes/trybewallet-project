import { SAVE_CURRENCY, SAVE_WALLET_FORM_DATA, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_WALLET_FORM_DATA:
    return {
      ...state,
      expenses: [...state.expenses, action.walletFormData],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...action.expenses],
    };
  default:
    return state;
  }
};

export default walletReducer;
