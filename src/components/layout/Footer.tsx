import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";

const columns = [
  {
    heading: "Studio",
    links: [
      { label: "Work", to: "/work" },
      { label: "Services", to: "/services" },
      { label: "About", to: "/about" },
    ],
  },
  {
    heading: "Start",
    links: [
      { label: "Get a Quote", to: "/quote" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div className="flex flex-col gap-5">
          <Wordmark />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Digital fabrication studio. 3D printing, prototyping and finishing for ideas that
            deserve to exist.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-4">
            <span className="label-mono">{column.heading}</span>
            {column.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </Container>

      <Container className="flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="label-mono">© {new Date().getFullYear()} Blend Lab</span>
        <span className="label-mono">Build. Create. Blend.</span>
      </Container>
    </footer>
  );
}
