import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/header";

import { Home } from "./app/pages/home";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
