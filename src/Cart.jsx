import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './store';


function Cart() {
  // Access the cart state from the Redux store
  const cartList = useSelector(state => state.cart);
  const dispatch = useDispatch();
    
const [couponCode,setCouponCode] = useState('');

const [couponDiscountPercentage,setCouponDiscountPercentage] = useState(0);
const handleApplyCoupon = ()=>
{
switch (couponCode.toUpperCase()) {
  case 'RATAN10':
        setCouponDiscountPercentage(10); 
         break;
  case 'RATAN20':
        setCouponDiscountPercentage(20);
        break;
  default:
    alert("invalid Coupon Code");
    setCouponDiscountPercentage(0);
}


}



  const [discount, setDiscount] = useState(0); 

  const calculatePrices = () => {
    const total = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discountedTotal = total*discount/100;
    let coupon = total*couponDiscountPercentage/100;
    let discountedPrice = total-discountedTotal-coupon;

    return { total, discountedTotal, discountedPrice,coupon };

  };
  const { total, discountedTotal, discountedPrice,coupon } = calculatePrices();


  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartList.length > 0 ? (
        <ul>
          {cartList.map((item, index) => (
            <li key={index}>

             
              <p>
             {item.name}
              price : {item.price}

                <button onClick={() => dispatch(decrementQuantity(item.name))}>-</button>
                Quantity: {item.quantity}
                <button onClick={() => dispatch(incrementQuantity(item.name))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.name))}>Remove</button>
              </p>
            </li>
          ))}
<h1>Apply  Discount </h1>
        <p>Total Amount: ${total.toFixed(2)}</p>
        <button onClick={() => setDiscount(10)}>Apply 10% Discount</button>
            <button onClick={() => setDiscount(20)}>Apply 20% Discount</button>
            <button onClick={() => setDiscount(30)}>Apply 30% Discount</button>
           
            <div>
           
            <p>Discounted Amount: ${discountedTotal.toFixed(2)}</p>
            <p>Coupon Discount Amount:${coupon.toFixed(2)}</p>
            <p>Discount Applied: {discount+couponDiscountPercentage}%</p>
            <p>Customer To Pay: ${discountedPrice.toFixed(2)}</p>
          </div>
          <input type="text"
               value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder='Enter Coupon Code'/>
               <button onClick={handleApplyCoupon}>Apply Coupon</button>

        </ul>
        
        
      ) : (
        <p>Your cart is empty.</p>
      )}

       {/* <button onClick={() => dispatch(clearCart())}>Clear Cart</button> */}

    </div>
  );
}

//brand veg range 6p
export default Cart;





















































`















`





// import React from 'react';
// import { useSelector } from 'react-redux';

// function Cart() {
//     const cartItems = useSelector(state => state.cart);

//     const items = cartItems.map((item, index) => (
//         <li key={index}>
//             {item.name} - ${item.price.toFixed(2)} x {item.quantity}
//         </li>
//     ));

//     return (
//         <div>
//             <h2>Cart</h2>
//             <ul>
//                 {items.length > 0 ? items : <p>Your cart is empty.</p>}
//             </ul>
//         </div>
//     );
// }

// export default Cart;




// const cartSlice =createSlice(

//     {
//         name:'cart',
//         initialState:[],
//         reducers:{
//             addToCart:(state,action)=>{

//                 const status=state.find(item=> item.name===action.payload.name);
//                 if(status){
//                     status.quantity+=1;
//                 }
//                 else{
//                     state.push({...action.payload,quantity:1});
//                 }
//             }
//         }
//     }
// );
// const store=configureStore({
//     reducer:{
//    products:productsSlice.reducer,
//   cart:cartSlice.reducer
//     }
// }) 
// export const{addToCart} = cartSlice.actions;
// export default store;




