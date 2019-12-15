import CartTypes from './cart.types';

const INITIAL_STATE = {
  cartItems: [
    {
      id: 3,
      size: 'small',
      colour: 'green'
    }
  ],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartTypes.REMOVE_ITEM_FROM_CART :
      return {
        ...state,
        cartItems : state.cartItems.filter(cartItem => cartItem.id !== 3)
      }
      case CartTypes.ADD_ITEM_TO_CART :
        return {
          ...state,
          cartItems : [...state.cartItems, action.payload]
        }
      default: 
        return state;
  }
}

export default cartReducer;
