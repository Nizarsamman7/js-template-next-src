import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <p>{site.name}</p>
      <p>
        {site.city} · {site.phone}
      </p>
    </footer>
  );
}
