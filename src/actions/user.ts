import { Action, ActionCreator } from 'redux';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface UserActionLogin extends Action<'LOGIN'> {}
export interface UserActionLogout extends Action<'LOGOUT'> {}

export type UserAction = UserActionLogin | UserActionLogout ;

export const login: ActionCreator<UserActionLogin> = () => {

  return {
    type: LOGIN
  };
}

export const logout: ActionCreator<UserActionLogout>= () => {

  return {
    type: LOGOUT
  };
}
