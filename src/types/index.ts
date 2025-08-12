// Leaf.io Data Models

export interface User {
  id: string
  name: string
  ageBracket: 'under18' | '18-25' | '26-35' | '36-50' | '50+'
  region: string
  currency: string
  riskLevel: number // 1-5
  values: string[]
  avoids: string[]
  notifPrefs: NotificationPreferences
  parentGuardianEmail?: string
}

export interface NotificationPreferences {
  goalHits: boolean
  billReminders: boolean
  lowBalance: boolean
  learningStreaks: boolean
  priceAlerts: boolean
}

export interface Budget {
  income: number
  categories: BudgetCategory[]
}

export interface BudgetCategory {
  name: string
  cap: number
  spent: number
  color: string
  type: 'needs' | 'wants' | 'savings' | 'climate'
}

export interface Transaction {
  id: string
  date: string
  merchant: string
  amount: number
  category: string
  recurring?: boolean
  tags?: string[]
}

export interface ImpactTheme {
  id: string
  name: string
  sdgs: number[]
  description: string
  projects: Project[]
  color: string
  icon: string
}

export interface Project {
  id: string
  name: string
  region: string
  blurb: string
  verification: string
  estImpact: string
  caseStudy?: string
  imageUrl?: string
  fundingGoal: number
  currentFunding: number
}

export interface SimPortfolio {
  id: string
  themes: string[]
  weeklyAmount: number
  risk: number
  mockReturnSeries: number[]
  mockImpactSeries: ImpactMetric[]
}

export interface ImpactMetric {
  metric: string
  value: number
  unit: string
  description: string
}

export interface LessonCard {
  id: string
  title: string
  description: string
  content: string
  duration: number // minutes
  category: string
  completed: boolean
  progress: number // 0-100
}