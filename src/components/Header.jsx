import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
export default function Header({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Shop", "/shop"],
    ["Collections", "/collections"],
    ["Our Craft", "/about"],
    ["Contact", "/contact"],
  ];
  return (
    <>
      <header className="nav">
        <a className="brand" href="#/">
          <Logo />
          <span>
            <b>Defined Art Gallery</b>
            <small>HANDCRAFTED PRODUCTS</small>
          </span>
        </a>
        <nav className="desktopLinks">
          {links.map(([t, h]) => (
            <a href={"#" + h} key={t}>
              {t}
            </a>
          ))}
          <a className="cartLink" href="#/cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && <em>{cartCount}</em>}
          </a>
          <a className="btn small" href="#/shop">
            Shop Now
          </a>
        </nav>
        <button
          className="mobileToggle"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <div className="mobileMenu">
          {links.map(([t, h]) => (
            <a onClick={() => setOpen(false)} href={"#" + h} key={t}>
              {t}
            </a>
          ))}
          <a onClick={() => setOpen(false)} href="#/cart">
            Shopping Bag {cartCount ? `(${cartCount})` : ""}
          </a>
          <a className="btn" onClick={() => setOpen(false)} href="#/shop">
            Shop Now
          </a>
        </div>
      )}
    </>
  );
}
