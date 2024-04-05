import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutUs from './Components/Aboutus/AboutUs';
import Login from './Components/Login/Login';
import ShopPage from './Components/Shop/ShopPage';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import AddProduct from './Components/Admin/AddProduct';
import CartPage from './Components/Cart/CartPage';
import AccountPage from './Components/Account/AccountPage';

import AddBrand from './Components/Admin/AddBrand';
import ShowBrand from './Components/Admin/ShowBrand';
import EditBrand from './Components/Admin/EditBrand';
import ShowProduct from './Components/Admin/ShowProduct';
import EditProduct from './Components/Admin/EditProduct';
import AddCategory from './Components/Admin/AddCategory';
import AddSubCategory from './Components/Admin/AddSubCategory'
import ShowCategory from './Components/Admin/ShowCategory';
import EditCategory from './Components/Admin/EditCategory';
import ShowSubCategory from './Components/Admin/ShowSubCategory';
import EditSubCategory from './Components/Admin/EditSubCategory';
import ShowProductDetail from './Components/Shop/ShowProductDetail';
import EditAddress from './Components/Account/EditAddress';
import SelectAddress from './Components/Account/SelectAddress';
import AddAddress from './Components/Account/AddAddress';
import EditAddressById from './Components/Account/EditAddressById';
import PlaceOrder from './Components/Cart/PlaceOrder';
import MyOrders from './Components/Account/MyOrders';
import MyOrderDetails from './Components/Account/MyOrderDetails';
import ShowOrders from './Components/Admin/ShowOrders';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminHomePage from './Components/Admin/AdminHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<AboutUs></AboutUs>} />
      <Route path ="/Login" element={<Login></Login>} />
      <Route path ="/Account" element={<AccountPage></AccountPage>} />
      <Route path ="/SelectAddress" element={<SelectAddress/>} />
      <Route path ="/AddAddress" element={<AddAddress />} />
      {/*<Route path ="/EditAddress" element={<EditAddress />} />
      <Route path ="/EditAddressById/:id" element={<EditAddressById />} />*/}

      <Route path ="/MyOrders" element={<MyOrders />} />
      <Route path ="/MyOrderDetails/:id" element={<MyOrderDetails />} />

      <Route path ="/PlaceOrder/:id" element={<PlaceOrder />} />
      <Route path ="/Cart" element={<CartPage></CartPage>} />
      
      <Route path ="/AddProduct" element={<AddProduct />} />
      <Route path ="/ShowProduct" element={<ShowProduct />} />
      <Route path ="/EditProduct/:id" element={<EditProduct />} />
      <Route path="/EditAddress" element={<EditAddress/>}></Route>
      
      <Route path ="/AddBrand" element={<AddBrand />} />
      <Route path ="/ShowBrand" element={<ShowBrand />} />
      <Route path ="/EditBrand/:id" element={<EditBrand />} />
      
      <Route path ="/AddCategory" element={<AddCategory />} />
      <Route path ="/ShowCategory" element={<ShowCategory />} />
      <Route path ="/EditCategory/:id" element={<EditCategory />} />
      
      <Route path ="/AddSubCategory" element={<AddSubCategory />} />
      <Route path ="/ShowSubCategory" element={<ShowSubCategory />} />
      <Route path ="/EditSubCategory/:id" element={<EditSubCategory />} />

      <Route path ="/ShowOrders" element={<ShowOrders />} />

      <Route path ="/Shop" element={<ShopPage />} />
      <Route path="/ShowProductDetail/:id" element={<ShowProductDetail />} />
      <Route path="/Register" element={<Register></Register>}/>
      <Route path ="/Contact" element={<Contact></Contact>}/>
      <Route path ="/AdminLogin" element={<AdminLogin></AdminLogin>}/>
      <Route path ="/AdminHomePage" element={<AdminHomePage></AdminHomePage>}/>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
