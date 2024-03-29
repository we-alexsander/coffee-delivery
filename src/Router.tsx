import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import OrderPlaced from "./pages/OderPlaced";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderPlaced />} />
      </Route>
    </Routes>
  );
}

export default Router;
