import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Plus, TrendingUp, BookOpen } from "lucide-react"
import { mockBudget, mockUser, impactThemes, lessonCards } from "@/data/mockData"

export default function Dashboard() {
  const availableToAllocate = 150
  const monthlyGoal = 200
  const currentProgress = 125

  return (
    <AppLayout>
      <div className="container-mobile py-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-2xl">
            🌱
          </div>
          <h1 className="text-2xl font-bold text-gradient mb-2">Welcome back, {mockUser.name}</h1>
          <p className="text-muted-foreground">Budget. Learn. Sim your impact.</p>
        </div>

        {/* Available to Allocate */}
        <Card variant="impact" padding="default">
          <CardHeader>
            <CardTitle className="text-center">Available this week</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              ${availableToAllocate}
            </div>
            <div className="flex justify-center gap-2">
              <Button size="sm" variant="outline">
                Add $5
              </Button>
              <Button size="sm" variant="outline">
                Add $10
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Goal Progress */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Climate Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressBar 
              value={currentProgress} 
              max={monthlyGoal} 
              variant="gradient"
              showValue
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              You're ${monthlyGoal - currentProgress} away from your goal!
            </p>
          </CardContent>
        </Card>

        {/* Impact Choice */}
        <Card variant="gradient" padding="default">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Your Impact Focus</h3>
                <p className="text-sm opacity-90">
                  {mockUser.values.slice(0, 2).join(" + ")}
                </p>
              </div>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add $5
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Budget Snapshot */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Budget Snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockBudget.categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{category.name}</span>
                  <span className="text-muted-foreground">
                    ${category.spent} / ${category.cap}
                  </span>
                </div>
                <ProgressBar 
                  value={category.spent} 
                  max={category.cap}
                  variant={category.type === 'climate' ? 'gradient' : 'default'}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Featured Project */}
        <Card variant="impact" padding="default">
          <CardContent>
            <div className="flex items-start gap-3">
              <div className="text-2xl">☀️</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Community Solar Garden</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Your $5 helps install solar panels for 50 homes in Colorado
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn more
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Nudge */}
        <Card variant="interactive" padding="default">
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Today's lesson</h3>
                <p className="text-sm text-muted-foreground">
                  {lessonCards[0].title} • {lessonCards[0].duration} min
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sheep Placeholder */}
        <Card variant="elevated" padding="default">
          <CardContent className="text-center py-8">
            <div className="w-32 h-32 mx-auto bg-surface-elevated border-2 border-dashed border-border rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-4xl mb-2">🐑</div>
                <p className="text-xs text-muted-foreground">
                  Leaf Sheep placeholder
                  <br />
                  Sprite to be injected later
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}