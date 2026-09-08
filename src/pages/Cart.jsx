import { Minus, Plus, Trash2 } from "lucide-react";
import { Button, Head } from "../components/UI";
import { products } from "../data";
import { sendBagToWhatsApp } from "../utils/whatsapp";
export default function Cart({ cart, setCart }) {
  const rows = Object.entries(cart)
    .map(([id, q]) => ({ p: products.find((x) => x.id === id), q }))
    .filter((x) => x.p);
  const total = rows.reduce((s, x) => s + x.p.price * x.q, 0);
  const change = (id, d) =>
    setCart((c) => {
      const n = Math.max(0, (c[id] || 0) + d);
      const next = { ...c };
      if (n) next[id] = n;
      else delete next[id];
      return next;
    });
  return (
    <>
      <section className="pageHeader compact">
        <Head eyebrow="YOUR ORDER" title="Shopping Bag" />
      </section>
      {!rows.length ? (
        <section className="empty">
          <h2>Your bag is empty</h2>
          <p>Discover a few handmade pieces and add your favourites here.</p>
          <Button href="/shop">Continue Shopping</Button>
        </section>
      ) : (
        <section className="cartMain">
          <div className="cartItems">
            {rows.map(({ p, q }) => (
              <article key={p.id}>
                <img src={p.image} alt={p.name} />
                <div className="cartItemInfo">
                  <h3>{p.name}</h3>
                  <span>
                    {p.category === "clutchers"
                      ? "Hair Clutchers"
                      : p.category === "clips"
                      ? "Hair Clips"
                      : p.category === "bands"
                      ? "Hair Bands"
                      : "Key Rings"}
                  </span>
                  <div className="cartBottom">
                    <div className="quantity">
                      <button onClick={() => change(p.id, -1)}>
                        <Minus />
                      </button>
                      <b>{q}</b>
                      <button onClick={() => change(p.id, 1)}>
                        <Plus />
                      </button>
                    </div>
                    <strong>${(p.price * q).toFixed(2)}</strong>
                  </div>
                  <button
                    className="remove"
                    onClick={() =>
                      setCart((c) => {
                        const n = { ...c };
                        delete n[p.id];
                        return n;
                      })
                    }
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
          <aside className="summary">
            <h2>Order Summary</h2>
            <Row l="Subtotal" v={"$" + total.toFixed(2)} />
            <Row
              l="Shipping"
              v={total >= 50 ? "Free" : "Calculated at checkout"}
            />
            <Row l="Handmade to order" v="2–4 days" />
            <div className="sumTotal">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
            <Button
              onClick={() => sendBagToWhatsApp()}
              className="whatsapp-checkout-btn"
            >
              Order via WhatsApp
            </Button>
            <p>
              Secure checkout — we'll confirm your order details before it
              ships.
            </p>
          </aside>
        </section>
      )}
    </>
  );
}
function Row({ l, v }) {
  return (
    <div className="sumRow">
      <span>{l}</span>
      <b>{v}</b>
    </div>
  );
}
