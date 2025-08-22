import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/Header";

import { Home } from "./app/pages/home";
import { Checkout } from "./app/pages/checkout";
import { Success } from "./app/pages/success";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
