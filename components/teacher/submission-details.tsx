import { Card, CardContent } from "@/components/ui/card"

interface SubmissionDetailsProps {
  submissionId: string
}

export function SubmissionDetails({ submissionId }: SubmissionDetailsProps) {
  // In a real app, you would fetch this data from your API
  const details = [
    { label: "Submission ID", value: submissionId },
    { label: "Submission Date", value: "May 22, 2025" },
    { label: "Submission Time", value: "14:30:45" },
    { label: "Time Spent", value: "58 minutes" },
    { label: "Browser", value: "Chrome 125.0.0" },
    { label: "Operating System", value: "Windows 11" },
    { label: "IP Address", value: "192.168.1.xxx" },
    { label: "Location", value: "University Campus" },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {details.map((detail, index) => (
          <div key={index} className="space-y-1">
            <p className="text-sm font-medium">{detail.label}</p>
            <p className="text-sm text-muted-foreground">{detail.value}</p>
          </div>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <h4 className="mb-2 font-medium">Session Timeline</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Started exam</span>
              <span className="text-muted-foreground">13:32:15</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Completed question 1</span>
              <span className="text-muted-foreground">13:38:22</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Completed question 2</span>
              <span className="text-muted-foreground">13:45:10</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Security alert: Tab switching detected</span>
              <span className="text-muted-foreground">13:52:33</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Completed question 3</span>
              <span className="text-muted-foreground">14:01:45</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Completed question 4</span>
              <span className="text-muted-foreground">14:15:18</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Completed question 5</span>
              <span className="text-muted-foreground">14:28:52</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Submitted exam</span>
              <span className="text-muted-foreground">14:30:45</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
