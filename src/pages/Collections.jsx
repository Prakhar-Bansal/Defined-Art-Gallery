import { Button, Head } from "../components/UI";
import { categories } from "../data";
export default function Collections() {
  return (
    <>
      <section className="pageHeader">
        <Head
          eyebrow="OUR COLLECTIONS"
          title="Explore Every Collection"
          sub="From bold clutchers to charming key rings — browse our handmade ranges and order your favourites on WhatsApp."
        />
      </section>
      <section className="collectionsList">
        {categories.map((c, i) => (
          <article key={c.id}>
            <div className="collectionText">
              <span>0{i + 1}</span>
              <h2>{c.name}</h2>
              <p>{c.long}</p>
              <Button href={"/shop?category=" + c.id}>View Products</Button>
            </div>
            <img src={c.image} alt={c.name} />
          </article>
        ))}
      </section>
    </>
  );
}
