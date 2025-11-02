import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import educationImage from "@/assets/heroimages/educationimage.png"
import homeLoan from "@/assets/heroimages/homeloan.png"
import commercialProject from "@/assets/heroimages/commercialImage.png"
import personalBusiness from "@/assets/heroimages/personalImage.png"
import vehicleInstant from "@/assets/heroimages/vechileImage.png"
import msmeImage from "@/assets/heroimages/msmeImage.png"
import insuranceImage from "@/assets/heroimages/insuranceImage.png"
import creditCardAccount from "@/assets/heroimages/creditCardImage.png"


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

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  services: string[];
  color: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "home-loans-commercial-property",
    title: "Home Loans & Commercial Property",
    description: "Secure loans for residential and commercial properties (Secure)",
    services: [
      "Mortgage-LAP Loans",
      "Land Purchase",
      "Warehouse",
      "Home Equity",
      "Industries",
      "Loans Against Property",
      "HELOC",
      "Hotel",
      "B.T. Topup",
      "Constructions",
      "Hospitals",
      "Refinance Loan",
      "School",
    ],
    color: "from-primary to-primary/80",
  },
  {
    id: "personal-instant-loans-credit-cards",
    title: "Personal, Instant Loans & Credit Cards",
    description: "Unsecured loans and credit card solutions (Unsecured)",
    services: [
      "Unsecure Personal",
      "Microfinance",
      "Home",
      "Debit",
      "Consolidation",
      "Pension",
      "Wedding Loans",
      "Emergency",
      "Vacations",
      "OD Loans",
      "All Types Equipment's Many More",
      "20+ Bank Credit Card",
      "Instant/Microfinance (10k to 50 Lakh)",
    ],
    color: "from-accent to-accent/80",
  },
  {
    id: "business-loans-accounts",
    title: "Business Loans & All Types Account Open",
    description: "Complete business financing and banking solutions",
    services: [
      "Small Business Loans",
      "Merchant Cash Advance",
      "Savings Account",
      "Startup Loans",
      "Invoices Finance",
      "Working Capital",
      "Equipment Finance",
      "Demit Account",
      "Current Account",
      "Business Line of Credits",
      "And Many More",
    ],
    color: "from-primary/90 to-primary/70",
  },
  {
    id: "specialized-loans-franchised",
    title: "Specialized Loans & Franchised Models",
    description: "350+ Bank-NBFC franchised models and specialized services",
    services: [
      "Patta",
      "Agriculture",
      "Medical Loans",
      "Notary",
      "Gift Deed",
      "M.S.M.E Govt. Loans",
      "Pavti",
      "Gold Loans",
      "C.C Limit",
      "Tax Slip",
      "Private Funding",
      "All Types Property Register Work",
      "Franchised Share Model",
      "Passive Income",
      "Two Pairs Chain Income",
      "Digital Working Fintech/MFI",
    ],
    color: "from-primary/80 to-accent/60",
  },
  {
    id: "vehicle-loans",
    title: "Vehicle Loans - New & Old",
    description: "Complete vehicle financing solutions",
    services: [
      "Truck Loan",
      "Car Loan",
      "Bike Loan",
      "JCB Loan",
      "All Types Commercial Vehicle Loan",
      "All Types Electric Vehicle Loans",
      "And Many More",
    ],
    color: "from-accent/90 to-accent/70",
  },
  {
    id: "investment-education-loans",
    title: "Investment Services & Education Loans",
    description: "Comprehensive investment and education financing",
    services: [
      "Passive Income",
      "Instant Deals",
      "Parent Plus Loan",
      "Mutual Funds",
      "Trading Services",
      "SIP",
      "Credit Line",
      "Refinance Student Loan",
      "Student Loans (GOVT.)",
      "Private Student Loan",
      "FD",
      "Recurring Deposit",
      "Voluntary Provident Fund",
      "Employees Provident Fund",
      "Public Provident Fund",
      "Senior Citizen Saving Scheme",
      "National Pension Scheme",
      "ELSS",
      "National Saving Certificate",
    ],
    color: "from-primary to-primary/90",
  },
  {
    id: "insurance-mediclaim",
    title: "Insurance & Mediclaim Policy",
    description: "Complete insurance and health coverage solutions (Many More)",
    services: [
      "Life Insurance",
      "General Insurance",
      "Heart Mediclaim",
      "Health Insurance",
      "Medical Insurance",
      "Education Insurance",
      "Home, Travel Insurance",
      "Property Insurance",
      "All Types Auto Insurance",
      "Retreatment Insurance",
      "All Type Auto Insurance Old New",
      "Financial Protection",
      "Cyber Insurance",
      "Complete Family Mediclaim",
      "Critical Mediclaim",
    ],
    color: "from-primary/85 to-accent/70",
  },
  {
    id: "taxation-utility-services",
    title: "Taxation & Utility Services",
    description: "Complete tax planning and compliance services (Many More)",
    services: [
      "Tax Planning",
      "NRI Tax Services",
      "GST Services",
      "Tax Return",
      "GST Return",
      "ITR Filing",
      "Advance Tax Payments",
      "Corporate Tax Compliances",
      "Tax Audit Assistance",
      "TDS Management",
      "Customs & Indirect Taxes",
    ],
    color: "from-accent/85 to-accent/65",
  },
  {
    id: "bank-partners",
    title: "350+ Bank & NBFC Partners",
    description: "Unlock 285+ Portals with Powerful & Extensive Services",
    services: [
      "HDFC",
      "Kotak Mahindra",
      "TATA CAPITAL",
      "AXIS",
      "IDFC",
      "SBI",
      "ICICI",
      "BAJAJ Finance",
      "Aditya Birla",
      "AU Bank",
      "IIFL",
      "Money Wide",
      "YES BANK",
      "Ujjivan",
      "Chola Manndalam",
      "And Many More",
    ],
    color: "from-primary to-accent",
  },
  {
    id: "kiosk-services",
    title: "BankFincorp Kiosk: 300+ Online Services",
    description: "300+ Online Services in One Place",
    services: [
      "Online Registration for All States",
      "Instant Loan",
      "Credit Card",
      "GST Account",
      "Franchise Share",
      "Insurance",
      "Mediclaim",
      "SME LOAN",
      "Taxation & Utility Services",
      "Investment Services",
      "Financial Advisor IQ",
      "MSME LOAN",
    ],
    color: "from-primary/90 to-accent/80",
  },
];

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
    image: "https://images.caxton.co.za/wp-content/uploads/sites/56/2021/10/16689214063_aae190af_84325_tn.jpg",
  },
  {
    id: "education",
    title: "Education",
    description: "Education loans for higher studies in India and abroad.",
    image: educationImage,
  },
  {
    id: "investment",
    title: "Investment",
    description: "Smart investment products to grow your wealth.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&auto=format&fit=crop",
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
  {
    id: "msme",
    title: "M.SM.E / SME",
    description: "Working capital and term loans tailored for SMEs.",
    image: msmeImage,
  },
  {
    id: "commercial-project",
    title: "Commercial Project",
    description: "Funding for commercial real estate and development projects.",
    image: commercialProject,
  },
];
