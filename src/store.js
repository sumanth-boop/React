import { configureStore, createSlice } from "@reduxjs/toolkit";
//import Veg from "./Veg";


const productsSlice = createSlice({
        name:'products',
        initialState:{
            Veg:[  
                {name:'onion',price:400.5},
                {name:'potato',price:500.6},
                {name:'Brinjal',price:700.5},
                {name:'Beetroot',price:124.4},
                {name:'Tomato', price:344}
              
  ],
  nonveg:[
    {name:'chicken',price:500.6},
    {name:'prawns',price:450.5},
    {name:'Beef',price:100.45},
    {name:'Mutton',price:564.6},
    {name:'Fish',price:767}
  ],

        },
        reducers:{}
    });



  


    const cartSlice = createSlice(
        {
          name:'cart',
          initialState :[],
          reducers:{
            addToCart:(state,action) =>{
              const status = state.find(item => item.name === action.payload.name);
      
              if(status){
                item.quantity+=1;
              }
              else{
                state.push({...action.payload,quantity:1});
              }
            },
            incrementQuantity: (state, action) => {
              const item = state.find(item => item.name === action.payload);
              if (item) {
                item.quantity += 1;
              }
            },
            decrementQuantity: (state, action) => {
              const item = state.find(item => item.name === action.payload);
              if (item && item.quantity > 1) {
                item.quantity -= 1;
              }
              else{
                return state.filter(item => item.name !== action.payload);
              }
            },
            removeFromCart: (state, action) => {
              return state.filter(item => item.name !== action.payload);
            }
            
            
          }
        }
      )
      
      export const{addToCart,incrementQuantity, decrementQuantity, removeFromCart} =cartSlice.actions;
      
      
      // configure the store
      const store = configureStore({
        reducer: {
            products: productsSlice.reducer,
            cart: cartSlice.reducer
        }
      });
      
      export default store;