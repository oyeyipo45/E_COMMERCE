// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/actions/cartAction";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CheckoutSteps from "../components/CheckoutSteps";

// const PlaceOrderScreen = (props) => {
//   const cart = useSelector((state) => state.cart);

//   const { cartItems } = cart;

 

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (productId) {
//       dispatch(addToCart(productId, qty));
//     }
//   }, []);

 
//   const checkoutHandler = () => {
//     props.history.push(`/signin?redirect=shipping`);
//   };

//   return (
//       <div >
//           <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
//     <div className={cartItems.length === 0 ? "cart-empty" : "cart"}>
//       <div className="cart-list">
//         <ul className="cart-list-container">
//           <li>
//             <h3>Shopping Cart</h3>
//             <h3>Price</h3>
//           </li>
//           {cartItems.length === 0 ? (
//             <div className="cart-empty-text">Cart Is Empty</div>
//           ) : (
//             cartItems.map((item) => (
//               <li key={item.id}>
//                 <div className="cart-image">
//                   <img src={item.image} alt="product" />
//                 </div>

//                 <div className="cart-name">
//                   <div>
//                     <Link to={`/product/${item.id}`}>{item.name}</Link>
//                   </div>
//                   <div className="cart-qty">
//                     <div>
//                       Qty:
                  
//                       <select
//                         value={item.qty}
//                         onChange={(e) =>
//                           dispatch(addToCart(item.id, e.target.value))
//                         }
//                       >
                       
//                        {[...Array(item.countInStock).keys()].map(
//                     (totalInStock) => (
//                       <option key={totalInStock + 1} value={totalInStock + 1}>
//                         {" "}
//                         {totalInStock + 1}{" "}
//                       </option>
//                     )
//                   )}
//                       </select>
//                     </div>

//                     <button
//                       className="cart-delete-button"
//                       type="button"
//                       onClick={() => removeFromCartHandler(item.id)}
//                     >
//                       Delete
//                     </button>

          
//                   </div>
//                 </div>
//                 <div className="cart-price">${item.price}</div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>

//       <div className="cart-action">
//         <ul>
//           <li className="cart-action-summary">
//             <h3>Summary</h3>
//           </li>

//           <li className="cart-action-subTotal">
//             <p>
//               Sub Total ( {cartItems.reduce((a, c) => a + Number(c.qty), 0)}{" "}
//               items)
//             </p>
//             <p> ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
//           </li>

//           <li className="cart-action-total">
//             <p>VAT </p>
//             <p>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
//           </li>

//           <li className="cart-action-total">
//             <p>Total </p>
//             <p>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
//           </li>

//           <li>
//             <button
//               onClick={checkoutHandler}
//               className="full-width button primary"
//               disabled={cartItems.length === 0}
//             >
//               Proceed To Checkout
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//       </div>
//   );
// };

// export default PlaceOrderScreen;
