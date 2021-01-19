import React, { createContext, useState } from 'react';

import Alert from '../components/UI/Alert';

const INITIAL_STATE = {
  isOpen: false,
  title: '',
  message: '',
  buttonText: '',
  type: '',
};

export const AlertContext = createContext(INITIAL_STATE);
export default ({ children }) => {
  const [alertState, setAlertState] = useState(INITIAL_STATE);

  const alert = (title, message, buttonText = 'OK') => {
    setAlertState({ isOpen: true, message, title, buttonText });
  };

  const close = () => {
    setAlertState(INITIAL_STATE);
  };

  return (
    <>
      <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>
      <Alert {...alertState} close={close} />
    </>
  );
};
