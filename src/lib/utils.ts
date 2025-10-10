import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ServiceItem = {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  image: string;
  rate?: string;
  features?: string[];
  eligibility?: string[];
};

export const bankFincorpServices: ServiceItem[] = [
  {
    id: "home-loan",
    title: "Home Loan",
    tagline: "Simpler, Faster, Friendlier",
    description: "Own your dream home with attractive interest rates and flexible tenure.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format&fit=crop",
    rate: "7.60%",
    features: ["Loan up to 90% of property value", "Tenure up to 30 years", "Tax benefits"],
    eligibility: ["Age 21-65", "Credit score 750+", "Minimum income criteria"],
  },
  {
    id: "industrial-project",
    title: "Industrial Project",
    description: "Finance for machinery, plant setup, and capacity expansion.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "commercial-project",
    title: "Commercial Project",
    description: "Funding for commercial real estate and development projects.",
    image: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "msme",
    title: "M.SM.E / SME",
    description: "Working capital and term loans tailored for SMEs.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "personal-business",
    title: "Personal, Business",
    description: "Unsecured personal and business loans with fast disbursal.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80&auto=format&fit=crop",
    rate: "10.49%",
  },
  {
    id: "vehicle-instant",
    title: "Vehicle, Instant",
    description: "Quick loans for new and used vehicles with instant decisioning.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "investment",
    title: "Investment",
    description: "Smart investment products to grow your wealth.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "education",
    title: "Education",
    description: "Education loans for higher studies in India and abroad.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Comprehensive insurance products for life, health, and assets.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "mediclaim",
    title: "Mediclaim",
    description: "Health coverage with cashless claims across partner hospitals.",
    image: "https://images.unsplash.com/photo-1580281658629-47d8bb39ab6c?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "kiosk",
    title: "Kiosk",
    description: "On-site kiosks for assisted financial services and onboarding.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "credit-card-account",
    title: "Credit Card, Account Open",
    description: "Compare credit cards and instantly open accounts online.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1600&q=80&auto=format&fit=crop",
  },
];
