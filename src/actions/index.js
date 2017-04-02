import { CHANGE_AUTH } from './types';

export default function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
