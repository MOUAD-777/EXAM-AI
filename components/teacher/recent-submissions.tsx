import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentSubmissions() {
  const submissions = [
    {
      id: "sub1",
      student: "John Doe",
      exam: "Database Systems Midterm",
      date: "2025-05-22T14:30:00Z",
      score: 85,
    },
    {
      id: "sub2",
      student: "Jane Smith",
      exam: "Database Systems Midterm",
      date: "2025-05-22T14:15:00Z",
      score: 92,
    },
    {
      id: "sub3",
      student: "Bob Johnson",
      exam: "Web Development Final",
      date: "2025-05-21T10:00:00Z",
      score: 78,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
        <CardDescription>Latest exam submissions from students</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div key={submission.id} className="flex items-center justify-between space-x-4 rounded-md border p-4">
              <div className="space-y-1">
                <p className="font-medium">{submission.student}</p>
                <p className="text-sm text-muted-foreground">{submission.exam}</p>
                <p className="text-xs text-muted-foreground">{new Date(submission.date).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-muted px-2 py-1 text-sm font-medium">{submission.score}/100</div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/teacher/submissions/${submission.id}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}

          {submissions.length === 0 && (
            <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">No recent submissions</p>
            </div>
          )}
        </div>

        {submissions.length > 0 && (
          <div className="mt-4 text-center">
            <Button variant="outline" asChild>
              <Link href="/teacher/submissions">View All Submissions</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
