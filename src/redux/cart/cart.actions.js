import CartTypes from './cart.types';

export const removeItemFromCart = (item) => ({
  type : CartTypes.REMOVE_ITEM_FROM_CART,
  payload : item,
});

export const addItemToCart = (item) => ({
  type : CartTypes.ADD_ITEM_TO_CART,
  payload : item,
});
