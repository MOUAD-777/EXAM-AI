import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { examData } from "@/lib/data"

export function UpcomingExams() {
  const upcomingExams = examData.exams.filter((exam) => exam.status === "upcoming").slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Exams</CardTitle>
        <CardDescription>Exams scheduled for your courses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingExams.map((exam) => (
            <div key={exam.id} className="flex items-center justify-between space-x-4 rounded-md border p-4">
              <div className="space-y-1">
                <p className="font-medium">{exam.title}</p>
                <p className="text-sm text-muted-foreground">{exam.course}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Date:</span>
                  <span>{new Date(exam.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Time:</span>
                  <span>{exam.time}</span>
                </div>
              </div>
              <Button asChild variant="outline">
                <Link href={`/teacher/exams/${exam.id}`}>View</Link>
              </Button>
            </div>
          ))}

          {upcomingExams.length === 0 && (
            <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">No upcoming exams</p>
            </div>
          )}
        </div>

        {upcomingExams.length > 0 && (
          <div className="mt-4 text-center">
            <Button variant="outline" asChild>
              <Link href="/teacher/exams">View All Exams</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
