import React, { Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Routes, Route } from "react-router-dom";
import { fetchProducts } from "./features/product/productSlice";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./pages/SignUp";
import Card from "./pages/Card";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import { NotFound } from "./pages/NotFound";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(
      dispatch(fetchProducts({ sort: "", category: "", page: 1, search: "" }))
    );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Card />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="product/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Details />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
