export const EMAIL = "morgannstovold.work@gmail.com";

export const GITHUB = "https://github.com/morganstovold";
export const LINKEDIN = "https://www.linkedin.com/in/morgan-stovold-428b0b354/";
export const INSTAGRAM = "https://www.instagram.com/morgan_stovold/";

export const BIRTH_DATE = new Date(2007, 2, 6);
export const STARTED_PROGRAMMING_DATE = new Date(2019, 1, 1);

export enum ProjectStatus {
  InDevelopment = "In Development",
  Live = "Live",
}

export const PROJECTS = [
  {
    title: "FieldJolt",
    category: "SAAS PLATFORM",
    status: ProjectStatus.InDevelopment,
    description:
      "All-in-one field service management platform featuring extensible CRM, intelligent scheduling, dispatching, inventory management, invoicing, and proposal generation. Built for scalability and performance.",
    tags: ["Next.js", "PlanetScale", "Stripe", "QuickBooks", "Cloudflare"],
    metrics: ["Multi-tenant SaaS", "Real-time Sync", "API Integrations"],
    link: "https://fieldjolt.com/",
    featured: false,
  },
  {
    title: "Padilla Design & Build",
    category: "MODERN WEBSITE",
    status: ProjectStatus.Live,
    description:
      "Complete website rebuild for a construction and remodeling company. Transformed a basic GoDaddy template into a modern, high-performance site with perfect Lighthouse scores. Features integrated Jobber contact form and optimized SEO to increase local visibility.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "SEO"],
    metrics: ["7 Day Delivery", "100% PageSpeed", "Mobile First"],
    link: "https://padilla-construction.vercel.app/",
    featured: false,
  },
  {
    title: "East Bay Blinds",
    category: "MODERN WEBSITE",
    status: ProjectStatus.Live,
    description:
      "Complete redesign and development of a modern, fresh website for a window treatment company. Delivered a performant, SEO-optimized solution that significantly improved user experience and conversion rates.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    metrics: ["7 Day Delivery", "100% PageSpeed", "Mobile First"],
    link: "https://www.eastbayblinds.com/",
    featured: false,
  },
  {
    title: "Kelly Baldwin Realtor",
    category: "LUXURY REAL ESTATE",
    status: ProjectStatus.Live,
    description:
      "Sophisticated website for a local realtor emphasizing luxury aesthetics and premium user experience. Features property showcases, contact forms, and optimized performance across all devices.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    metrics: ["10 Day Delivery", "Luxury Design", "SEO Optimized"],
    link: "https://kellybaldwin-realtor.vercel.app/",
    featured: false,
  },
  {
    title: "Upstate Flush Pros Plumbing & Drain Cleaning",
    category: "MODERN WEBSITE",
    status: ProjectStatus.Live,
    description:
      "Modern, responsive website for a new plumbing business. Features contact forms, service showcases, and optimized performance across all devices.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    metrics: ["3 Day Delivery", "100% PageSpeed", "Mobile First"],
    link: "https://upstate-flush-pros-website.vercel.app/",
    featured: false,
  },
  {
    title: "Got Plate Lunch",
    category: "RESTAURANT WEBSITE",
    status: ProjectStatus.InDevelopment,
    description:
      "Modern, responsive website for a local Hawaiian restaurant. Features menu displays, online ordering preparation, and location information with a focus on mobile user experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "Mobile First"],
    link: "https://gotplatelunch.vercel.app/",
    featured: false,
  },
];
