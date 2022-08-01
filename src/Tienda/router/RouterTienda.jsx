import { Routes, Route } from "react-router-dom";
import { Carshopping } from "../Components/CarroShopping/Carshopping";
import {Pagos} from "../Components/CarroShopping/Pagos";
import Footer from "../Components/Footer/Footer";
import { NavBar } from "../Components/Header/NavBar";
import Product from "../Components/Products/ProductsDetail";
import { Categoryproducts } from "../Pages/Categoryproducts";
import { Home } from "../Pages/Home";
import { Loegado } from "../Pages/Logeado";
import { Page404 } from "../Pages/Page404";

export const RouterTienda = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Product/:id" element={<Product/>} />
        <Route path="Category/:id" element={<Categoryproducts/>} />
        <Route path="Logeado" element={<Loegado/>}/>
        <Route path="cart" element={<Carshopping/>}/>
        <Route path="checkout" element={<Pagos/>} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
    <Footer/>
    </>
  );
};
