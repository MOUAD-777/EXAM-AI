import { AlertTriangle, CheckCircle, Eye, MonitorX } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface SubmissionSecurityProps {
  submissionId: string
}

export function SubmissionSecurity({ submissionId }: SubmissionSecurityProps) {
  // In a real app, you would fetch this data from your API
  const securityEvents = [
    {
      id: 1,
      type: "tab_switch",
      timestamp: "13:52:33",
      description: "Tab switching detected",
      severity: "medium",
    },
  ]

  const securityMetrics = {
    webcamCoverage: 98,
    eyeTrackingCoverage: 95,
    tabSwitchAttempts: 1,
    suspiciousMovements: 0,
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-medium">Webcam Coverage</h3>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="h-2 w-full rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${securityMetrics.webcamCoverage}%` }}
                />
              </div>
              <span className="ml-2 text-sm font-medium">{securityMetrics.webcamCoverage}%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-medium">Eye Tracking Coverage</h3>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="h-2 w-full rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${securityMetrics.eyeTrackingCoverage}%` }}
                />
              </div>
              <span className="ml-2 text-sm font-medium">{securityMetrics.eyeTrackingCoverage}%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MonitorX className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-medium">Tab Switch Attempts</h3>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold">{securityMetrics.tabSwitchAttempts}</span>
              {securityMetrics.tabSwitchAttempts > 0 ? (
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-medium">Suspicious Movements</h3>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold">{securityMetrics.suspiciousMovements}</span>
              {securityMetrics.suspiciousMovements > 0 ? (
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="mb-4 font-medium">Security Events</h3>
          {securityEvents.length > 0 ? (
            <div className="space-y-4">
              {securityEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-2 rounded-md border p-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{event.description}</p>
                      <span className="text-sm text-muted-foreground">{event.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Severity: {event.severity.charAt(0).toUpperCase() + event.severity.slice(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">No security events detected</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
