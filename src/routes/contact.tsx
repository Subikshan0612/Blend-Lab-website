import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/brand-button";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/animations";

const title = "Contact — Blend Lab";
const description = "Get in touch with Blend Lab about custom 3D printing and fabrication projects.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

/** PLACEHOLDERS — replace with real Blend Lab contact details. */
const channels = [
  { label: "WhatsApp", value: "Add WhatsApp number", icon: MessageCircle },
  { label: "Instagram", value: "Add Instagram handle", icon: Instagram },
  { label: "Email", value: "Add studio email", icon: Mail },
];

function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 hero-light" aria-hidden="true" />
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Contact"
            title="Blend Lab"
            description="Send over a concept, a reference or a finished model file and we will tell you what it takes to make it real."
          />
          <ButtonLink to="/quote" size="lg" className="w-fit">
            Start a Project
          </ButtonLink>
        </div>

        <motion.ul
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex flex-col border-t border-border"
        >
          {channels.map((channel) => (
            <motion.li
              key={channel.label}
              variants={fadeUp}
              className="flex items-center justify-between gap-6 border-b border-border py-7"
            >
              <span className="flex items-center gap-4">
                <channel.icon className="size-5 text-cyan" aria-hidden="true" />
                <span className="font-display text-lg font-semibold">{channel.label}</span>
              </span>
              <span className="label-mono text-right">{channel.value}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
