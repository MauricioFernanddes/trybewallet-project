export const USER_EMAIL_SAVE = 'USER_EMAIL_SAVE';

export const saveUserEmail = (email) => ({
  type: USER_EMAIL_SAVE,
  payload: email,
});
