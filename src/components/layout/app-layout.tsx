import { ReactNode } from "react"
import { MobileNav } from "@/components/ui/mobile-nav"
import { cn } from "@/lib/utils"

interface AppLayoutProps {
  children: ReactNode
  className?: string
  showNav?: boolean
}

export function AppLayout({ children, className, showNav = true }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Sheep placeholder in top-right */}
      <div className="fixed top-4 right-4 z-40">
        <div className="w-12 h-12 bg-surface-elevated border border-border rounded-lg flex items-center justify-center text-xs text-muted-foreground">
          🐑
        </div>
      </div>

      {/* Main content */}
      <main className={cn(
        "pb-20", // Space for mobile nav
        !showNav && "pb-4",
        className
      )}>
        {children}
      </main>

      {/* Mobile navigation */}
      {showNav && <MobileNav />}
    </div>
  )
}