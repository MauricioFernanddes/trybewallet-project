import { USER_EMAIL_SAVE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL_SAVE:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};
export default userReducer;
