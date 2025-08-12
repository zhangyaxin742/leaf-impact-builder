import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function Finish() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="container-mobile space-y-8">
        {/* Success Icon */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-success" />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-2">You're all set!</h1>
          <p className="text-lg text-muted-foreground">
            Welcome to your climate impact journey
          </p>
        </div>

        {/* Summary Card */}
        <Card variant="gradient" padding="lg">
          <CardContent className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Your profile is ready</h2>
            <div className="space-y-2 text-sm opacity-90">
              <p>✓ Impact goals selected</p>
              <p>✓ Budget framework set up</p>
              <p>✓ Risk preferences configured</p>
              <p>✓ Notifications enabled</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card variant="elevated" padding="lg">
          <CardContent className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Ready to start?</h3>
            <p className="text-sm text-muted-foreground">
              Explore your dashboard, set up your first budget, and discover impact investing opportunities.
            </p>
            
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full"
              onClick={() => navigate('/')}
            >
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => navigate('/budget')}>
            Set up Budget
          </Button>
          <Button variant="outline" onClick={() => navigate('/invest')}>
            Explore Investing
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground">
          Educational simulation only • No transactions executed • Not investment advice
        </p>
      </div>
    </div>
  )
}