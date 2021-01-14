import api from '../services/api';
import { storeData, clearData } from './localStorage';

function catchError(err) {
  // TODO: If server is offline, this data will isn't catch in catch statement
  if (err.message === 'Network Error')
    return 'Error: 500 - Something is wrong with our server, please, contact us! ';
  return Array.isArray(err.response.data)
    ? err.response.data[0].message
    : err.response.data.error.message;
}

export const doSignOut = (dispatch) => {
  const keysToClear = ['@token', '@expirationTime', '@userId'];
  clearData(keysToClear);
  dispatch({ type: 'SIGNOUT' });
};

export const checkoutExpiration = (expiresIn, dispatch, token) => {
  setTimeout(() => {
    doSignOut(dispatch);
  }, expiresIn);
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const doSign = async (dispatch, userData, url, type) => {
  dispatch({ type: 'LOADING' });
  try {
    const {
      data: { expiresIn, token, userId },
    } = await api.post(url, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const expirationTime = String(new Date().getTime() + +expiresIn);
    const dataToStore = { expirationTime, token, userId };
    await storeData(dataToStore);

    dispatch({ type: 'SIGNIN', token });
    checkoutExpiration(50000, dispatch, token);
    if (type) alert('Your account was successfully created!');
  } catch (e) {
    console.log(`[${type || 'doSign'}[api.post(${url})]]`, e);
    const error = catchError(e);
    dispatch({ type: 'ERROR', error });
    alert(error);
  }
};

export const doRecoveryPassword = async (dispatch, data, url, navigation) => {
  dispatch({ type: 'LOADING' });
  data.redirect_url = 'http://localhost:3000/new-password';
  try {
    await api.post(url, data);
    dispatch({ type: 'RECOVERY_PASSWORD' });
    alert('We sent you a recovery link. Please, check your inbox!');
    navigation.push('SignIn');
  } catch (e) {
    console.log(`[doRecoveryPassword'}[api.post(${url})]]`, e);
    const error = catchError(e);
    dispatch({ type: 'ERROR', error });
    alert(error);
  }
};
