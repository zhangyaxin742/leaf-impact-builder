import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { User, Settings, Bell, Shield, CreditCard, LogOut, Sun, Moon } from "lucide-react"
import { mockUser } from "@/data/mockData"

export default function Profile() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(mockUser.notifPrefs)

  return (
    <AppLayout>
      <div className="container-mobile py-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-2xl">
            <User className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold">{mockUser.name}</h1>
          <p className="text-muted-foreground">{mockUser.region} • {mockUser.ageBracket}</p>
        </div>

        {/* Impact Values */}
        <Card variant="gradient" padding="default">
          <CardContent>
            <h3 className="font-semibold mb-3">Your Impact Values</h3>
            <div className="flex flex-wrap gap-2">
              {mockUser.values.map(value => (
                <Badge key={value} variant="secondary" className="text-xs">
                  {value}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Theme Toggle */}
        <Card variant="elevated">
          <CardContent className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">
                  {darkMode ? 'Dark mode' : 'Light mode'}
                </p>
              </div>
            </div>
            <Switch 
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Goal achievements</p>
                <p className="text-sm text-muted-foreground">When you hit savings targets</p>
              </div>
              <Switch 
                checked={notifications.goalHits}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, goalHits: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Bill reminders</p>
                <p className="text-sm text-muted-foreground">Before bills are due</p>
              </div>
              <Switch 
                checked={notifications.billReminders}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, billReminders: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Learning streaks</p>
                <p className="text-sm text-muted-foreground">Daily lesson reminders</p>
              </div>
              <Switch 
                checked={notifications.learningStreaks}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, learningStreaks: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              <User className="h-4 w-4 mr-3" />
              Personal Information
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Shield className="h-4 w-4 mr-3" />
              Privacy & Security
            </Button>
            <Button variant="ghost" className="w-full justify-start" disabled>
              <CreditCard className="h-4 w-4 mr-3" />
              Connected Accounts (Coming Soon)
            </Button>
          </CardContent>
        </Card>

        {/* Lumi Pass (Paywall Mock) */}
        <Card variant="impact" padding="default">
          <CardContent>
            <div className="text-center space-y-3">
              <h3 className="font-semibold">Upgrade to Lumi Pass</h3>
              <p className="text-sm opacity-90">
                Unlock deeper impact reports, exclusive themes, and premium features
              </p>
              <div className="text-2xl font-bold">$4.99/month</div>
              <Button variant="hero" size="lg" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Legal & Support */}
        <Card variant="elevated">
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-sm">
              Terms of Service
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Export My Data
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Help & Support
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Button variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>

        {/* Disclaimer */}
        <Card variant="gradient" padding="sm">
          <CardContent>
            <p className="text-xs text-center opacity-90">
              Educational simulation only • No transactions executed • Not investment advice
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}