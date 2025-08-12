import { User, Budget, ImpactTheme, Project, LessonCard, Transaction } from "@/types"

export const mockUser: User = {
  id: "1",
  name: "Alex Chen",
  ageBracket: "18-25",
  region: "North America",
  currency: "USD",
  riskLevel: 3,
  values: ["Climate Action", "Clean Water", "Renewable Energy"],
  avoids: ["fossil fuels", "weapons", "tobacco"],
  notifPrefs: {
    goalHits: true,
    billReminders: true,
    lowBalance: true,
    learningStreaks: true,
    priceAlerts: false
  }
}

export const mockBudget: Budget = {
  income: 3500,
  categories: [
    { name: "Needs", cap: 1750, spent: 1420, color: "hsl(var(--muted))", type: "needs" },
    { name: "Wants", cap: 1050, spent: 890, color: "hsl(var(--accent))", type: "wants" },
    { name: "Savings", cap: 525, spent: 525, color: "hsl(var(--success))", type: "savings" },
    { name: "Climate", cap: 175, spent: 125, color: "hsl(var(--primary))", type: "climate" }
  ]
}

export const impactThemes: ImpactTheme[] = [
  {
    id: "renewable",
    name: "Renewable Energy",
    sdgs: [7, 13],
    description: "Solar, wind, and clean energy infrastructure",
    color: "hsl(45 100% 60%)",
    icon: "☀️",
    projects: [
      {
        id: "solar-1",
        name: "Community Solar Garden",
        region: "Colorado, USA",
        blurb: "200kW solar installation powering 50 homes",
        verification: "Gold Standard Certified",
        estImpact: "Prevents 300 tons CO2/year",
        fundingGoal: 450000,
        currentFunding: 280000
      },
      {
        id: "wind-1",
        name: "Offshore Wind Farm",
        region: "Scotland",
        blurb: "15MW wind installation for coastal communities",
        verification: "UN CDM Verified",
        estImpact: "Powers 4,500 homes annually",
        fundingGoal: 850000,
        currentFunding: 620000
      }
    ]
  },
  {
    id: "resilience",
    name: "Climate Resilience",
    sdgs: [11, 13, 15],
    description: "Adaptation and nature-based solutions",
    color: "hsl(120 100% 40%)",
    icon: "🌳",
    projects: [
      {
        id: "coastal-1",
        name: "Living Seawalls",
        region: "Miami, USA",
        blurb: "Mangrove restoration for storm protection",
        verification: "Nature Conservancy Partnership",
        estImpact: "Protects 2km coastline from flooding",
        fundingGoal: 320000,
        currentFunding: 195000
      }
    ]
  },
  {
    id: "water",
    name: "Clean Water",
    sdgs: [6, 14],
    description: "Water access, treatment, and ocean protection",
    color: "hsl(200 100% 50%)",
    icon: "💧",
    projects: [
      {
        id: "water-1",
        name: "Solar Water Purification",
        region: "Kenya",
        blurb: "Solar-powered water treatment for rural communities",
        verification: "WHO Standards Compliant",
        estImpact: "Clean water for 1,200 people",
        fundingGoal: 75000,
        currentFunding: 45000
      }
    ]
  }
]

export const mockTransactions: Transaction[] = [
  { id: "1", date: "2024-01-15", merchant: "Green Grocery", amount: -85.50, category: "Needs" },
  { id: "2", date: "2024-01-14", merchant: "Solar Co-op", amount: -25.00, category: "Climate", recurring: true },
  { id: "3", date: "2024-01-14", merchant: "Coffee Shop", amount: -4.50, category: "Wants" },
  { id: "4", date: "2024-01-13", merchant: "Salary Deposit", amount: 1750.00, category: "Income" },
  { id: "5", date: "2024-01-12", merchant: "Sustainable Fashion", amount: -120.00, category: "Wants" }
]

export const lessonCards: LessonCard[] = [
  {
    id: "impact-vs-esg",
    title: "Impact vs ESG: What's the difference?",
    description: "Learn why labels are messy and what really matters",
    content: "ESG screens out bad actors, but impact investing actively seeks positive change...",
    duration: 3,
    category: "Basics",
    completed: false,
    progress: 0
  },
  {
    id: "green-bonds",
    title: "What is a green bond?",
    description: "How governments and companies fund climate projects",
    content: "Green bonds are debt securities specifically earmarked to raise money for climate and environmental projects...",
    duration: 2,
    category: "Investing",
    completed: true,
    progress: 100
  },
  {
    id: "no-offsets",
    title: "Why we don't do carbon offsets",
    description: "The case for direct project finance over offsets",
    content: "While offsets can play a role, we believe in funding real, additional climate solutions...",
    duration: 4,
    category: "Philosophy",
    completed: false,
    progress: 30
  }
]