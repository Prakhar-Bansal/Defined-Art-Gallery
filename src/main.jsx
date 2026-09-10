import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { products } from "./data";
import "./styles.css";

const STORAGE = "defined-art-gallery-cart";
function getPath() {
  return window.location.hash.replace(/^#\/?/, "").split("?")[0] || "";
}
function App() {
  const [path, setPath] = useState(getPath());
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE)) || {};
    } catch {
      return {};
    }
  });
  useEffect(() => {
    const fn = () => {
      setPath(getPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", fn);
    return () => window.removeEventListener("hashchange", fn);
  }, []);
  useEffect(() => localStorage.setItem(STORAGE, JSON.stringify(cart)), [cart]);
  const onAdd = (p, q = 1) => {
    setCart((c) => {
      const newCart = { ...c };
      const newQuantity = (newCart[p.id] || 0) + q;

      if (newQuantity <= 0) {
        delete newCart[p.id];
      } else {
        newCart[p.id] = newQuantity;
      }

      return newCart;
    });
  };
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  let page;
  if (path === "shop") page = <Shop onAdd={onAdd} cart={cart} />;
  else if (path.startsWith("product/")) {
    const id = path.slice(8);
    const p = products.find((x) => x.id === id) || products[0];
    page = <Product product={p} onAdd={onAdd} cart={cart} />;
  } else if (path === "collections") page = <Collections />;
  else if (path === "about") page = <About />;
  else if (path === "contact") page = <Contact />;
  else if (path === "cart") page = <Cart cart={cart} setCart={setCart} />;
  else page = <Home onAdd={onAdd} />;
  return <Layout cartCount={count}>{page}</Layout>;
}

createRoot(document.getElementById("root")).render(<App />);
