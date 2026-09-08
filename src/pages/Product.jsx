import { useState } from "react";
import { Minus, Plus, Check, MessageCircle } from "lucide-react";
import { Button, Head, ProductCard } from "../components/UI";
import { products } from "../data";
export default function Product({ product, onAdd }) {
  const [q, setQ] = useState(1);
  const [img, setImg] = useState(product.image);
  const [added, setAdded] = useState(false);
  const add = () => {
    onAdd(product, q);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
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
          <div className="price">${product.price.toFixed(2)}</div>
          <p>
            {product.description} Because every piece is handmade, yours will be
            beautifully one-of-a-kind.
          </p>
          <div className="quantity">
            <button onClick={() => setQ(Math.max(1, q - 1))}>
              <Minus />
            </button>
            <b>{q}</b>
            <button onClick={() => setQ(q + 1)}>
              <Plus />
            </button>
          </div>
          <button className="whatsapp" onClick={add}>
            {added ? "Added to Bag ✓" : "Add to Bag"}
          </button>
          <a
            className="whatsapp secondary"
            href="https://wa.me/61400000000"
            target="_blank"
          >
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
          <div className="note">
            <MessageCircle size={18} /> Message us on 6397522455 — we
            usually reply within an hour.
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
              Free shipping on orders over $50
            </li>
          </ul>
        </div>
      </section>
      <section className="related">
        <Head title="You May Also Like" />
        <div className="productGrid">
          {products
            .filter((p) => p.id !== product.id)
            .map((p) => (
              <ProductCard p={p} onAdd={onAdd} key={p.id} />
            ))}
        </div>
      </section>
    </>
  );
}
