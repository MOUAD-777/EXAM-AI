"use client"

import { useEffect } from "react"
import { CheckCircle } from "lucide-react"

interface TabMonitorProps {
  onSecurityAlert: (message: string) => void
}

export function TabMonitor({ onSecurityAlert }: TabMonitorProps) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onSecurityAlert("Tab switching detected. Please return to the exam.")
      }
    }

    const handleFocusChange = () => {
      if (!document.hasFocus()) {
        onSecurityAlert("Window focus lost. Please return to the exam.")
      }
    }

    // Add event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("blur", handleFocusChange)

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("blur", handleFocusChange)
    }
  }, [onSecurityAlert])

  // In a real implementation, you would also use the Page Visibility API
  // and potentially a fullscreen API to enforce exam security

  return (
    <div className="flex items-center gap-2 rounded-md border p-2">
      <CheckCircle className="h-4 w-4 text-green-500" />
      <div className="flex-1">
        <p className="text-sm font-medium">Tab Monitoring Active</p>
        <p className="text-xs text-muted-foreground">Do not switch tabs or windows during the exam</p>
      </div>
    </div>
  )
}
