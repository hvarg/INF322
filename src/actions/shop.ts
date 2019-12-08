/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store.js';
import { ListaCursos} from '../reducers/shop.js';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

export interface ShopActionGetProducts extends Action<'GET_PRODUCTS'> {products: ListaCursos};
export interface ShopActionAddToCart extends Action<'ADD_TO_CART'> {productId: string};
export interface ShopActionRemoveFromCart extends Action<'REMOVE_FROM_CART'> {productId: string};
export interface ShopActionCheckoutSuccess extends Action<'CHECKOUT_SUCCESS'> {};
export interface ShopActionCheckoutFailure extends Action<'CHECKOUT_FAILURE'> {};
export type ShopAction = ShopActionGetProducts | ShopActionAddToCart | ShopActionRemoveFromCart | ShopActionCheckoutSuccess | ShopActionCheckoutFailure;

type ThunkResult = ThunkAction<void, RootState, undefined, ShopAction>;

const PRODUCT_LIST = [
  { "id": 1, "sigla": 'IWI131', "asignatura": 'Programación', "departamento": 'Informática' , "paralelos": [{ "id": 1, "profesor": 'profe1', "cupos": 20},  { "id": 2, "profesor": 'profe2', "cupos": 30}]},
  { "id": 3, "sigla": 'FIS100', "asignatura": 'Introducción a la Física', "departamento": 'Física' , "paralelos": [{"id": 1, "profesor": 'Hakobyan', "cupos": 50}] },
  { "id": 4, "sigla": 'MAT021' , "asignatura": 'Matemáticas I', "departamento": 'Matemáticas', "paralelos": [{"id": 1, "profesor": 'El maravilloso Yansen', "cupos": 25}] },
  { "id": 5, "sigla": 'MAT022' , "asignatura": 'Matemáticas II' , "departamento": 'Matemáticas' , "paralelos": [{"id": 1, "profesor": 'tuma', "cupos": 14}] } 
];

export const getAllProducts: ActionCreator<ThunkResult> = () => (dispatch) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // successfully got the data back).
  // You could reformat the data in the right format as well.

  const products = PRODUCT_LIST.reduce((obj, product) => {
    obj[product.id] = product
    return obj
  }, {} as ListaCursos);

  dispatch({
    type: GET_PRODUCTS,
    products
  });
};

export const checkout: ActionCreator<ThunkResult> = () => (dispatch) => {
  // Here you could do things like credit card validation, etc.
  // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
  // by flipping a coin :)
  const flip = Math.floor(Math.random() * 2);
  if (flip === 0) {
    dispatch({
      type: CHECKOUT_FAILURE
    });
  } else {
    dispatch({
      type: CHECKOUT_SUCCESS
    });
  }
};

export const addToCart: ActionCreator<ThunkResult> = (productId) => (dispatch, getState) => {
  var state = getState();
  state = state;
  dispatch(addToCart(productId));
  // Just because the UI thinks you can add this to the cart
  // doesn't mean it's in the inventory (user could've fixed it).
  //if (state.shop!.products[productId].inventory > 0) {
  //  dispatch(addToCartUnsafe(productId));
  //}
};

export const removeFromCart: ActionCreator<ShopActionRemoveFromCart> = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
};

export const addToCartUnsafe: ActionCreator<ShopActionAddToCart> = (productId) => {
  return {
    type: ADD_TO_CART,
    productId
  };
};
