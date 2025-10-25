import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import educationImage from "@/assets/heroimages/educationimage.jpg"
import homeLoan from "@/assets/heroimages/homeloan.jpg"
import commercialProject from "@/assets/heroimages/commercialImage.jpg"
import personalBusiness from "@/assets/heroimages/personalImage.jpg"
import vehicleInstant from "@/assets/heroimages/vechileImage.jpg"
import msmeImage from "@/assets/heroimages/msmeImage.jpg"
import insuranceImage from "@/assets/heroimages/insuranceImage.jpg"
import creditCardAccount from "@/assets/heroimages/creditCardImage.jpg"


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
    image: homeLoan,
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
    image: commercialProject,
  },
  {
    id: "msme",
    title: "M.SM.E / SME",
    description: "Working capital and term loans tailored for SMEs.",
    image: msmeImage,
  },
  {
    id: "personal-business",
    title: "Personal, Business",
    description: "Unsecured personal and business loans with fast disbursal.",
    image: personalBusiness,
    rate: "10.49%",
  },
  {
    id: "vehicle-instant",
    title: "Vehicle, Instant",
    description: "Quick loans for new and used vehicles with instant decisioning.",
    image: vehicleInstant,
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
    image: educationImage,
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Comprehensive insurance products for life, health, and assets.",
    image: insuranceImage,
  },
  {
    id: "credit-card-account",
    title: "Credit Card, Account Open",
    description: "Compare credit cards and instantly open accounts online.",
    image: creditCardAccount,
  },
];
