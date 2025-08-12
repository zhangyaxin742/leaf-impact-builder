import { Home, PieChart, TrendingUp, BookOpen, User } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Budget", href: "/budget", icon: PieChart },
  { name: "Invest", href: "/invest", icon: TrendingUp },
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "Profile", href: "/profile", icon: User },
]

export function MobileNav() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-area-pb z-50">
      <div className="flex justify-around items-center h-16 container-app">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 py-2 transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "h-5 w-5 mb-1",
                  isActive && "drop-shadow-[0_0_8px_hsl(var(--primary-glow))]"
                )} 
              />
              <span className={cn(
                "text-xs font-medium",
                isActive && "text-gradient"
              )}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}