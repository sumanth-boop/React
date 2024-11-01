import { BrowserRouter, Link, Route,  Routes } from 'react-router-dom'
import './App.css'
 import Home from './Home'
import NonVeg from './NonVeg'
import Veg from './Veg'
import PurchaseHistory from './PurchaseHistory'
import AboutUs from './AboutUs'
import Cart from './Cart'
import ContactUs from './ContactUs';
import { useSelector } from 'react-redux'
//import GoogleLoginComponent from './GoogleLoginComponent'
//import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {

  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum,item) => sum+item.quantity,0);
  return (
    <>
   

<BrowserRouter>
<nav>
<Link to="/home">Home</Link>
<Link to="/veg">Veg</Link>
<Link to="/nonveg">NonVeg</Link>
<Link to="/cart">Cart({totalItems}) </Link>
<Link to="/purchasehistory">PurchaseHistory</Link>
<Link to="/aboutus">AboutUs</Link>
<Link to="/contactus">ContactUs</Link>

</nav>
<Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/veg" element={<Veg/>}></Route>
  <Route path="/nonveg" element={<NonVeg/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  <Route path="purchasehistory" element={<PurchaseHistory/>}></Route>
  <Route path="/aboutus" element={<AboutUs/>}></Route>
<Route path="/contactus" element={<ContactUs/>}></Route>
</Routes>

</BrowserRouter>



    </>
  )
}

export default App