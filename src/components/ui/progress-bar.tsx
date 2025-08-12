import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  showValue?: boolean
  variant?: "default" | "success" | "warning" | "gradient"
}

export function ProgressBar({ 
  value, 
  max = 100, 
  className, 
  showValue = false,
  variant = "default" 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)
  
  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return "bg-success"
      case "warning":
        return "bg-warning"
      case "gradient":
        return "gradient-primary"
      default:
        return "bg-primary"
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-1">
        {showValue && (
          <span className="text-sm font-medium text-foreground">
            ${value.toLocaleString()} / ${max.toLocaleString()}
          </span>
        )}
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={cn(
            "h-2 rounded-full transition-all duration-300 ease-in-out",
            getVariantClasses()
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}