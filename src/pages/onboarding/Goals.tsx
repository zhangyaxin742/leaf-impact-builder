import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const impactAreas = [
  { id: "climate", name: "Climate Action", icon: "🌍", description: "Carbon reduction & mitigation" },
  { id: "water", name: "Clean Water", icon: "💧", description: "Water access & ocean protection" },
  { id: "energy", name: "Renewable Energy", icon: "☀️", description: "Solar, wind & clean tech" },
  { id: "food", name: "Food Systems", icon: "🌾", description: "Sustainable agriculture" },
  { id: "nature", name: "Natural Capital", icon: "🌳", description: "Forest & biodiversity protection" },
  { id: "resilience", name: "Climate Resilience", icon: "🏠", description: "Adaptation & infrastructure" }
]

export default function Goals() {
  const navigate = useNavigate()
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container-mobile py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/onboarding/age-consent')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold">Your Impact Goals</h1>
            <p className="text-sm text-muted-foreground">Step 2 of 8</p>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>

        {/* Goals Selection */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>What impact areas matter to you?</CardTitle>
            <p className="text-sm text-muted-foreground">Choose all that apply</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {impactAreas.map((area) => (
              <Card
                key={area.id}
                variant={selectedGoals.includes(area.id) ? "impact" : "interactive"}
                padding="sm"
                onClick={() => toggleGoal(area.id)}
                className={cn(
                  "cursor-pointer transition-all",
                  selectedGoals.includes(area.id) && "ring-2 ring-primary"
                )}
              >
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{area.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium">{area.name}</h3>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                    <div className={cn(
                      "w-5 h-5 rounded-full border-2 transition-colors",
                      selectedGoals.includes(area.id) 
                        ? "bg-primary border-primary" 
                        : "border-muted-foreground"
                    )}>
                      {selectedGoals.includes(area.id) && (
                        <div className="w-full h-full rounded-full bg-primary-foreground scale-50"></div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Button 
          variant="default" 
          size="lg" 
          className="w-full"
          disabled={selectedGoals.length === 0}
          onClick={() => navigate('/onboarding/avoid-list')}
        >
          Continue ({selectedGoals.length} selected)
        </Button>
      </div>
    </div>
  )
}