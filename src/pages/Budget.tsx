import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Plus, Edit, ArrowUpRight } from "lucide-react"
import { mockBudget, mockTransactions } from "@/data/mockData"

export default function Budget() {
  const spareAmount = 50

  return (
    <AppLayout>
      <div className="container-mobile py-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Budget</h1>
          <p className="text-muted-foreground">Give every dollar a job</p>
        </div>

        {/* Income Summary */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Monthly Income
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gradient mb-2">
              ${mockBudget.income.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">
              Updated monthly from connected accounts
            </p>
          </CardContent>
        </Card>

        {/* Budget Categories */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Budget Categories</CardTitle>
            <p className="text-sm text-muted-foreground">50/30/15/5 framework</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockBudget.categories.map((category) => {
              const percentage = (category.spent / category.cap) * 100
              const remaining = category.cap - category.spent
              
              return (
                <div key={category.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${remaining > 0 ? remaining : 0} remaining
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        ${category.spent} / ${category.cap}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {percentage.toFixed(0)}%
                      </div>
                    </div>
                  </div>
                  <ProgressBar 
                    value={category.spent} 
                    max={category.cap}
                    variant={category.type === 'climate' ? 'gradient' : 
                            percentage > 100 ? 'warning' : 'default'}
                  />
                  {category.type === 'climate' && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-1" />
                      Add to Climate Pool
                    </Button>
                  )}
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Spare Money Redirect */}
        {spareAmount > 0 && (
          <Card variant="impact" padding="default">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Spare ${spareAmount} found!</h3>
                  <p className="text-sm opacity-90">
                    Redirect to your Climate Pool?
                  </p>
                </div>
                <Button size="sm" variant="hero">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Redirect
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Transactions */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Transactions
              <Button variant="ghost" size="sm">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockTransactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    transaction.amount > 0 ? 'bg-success' : 'bg-muted-foreground'
                  }`}></div>
                  <div>
                    <p className="font-medium text-sm">{transaction.merchant}</p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.category} • {new Date(transaction.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className={`font-medium ${
                  transaction.amount > 0 ? 'text-success' : 'text-foreground'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Connect Bank Placeholder */}
        <Card variant="gradient" padding="default">
          <CardContent className="text-center">
            <h3 className="font-semibold mb-2">Connect your bank</h3>
            <p className="text-sm opacity-90 mb-4">
              Sync with Plaid for automatic categorization
            </p>
            <Button variant="outline" className="w-full" disabled>
              Connect with Plaid (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}