import type { ImageMetadata } from "astro";

import gotPlateLunch from "./assets/work/gotplatelunch.webp";
import padilla from "./assets/work/padilla.webp";
import ripple from "./assets/work/ripple.webp";

export const site = {
  name: "Morgan Stovold",
  title: "Morgan Stovold — Web developer & EMT",
  description:
    "Morgan Stovold builds fast, hand-coded websites for small businesses and nonprofits in the Bay Area. Also an EMT, working toward paramedic school.",
  email: "morgan@stovold.dev",
  location: "Benicia, California",
  region: "Bay Area",
  github: { user: "morganstovold", url: "https://github.com/morganstovold" },
  social: [
    { label: "GitHub", href: "https://github.com/morganstovold" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/morgan-stovold-428b0b354/" },
    { label: "Instagram", href: "https://www.instagram.com/morgan_stovold/" },
  ],
};

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export interface Project {
  title: string;
  kind: string;
  year: string;
  url: string;
  image: ImageMetadata;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "The Ripple Effect of Life",
    kind: "Nonprofit foundation",
    year: "2026",
    url: "https://therippleeffect.stovold.dev",
    image: ripple,
    summary:
      "A home for a Benicia foundation honoring James Baldwin's life of service: scholarships, community events, a sponsor wall, and a news section the family can keep up to date.",
    highlights: ["Events & news collections", "Spam-proof contact form", "Edge-hosted on Cloudflare"],
    stack: ["Astro", "Cloudflare Workers", "Alchemy", "Tailwind", "Resend"],
  },
  {
    title: "Padilla Design & Build",
    kind: "Construction & remodeling",
    year: "2025",
    url: "https://padilla-construction.vercel.app",
    image: padilla,
    summary:
      "A ground-up rebuild for a kitchen and bath remodeler, replacing a stock GoDaddy template with a fast custom site and a contact form that drops leads straight into Jobber.",
    highlights: ["Delivered in 7 days", "100 Lighthouse performance", "Jobber lead intake"],
    stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Got Plate Lunch",
    kind: "Hawaiian restaurant & food truck",
    year: "2025",
    url: "https://gotplatelunch.vercel.app",
    image: gotPlateLunch,
    summary:
      "A bright, mobile-first site for a Hawaiian plate lunch spot, with the menu, food truck schedule, catering, and locations up front for people deciding where to eat.",
    highlights: ["Menu & food truck pages", "Catering inquiries", "Built for phones first"],
    stack: ["Next.js", "React", "Tailwind"],
  },
];

export const services = [
  {
    title: "Design & build",
    body: "A custom site designed around your business, not a template with your logo dropped in. Written by hand, so it stays fast and easy to change.",
  },
  {
    title: "Speed & search",
    body: "Clean markup, compressed images, and the technical SEO basics done right, so you show up when locals search and load before they give up.",
  },
  {
    title: "Hosting & care",
    body: "Deployed on Cloudflare's network with no monthly platform fees to speak of. I stick around for updates, fixes, and new pages when you need them.",
  },
];

export const timeline = [
  { when: "2019", what: "Writes first lines of code", note: "Games, scripts, and a lot of broken websites." },
  { when: "2025", what: "Freelancing for local businesses", note: "Remodelers, restaurants, and a nonprofit." },
  { when: "Mar 2026", what: "Certified EMT", note: "" },
  { when: "Jun 2026", what: "Working as an EMT", note: "On an ambulance across the Bay Area." },
  { when: "Next", what: "Paramedic school", note: "Applications in progress." },
  { when: "Goal", what: "Paramedic firefighter", note: "" },
];
