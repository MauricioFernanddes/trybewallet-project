const currencyApi = 'https://economia.awesomeapi.com.br/json/all';

const getCurrency = async () => {
  const fetchCurrency = await fetch(currencyApi);
  const response = await fetchCurrency.json();
  return response;
};

export default getCurrency;
