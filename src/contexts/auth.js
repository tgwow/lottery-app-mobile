import React, { useMemo, useReducer, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  checkoutExpiration,
  doRecoveryPassword,
  doSign,
  doSignOut,
} from '../utils/http';
import useAlert from '../hooks/useAlert';

export const AuthContext = createContext();

const intialAuthState = {
  token: '',
  isLoading: false,
  error: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
      };
    case 'SIGNIN':
      return {
        ...state,
        token: action.token,
        isLoading: false,
      };
    case 'SIGNOUT':
      return {
        ...state,
        token: '',
        isLoading: false,
        error: '',
      };
    case 'RECOVERY_PASSWORD':
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    default:
      return { ...state };
  }
};

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, intialAuthState);
  const alert = useAlert();

  useEffect(() => {
    async function bootstrapAsync() {
      try {
        const [[, token], [, expirationTime]] = await AsyncStorage.multiGet([
          '@token',
          '@expirationTime',
        ]);
        if (!token) doSignOut(dispatch);
        const timeInMs = new Date().getTime();
        const expirationInMs = new Date(+expirationTime).getTime();
        if (expirationInMs < timeInMs) doSignOut(dispatch);
        else {
          checkoutExpiration(expirationInMs - timeInMs, dispatch, token);
          dispatch({ type: 'SIGNIN', token });
        }
      } catch (e) {
        console.log('[useEffect[AsyncStorage.getItem]]', e);
      }
    }
    bootstrapAsync();
  }, []);
  const authContext = useMemo(
    () => ({
      signUp: async (data) => {
        await doSign(dispatch, data, '/users', 'signUp', alert);
      },
      signIn: async (data) => {
        await doSign(dispatch, data, '/sessions', null, alert);
      },
      signOut: () => {
        doSignOut(dispatch);
      },
      recoveryPassword: (data, navigation) => {
        doRecoveryPassword(
          dispatch,
          data,
          '/forgot_password',
          navigation,
          alert
        );
      },
      ...auth,
    }),
    [auth]
  );
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
