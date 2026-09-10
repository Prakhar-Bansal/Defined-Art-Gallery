import { useState } from "react";
import { Button, Head, ProductCard, CategoryCard } from "../components/UI";
import { imgs, categories, products, testimonials } from "../data";
export default function Home({ onAdd }) {
  const [email, setEmail] = useState(""),
    [done, setDone] = useState(false);
  return (
    <>
      <section className="hero">
        <img src={imgs.hero} alt="Handcrafted accessories" />
        <div className="overlay" />
        <div className="heroContent">
          <div className="eyebrow inverse">HANDMADE WITH LOVE</div>
          <h1>Wear a Little Piece of Art</h1>
          <p>
            Handcrafted hair clutchers, clips, bands and key rings.
          </p>
          <div className="actions">
            <Button href="/shop">Shop the Collection</Button>
            <Button outline href="/about">
              Explore Our Craft
            </Button>
          </div>
        </div>
      </section>
      <section className="trust">
        <span>100% HANDMADE</span>
        <span>UNIQUE DESIGNS</span>
        <span>ETHICALLY CRAFTED</span>
        <span>FREE SHIPPING OVER ₹999</span>
      </section>
      <section className="section">
        <Head
          eyebrow="OUR COLLECTIONS"
          title="Shop by Category"
          sub="Every piece is thoughtfully handmade to add a touch of art to your everyday."
        />
        <div className="categoryGrid">
          {categories.map((c) => (
            <CategoryCard c={c} key={c.id} />
          ))}
        </div>
      </section>
      <section className="craft">
        <div>
          <div className="eyebrow">OUR CRAFT</div>
          <h2>Made by Hand, Made to Last</h2>
          <p>
            At Defined Art Gallery, every clutcher, clip, band and key ring
            begins as an idea and is shaped entirely by hand. We source quality
            materials and pour care into every detail — so no two pieces are
            ever exactly alike.
          </p>
          <p>
            When you wear our accessories, you carry a small piece of art — and
            the story of the hands that made it.
          </p>
          <Button href="/about">Learn More</Button>
        </div>
        <img src={imgs.craft} alt="Craft process" />
      </section>
      <section className="section center">
        <Head eyebrow="LOVED BY MANY" title="Our Bestsellers" />
        <div className="productGrid">
          {products.map((p) => (
            <ProductCard p={p} onAdd={onAdd} key={p.id} />
          ))}
        </div>
        <Button outline href="/shop">
          View All Products
        </Button>
      </section>
      <section className="section testimonials" id="reviews">
        <Head eyebrow="KIND WORDS" title="What Our Customers Say" />
        <div className="testimonialGrid">
          {testimonials.map(([q, a]) => (
            <article key={a}>
              <div className="stars">★ ★ ★ ★ ★</div>
              <p>{q}</p>
              <b>{a}</b>
            </article>
          ))}
        </div>
      </section>
      <section className="cta">
        <div className="eyebrow soft">JOIN THE GALLERY</div>
        <h2>Find Your Perfect Piece Today</h2>
        <p>
          Handmade in small batches. Subscribe for 10% off your first order and
          first look at new drops.
        </p>
        {done ? (
          <div className="success">Thank you — you’re on the list.</div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button>Subscribe</button>
          </form>
        )}
      </section>
    </>
  );
}
