import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./app/pages/home/index";
import Post from "./app/pages/post/index";

import { Header } from "./components/header";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
