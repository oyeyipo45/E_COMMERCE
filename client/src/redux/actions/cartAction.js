import  axios  from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM,CART_SAVE_PAYMENT, CART_SAVE_SHIPPING} from "./../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      }
    });

    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    console.log(cartItems, "inside action");
    
  
  } catch (error) {
    console.log(error);
  }
};


export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type :CART_REMOVE_ITEM,
    payload: productId
  });

  const {cart: {cartItems}} = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
  
}


export const saveShipping = (data) => (dispatch) => {
  dispatch({type: CART_SAVE_SHIPPING, payload : data})

  // const {shipping} = getState();
  // Cookie.set("shipping", JSON.stringify(shipping));
}



export const savePayment = (data) => (dispatch) => {
  dispatch({type: CART_SAVE_PAYMENT, payload : data})
}