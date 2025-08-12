import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function AgeConsent() {
  const navigate = useNavigate()
  const [isOver18, setIsOver18] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const [parentEmail, setParentEmail] = useState("")

  const canProceed = hasConsent && (isOver18 || parentEmail.length > 0)

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container-mobile py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/onboarding/welcome')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold">Age & Consent</h1>
            <p className="text-sm text-muted-foreground">Step 1 of 8</p>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: '12.5%' }}></div>
        </div>

        {/* Age Check */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Let's get started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="age18" 
                  checked={isOver18}
                  onCheckedChange={(checked) => setIsOver18(checked as boolean)}
                />
                <Label htmlFor="age18" className="text-sm">
                  I am 18 years or older
                </Label>
              </div>

              {!isOver18 && (
                <div className="space-y-2">
                  <Label htmlFor="parent-email" className="text-sm">
                    Parent/Guardian email (optional)
                  </Label>
                  <Input
                    id="parent-email"
                    type="email"
                    placeholder="parent@example.com"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll send updates about your educational progress
                  </p>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="consent" 
                  checked={hasConsent}
                  onCheckedChange={(checked) => setHasConsent(checked as boolean)}
                />
                <Label htmlFor="consent" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
            </div>

            <Button 
              variant="default" 
              size="lg" 
              className="w-full"
              disabled={!canProceed}
              onClick={() => navigate('/onboarding/goals')}
            >
              Continue
            </Button>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card variant="gradient" padding="sm">
          <CardContent>
            <p className="text-sm text-center opacity-90">
              This is an educational platform. No real investments or transactions will be made.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}