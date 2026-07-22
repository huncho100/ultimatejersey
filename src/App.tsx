import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Clubs from "./pages/Clubs";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/clubs"
            element={<Clubs />}
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}