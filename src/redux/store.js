import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as creatStore } from 'redux';
import thunk from 'redux-thunk';

const store = creatStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
}
export default store;
