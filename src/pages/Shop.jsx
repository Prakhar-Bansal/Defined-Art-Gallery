import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Head, ProductCard } from "../components/UI";
import { products } from "../data";
export default function Shop({ onAdd }) {
  const params = new URLSearchParams(location.hash.split("?")[1] || "");
  const initial = params.get("category") || "all";
  const [filter, setFilter] = useState(initial);
  const [sort, setSort] = useState("featured");
  const list = useMemo(() => {
    let a =
      filter === "all"
        ? products
        : products.filter((p) => p.category === filter);
    if (sort === "price-low") a = [...a].sort((x, y) => x.price - y.price);
    if (sort === "price-high") a = [...a].sort((x, y) => y.price - x.price);
    return a;
  }, [filter, sort]);
  return (
    <>
      <section className="pageHeader">
        <Head
          eyebrow="ALL PRODUCTS"
          title="Shop the Collection"
          sub="Handmade hair accessories, crafted one at a time. Filter by what you love."
        />
      </section>
      <div className="filterBar">
        <div>
          {[
            ["all", "All"],
            ["clutchers", "Clutchers"],
            ["clips", "Clips"],
            ["bands", "Bands"],
            ["rings", "Key Rings"],
          ].map(([v, l]) => (
            <button
              className={filter === v ? "active" : ""}
              onClick={() => setFilter(v)}
              key={v}
            >
              {l}
            </button>
          ))}
        </div>
        <label className="sort">
          Sort:{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to high</option>
            <option value="price-high">Price: High to low</option>
          </select>
          <ChevronDown size={15} />
        </label>
      </div>
      <section className="shopGrid">
        {list.map((p) => (
          <ProductCard p={p} onAdd={onAdd} key={p.id} />
        ))}
      </section>
    </>
  );
}
