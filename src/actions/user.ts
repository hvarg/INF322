import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface UserActionLogin extends Action<'LOGIN'> {userName: String, password: String};
export interface UserActionLogout extends Action<'LOGOUT'> {};

export type UserAction = UserActionLogin | UserActionLogout ;

type ThunkResult = ThunkAction<void, RootState, undefined, UserAction>;

export const login: ActionCreator<ThunkResult> = (userName, password) => (dispatch) => {

  dispatch({
    type: LOGIN,
    userName: userName,
    password: password
  });
}

export const logout: ActionCreator<ThunkResult>= () => (dispatch) => {

  dispatch({
    type: LOGOUT
  });
}
