import { ArrowRight } from "lucide-react";
export function Button({
  children,
  href,
  outline = false,
  onClick,
  type = "button",
}) {
  return href ? (
    <a href={"#" + href} className={"btn " + (outline ? "outline" : "")}>
      {children}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={"btn " + (outline ? "outline" : "")}
    >
      {children}
    </button>
  );
}
export function Head({ eyebrow, title, sub }) {
  return (
    <div className="head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
export function ProductCard({ p, onAdd, cart = {} }) {
  const quantity = cart[p.id] || 0;

  const decrease = () => {
    onAdd(p, -1);
  };

  const increase = () => {
    onAdd(p, 1);
  };

  return (
    <article className="product">
      <a href={"#/product/" + p.id}>
        <div className="productImage">
          <img src={p.image} alt={p.name} />
          {p.badge && <span>{p.badge}</span>}
        </div>

        <h3>{p.name}</h3>
      </a>

      <div className="priceAction">
        <b>₹{p.price.toFixed(2)}</b>

        {onAdd &&
          (quantity === 0 ? (
            <button className="quickAdd" onClick={() => onAdd(p, 1)}>
              Add to bag
            </button>
          ) : (
            <div className="quantityControl">
              <button onClick={decrease}>−</button>
              <span>{quantity}</span>
              <button onClick={increase}>+</button>
            </div>
          ))}
      </div>
    </article>
  );
}
export function CategoryCard({ c }) {
  return (
    <article className="category">
      <a href={"#/shop?category=" + c.id}>
        <img src={c.image} alt={c.name} />
        <h3>{c.name}</h3>
        <p>{c.desc}</p>
        <span>
          SHOP NOW <ArrowRight size={14} />
        </span>
      </a>
    </article>
  );
}
