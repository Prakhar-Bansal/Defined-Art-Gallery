import { useState } from "react";
import { Minus, Plus, Check, MessageCircle } from "lucide-react";
import { Button, Head, ProductCard } from "../components/UI";
import { products } from "../data";
export default function Product({ product, onAdd, cart }) {
  const quantity = cart[product.id] || 0;

  const [img, setImg] = useState(product.image);

  const decrease = () => {
    onAdd(product, -1);
  };

  const increase = () => {
    onAdd(product, 1);
  };

  return (
    <>
      <div className="breadcrumb">
        <a href="#/">Home</a>
        <span>/</span>
        <a href="#/shop">Shop</a>
        <span>/</span>
        <b>{product.name}</b>
      </div>
      <section className="productMain">
        <div className="gallery">
          <img className="mainProduct" src={img} alt={product.name} />
          <div className="thumbs">
            {[product.image, product.image, product.image].map((x, i) => (
              <button
                className={img === x && i === 0 ? "selected" : ""}
                onClick={() => setImg(x)}
                key={i}
              >
                <img src={x} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="productInfo">
          <div className="eyebrow">
            {product.category === "clutchers"
              ? "HAIR CLUTCHERS"
              : product.category === "clips"
                ? "HAIR CLIPS"
                : product.category === "bands"
                  ? "HAIR BANDS"
                  : "KEY RINGS"}
          </div>
          <h1>{product.name}</h1>
          <div className="rating">
            <span>★ ★ ★ ★ ★</span> <small>(48 reviews)</small>
          </div>
          <div className="price">₹{product.price.toFixed(2)}</div>
          <p>
            {product.description} Because every piece is handmade, yours will be
            beautifully one-of-a-kind.
          </p>
          {onAdd &&
            (quantity === 0 ? (
              <button className="whatsapp" onClick={() => onAdd(product, 1)}>
                Add to Bag
              </button>
            ) : (
              <div className="quantity">
                <button onClick={decrease}>
                  <Minus />
                </button>
                <b>{quantity}</b>
                <button onClick={increase}>
                  <Plus />
                </button>
              </div>
            ))}

          <a
            className="whatsapp secondary"
            href="https://wa.me/61400000000"
            target="_blank"
          >
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
          <div className="note">
            <MessageCircle size={18} /> Message us on 6397522455 — we usually
            reply within an hour.
          </div>
          <ul>
            <li>
              <Check />
              Handmade to order in small batches
            </li>
            <li>
              <Check />
              Materials: {product.material}
            </li>
            <li>
              <Check />
              {product.size}
            </li>
            <li>
              <Check />
              Free shipping on orders over ₹50
            </li>
          </ul>
        </div>
      </section>
      <section className="related">
        <Head title="You May Also Like" />
        <div className="productGrid">
          {["clutchers", "clips", "bands", "rings"]
            .sort(() => Math.random() - 0.5)
            .map((category) => {
              const available = products.filter(
                (p) =>
                  p.category === category && !cart[p.id] && p.id !== product.id,
              );
              if (available.length === 0) return null;

              const randomProduct =
                available[Math.floor(Math.random() * available.length)];

              return randomProduct;
            })
            .filter(Boolean)
            .map((p) => (
              <ProductCard p={p} onAdd={onAdd} cart={cart} key={p.id} />
            ))}
        </div>
      </section>
    </>
  );
}
