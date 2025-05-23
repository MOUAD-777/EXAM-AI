import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Completed exam",
      subject: "Web Development Final",
      timestamp: "2 days ago",
      result: "85/100",
    },
    {
      id: 2,
      action: "Viewed course materials",
      subject: "Database Systems",
      timestamp: "3 days ago",
    },
    {
      id: 3,
      action: "Enrolled in course",
      subject: "Advanced Algorithms",
      timestamp: "1 week ago",
    },
    {
      id: 4,
      action: "Completed exam",
      subject: "Data Structures Midterm",
      timestamp: "2 weeks ago",
      result: "92/100",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest actions and results</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start justify-between space-x-4 rounded-md border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.subject}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
              {activity.result && (
                <div className="rounded-md bg-muted px-2 py-1 text-sm font-medium">{activity.result}</div>
              )}
            </div>
          ))}

          {activities.length === 0 && (
            <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">No recent activity</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
