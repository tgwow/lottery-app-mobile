import { useContext } from 'react';
import { AlertContext } from '../contexts/alert';

const useAlert = () => {
  return useContext(AlertContext);
};

export default useAlert;
