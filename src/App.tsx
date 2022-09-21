import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./pages/SignUp";
import Card from "./pages/Card";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { NotFound } from "./pages/NotFound";

function App() {
  
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
