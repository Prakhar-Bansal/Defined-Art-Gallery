import { Heart, Sparkles, Leaf } from "lucide-react";
import { Head } from "../components/UI";
import { imgs } from "../data";
export default function About() {
  return (
    <>
      <section className="aboutHero">
        <Head
          eyebrow="OUR STORY"
          title="A Little Studio, A Lot of Heart"
          sub="Defined Art Gallery began at a kitchen table with a handful of beads and a big idea — that everyday accessories should feel like tiny works of art."
        />
      </section>
      <section className="aboutStory">
        <img src={imgs.craft} alt="Handmade craft" />
        <div>
          <div className="eyebrow">HOW IT STARTED</div>
          <h2>Handmade, Never Mass-Produced</h2>
          <p>
            What started as a hobby became a passion. Every clutcher, clip, band
            and key ring is still made by hand in small batches — no factories,
            no shortcuts.
          </p>
          <p>
            We choose our materials carefully, test every design ourselves, and
            pack each order like it's a gift. Because to us, it is.
          </p>
          <p>
            When you shop with us, you're supporting a small, handmade business
            and taking home something truly one-of-a-kind.
          </p>
        </div>
      </section>
      <section className="values">
        <Head eyebrow="WHAT WE BELIEVE" title="Our Little Promises" />
        <div className="valueGrid">
          {[
            [
              <Heart />,
              "Made with Love",
              "Every piece is crafted by hand, with care poured into every detail.",
            ],
            [
              <Sparkles />,
              "Truly Unique",
              "No two items are exactly alike — you get something one-of-a-kind.",
            ],
            [
              <Leaf />,
              "Small & Ethical",
              "A tiny, ethical business using quality, responsibly sourced materials.",
            ],
          ].map(([icon, t, d]) => (
            <article key={t}>
              <div className="valueIcon">{icon}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="stats">
        {[
          ["5,000+", "Happy customers"],
          ["100%", "Handmade to order"],
          ["4.9★", "Average rating"],
          ["50+", "Unique designs"],
        ].map((x) => (
          <div key={x[1]}>
            <b>{x[0]}</b>
            <span>{x[1]}</span>
          </div>
        ))}
      </section>
    </>
  );
}
