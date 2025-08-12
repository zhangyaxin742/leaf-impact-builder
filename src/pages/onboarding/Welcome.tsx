import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="container-mobile space-y-8">
        {/* Logo/Brand */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center glow-green">
            <div className="text-4xl">🌱</div>
          </div>
          <h1 className="text-4xl font-bold text-gradient mb-2">leaf.io</h1>
          <p className="text-lg text-muted-foreground">
            Budget. Learn. Sim your impact.
          </p>
        </div>

        {/* Welcome Card */}
        <Card variant="elevated" padding="lg">
          <CardContent className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Welcome to the future of climate investing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Learn to budget, explore impact investing, and simulate your contribution to solving climate change.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Educational simulation - no real transactions</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Learn impact investing fundamentals</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Build climate-conscious budgeting habits</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full"
              onClick={() => navigate('/onboarding/age-consent')}
            >
              Get started
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          Educational simulation only • No transactions executed • Not investment advice
        </p>
      </div>
    </div>
  )
}