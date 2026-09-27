import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="nav">
      <Link className="wordmark" href="/">
        {site.name}
      </Link>
      <nav>
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
