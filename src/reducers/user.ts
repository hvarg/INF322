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
  isLoggedIn: Boolean
}

const INITIAL_STATE: UserState = {
  isLoggedIn: false,
};

const user: Reducer<UserState, RootAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
        return {
            ...state,
            isLoggedIn: (Math.random() > .5)
        };
    case LOGOUT:
        return {
            ...state,
            isLoggedIn: false
        };
    default:
      return state;
  }
};

export default user;
