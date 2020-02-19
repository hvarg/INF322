/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { Reducer } from 'redux';
import { LOGIN, LOGOUT } from '../actions/user.js';
import { RootAction } from '../store.js';

export interface UserState {
  isLoggedIn: Boolean,
  userInfo: UserInfo,
  error: String
}

export interface UserInfo {
  userName: String,
  password: String
}

const INITIAL_STATE: UserState = {
  isLoggedIn: false,
  userInfo: {
    userName: "",
    password: ""
  },
  error: ""
};

const user: Reducer<UserState, RootAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      let userNameIn = action.userName;
      let passwordIn = action.password;
      // let user : UserInfo = state.userInfo;
      let error = "";
      if( userNameIn == "root" && passwordIn == "toor" ){
        return {
            ...state,
            isLoggedIn: true,
            userInfo: {
              userName: userNameIn,
              password: passwordIn
            }
        };
      } else{
        error = "No se ha podido iniciar sesión, revisa tu nombre de usuario y contraseña";
        return {
          ...state,
          error: error,
        };
      }
    case LOGOUT:
        return {
          ...INITIAL_STATE,
        };
    default:
      return state;
  }
};

export default user;
