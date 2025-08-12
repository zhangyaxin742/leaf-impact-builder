import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Info } from "lucide-react"
import { impactThemes } from "@/data/mockData"
import { cn } from "@/lib/utils"

export default function Invest() {
  const [selectedThemes, setSelectedThemes] = useState<string[]>(['renewable'])
  const [weeklyAmount, setWeeklyAmount] = useState([25])
  const [riskLevel, setRiskLevel] = useState([3])

  const toggleTheme = (themeId: string) => {
    setSelectedThemes(prev => 
      prev.includes(themeId) 
        ? prev.filter(id => id !== themeId)
        : [...prev, themeId]
    )
  }

  const mockReturn = weeklyAmount[0] * 52 * (1 + (riskLevel[0] * 0.02))

  return (
    <AppLayout>
      <div className="container-mobile py-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Impact Simulator</h1>
          <p className="text-muted-foreground">Build your mock impact portfolio</p>
        </div>

        {/* Disclaimer */}
        <Card variant="gradient" padding="sm">
          <CardContent>
            <div className="flex items-center gap-2 justify-center text-sm">
              <Info className="h-4 w-4" />
              <span>Educational simulation only • No real transactions</span>
            </div>
          </CardContent>
        </Card>

        {/* Theme Picker */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Choose Impact Themes</CardTitle>
            <p className="text-sm text-muted-foreground">Select areas aligned with your values</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {impactThemes.map((theme) => (
              <Card
                key={theme.id}
                variant={selectedThemes.includes(theme.id) ? "impact" : "interactive"}
                padding="sm"
                onClick={() => toggleTheme(theme.id)}
                className={cn(
                  "cursor-pointer transition-all",
                  selectedThemes.includes(theme.id) && "ring-2 ring-primary"
                )}
              >
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{theme.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium">{theme.name}</h3>
                      <p className="text-sm text-muted-foreground">{theme.description}</p>
                      <div className="flex gap-1 mt-2">
                        {theme.sdgs.map(sdg => (
                          <Badge key={sdg} variant="secondary" className="text-xs">
                            SDG {sdg}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Portfolio Builder */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Portfolio Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Weekly Amount */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="font-medium">Weekly contribution</label>
                <span className="text-primary font-medium">${weeklyAmount[0]}</span>
              </div>
              <Slider
                value={weeklyAmount}
                onValueChange={setWeeklyAmount}
                max={100}
                min={5}
                step={5}
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">
                ${weeklyAmount[0] * 52}/year • ${(weeklyAmount[0] * 52 / 12).toFixed(0)}/month
              </p>
            </div>

            {/* Risk Level */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="font-medium">Risk level</label>
                <span className="text-primary font-medium">
                  {riskLevel[0] === 1 ? 'Very Conservative' :
                   riskLevel[0] === 2 ? 'Conservative' :
                   riskLevel[0] === 3 ? 'Moderate' :
                   riskLevel[0] === 4 ? 'Aggressive' : 'Very Aggressive'}
                </span>
              </div>
              <Slider
                value={riskLevel}
                onValueChange={setRiskLevel}
                max={5}
                min={1}
                step={1}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Mock Performance */}
        <Card variant="impact">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Projected Annual Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Investment</p>
                <p className="text-lg font-bold">${weeklyAmount[0] * 52}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Est. Value</p>
                <p className="text-lg font-bold">${mockReturn.toFixed(0)}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Your impact could include:</h4>
              <div className="space-y-1 text-sm">
                <p>• Fund 0.5MW of solar capacity</p>
                <p>• Support water access for 25 people</p>
                <p>• Offset equivalent of 2.3 tons CO₂</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Projects */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Featured Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedThemes.flatMap(themeId => 
              impactThemes.find(t => t.id === themeId)?.projects || []
            ).slice(0, 2).map((project) => (
              <Card key={project.id} variant="interactive" padding="sm">
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.blurb}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{project.region}</span>
                      <span>{project.verification}</span>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Funding progress</span>
                        <span>${project.currentFunding.toLocaleString()} / ${project.fundingGoal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(project.currentFunding / project.fundingGoal) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* CTA */}
        <Button variant="hero" size="xl" className="w-full" disabled>
          Start Real Investing (Coming Soon)
        </Button>

        {/* Sheep Placeholder */}
        <Card variant="elevated" padding="default">
          <CardContent className="text-center py-6">
            <div className="w-24 h-24 mx-auto bg-surface-elevated border-2 border-dashed border-border rounded-lg flex items-center justify-center mb-3">
              <div className="text-center">
                <div className="text-3xl mb-1">🐑</div>
                <p className="text-xs text-muted-foreground">Sheep placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}