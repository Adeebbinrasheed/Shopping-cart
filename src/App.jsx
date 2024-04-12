import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";

import bannermens from "../src/assets/bannermens.png";
import bannerwomens from "../src/assets/bannerwomens.png";
import bannerkids from "../src/assets/bannerkids.png";
import ShopContextProvider from "./Context/ShopContext";

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category Category="men" banner={bannermens} />}
          />
          <Route
            path="/womens"
            element={<Category Category="women" banner={bannerwomens} />}
          />
          <Route
            path="/kids"
            element={<Category Category="kid" banner={bannerkids} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </div>
  );
};

export default App;
