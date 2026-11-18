import type { ImageMetadata } from "astro";

import gotPlateLunch from "./assets/work/gotplatelunch.webp";
import jobWatch from "./assets/work/jobwatch.webp";
import padilla from "./assets/work/padilla.webp";
import ripple from "./assets/work/ripple.webp";

export const site = {
  name: "Morgan Stovold",
  title: "Morgan Stovold — Developer & EMT",
  description:
    "Morgan Stovold builds websites, apps, and tools in the Bay Area. Also an EMT, working toward paramedic school.",
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
    title: "EMT Job Watch",
    kind: "Personal tool · job alerts",
    year: "2026",
    url: "https://jobs.stovold.dev",
    image: jobWatch,
    summary:
      "Good EMT jobs can close within minutes of posting, so I built a watcher that checks 14 Bay Area job boards every minute and sends a push to my phone and an email the moment a 911 EMT or fire recruit opening goes up.",
    highlights: [
      "14 boards checked every minute",
      "Push alerts with email fallback",
      "Hiring emails become timed reminders",
    ],
    stack: ["TypeScript", "Cloudflare Workers", "D1", "Queues", "Workflows", "Alchemy", "Pushover"],
  },
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

export const timeline = [
  { when: "2019", what: "Writes first lines of code", note: "Games, scripts, and a lot of broken websites." },
  {
    when: "2025",
    what: "Freelancing for local businesses",
    note: "Sites for a remodeler, a restaurant, and a nonprofit.",
  },
  { when: "Mar 2026", what: "Certified EMT", note: "" },
  { when: "Jun 2026", what: "Working as an EMT", note: "On an ambulance across the Bay Area." },
  { when: "Next", what: "Paramedic school", note: "Applications in progress." },
  { when: "Goal", what: "Paramedic firefighter", note: "" },
];
