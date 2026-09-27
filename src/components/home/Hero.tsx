import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      <p>{site.city}</p>
      <h1>{site.name}</h1>
      <p className="lede">{site.description}</p>
      <Link className="button" href="/contact">
        Contact
      </Link>
    </section>
  );
}
