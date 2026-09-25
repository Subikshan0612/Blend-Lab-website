import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";

const title = "Get a Quote — Blend Lab";
const description =
  "Request a custom quote from Blend Lab: describe your part, quantity, material, finish and timeline.";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 hero-light" aria-hidden="true" />
      <Container className="relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Quote request"
            title="Tell us what you want to build"
            description="The more detail you give, the closer the estimate. Rough is fine — we will come back with questions."
          />
          <ul className="flex flex-col gap-4 border-t border-border pt-8">
            {["What it is", "How many", "Size and material", "Finish and timeline"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="size-1 bg-cyan" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </Container>
    </section>
  );
}
