import { Container } from "./container";

const links = [
  { label: "Home", href: "#" },
  { label: "Overview", href: "#overview" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="text-base font-semibold text-stone-950">
            Starter
          </a>

          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-6 text-sm text-stone-600">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-stone-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
