export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 1,
    icon: "✦",
    title: "UI/UX Design",
    description:
      "We design intuitive, beautiful interfaces that delight users and drive engagement — from wireframes to polished prototypes.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    icon: "⬡",
    title: "Web Development",
    description:
      "High-performance, scalable web applications built with the latest technologies — pixel-perfect and lightning-fast.",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    icon: "◈",
    title: "Branding",
    description:
      "Craft a bold identity that speaks to your audience. Logos, color systems, and brand guidelines that stand the test of time.",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    icon: "◉",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that grow your brand. SEO, social media, paid ads, and content strategies that convert.",
    color: "from-emerald-500 to-teal-600",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Brand Identity",
    category: "Branding",
    imageSrc: "/portfolio/brand-identity.png",
    tags: ["Logo Design", "Brand System", "Print"],
  },
  {
    id: 2,
    title: "Pulse Analytics Dashboard",
    category: "Web Development",
    imageSrc: "/portfolio/saas-dashboard.png",
    tags: ["SaaS", "React", "Data Viz"],
  },
  {
    id: 3,
    title: "Aura Luxury Store",
    category: "UI/UX Design",
    imageSrc: "/portfolio/ecommerce.png",
    tags: ["E-Commerce", "Figma", "Shopify"],
  },
  {
    id: 4,
    title: "Vibe Fitness App",
    category: "UI/UX Design",
    imageSrc: "/portfolio/mobile-app.png",
    tags: ["Mobile", "iOS", "Health"],
  },
  {
    id: 5,
    title: "Prisma Motion Reel",
    category: "Motion Design",
    imageSrc: "/portfolio/motion-graphics.png",
    tags: ["Animation", "After Effects", "3D"],
  },
  {
    id: 6,
    title: "Bloom Social Campaign",
    category: "Digital Marketing",
    imageSrc: "/portfolio/social-campaign.svg",
    tags: ["Social Media", "Campaign", "Content"],
  },
];
