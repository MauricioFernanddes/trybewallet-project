import getCurrency from '../../services/currecyApi';

export const USER_EMAIL_SAVE = 'USER_EMAIL_SAVE';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';

export const saveUserEmail = (email) => ({
  type: USER_EMAIL_SAVE,
  payload: email,
});
const saveCurrency = (currencies) => ({
  type: SAVE_CURRENCY,
  payload: currencies,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await getCurrency();
  delete response.USDT;
  const currencies = Object.keys(response);
  dispatch(saveCurrency(currencies));
};
