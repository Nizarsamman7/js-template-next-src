import { site } from "@/data/site";

export function Services() {
  return (
    <section className="cards">
      {site.services.map((service) => (
        <article key={service.title}>
          <h2>{service.title}</h2>
          <p>{service.text}</p>
        </article>
      ))}
    </section>
  );
}
