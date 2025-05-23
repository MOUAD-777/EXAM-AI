import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { examData } from "@/lib/data"

interface ExamListProps {
  status: "upcoming" | "completed" | "all"
}

export function ExamList({ status }: ExamListProps) {
  let exams = examData.exams

  if (status === "upcoming") {
    exams = exams.filter((exam) => exam.status === "upcoming")
  } else if (status === "completed") {
    exams = exams.filter((exam) => exam.status === "completed")
  }

  return (
    <div className="space-y-4">
      {exams.length === 0 ? (
        <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
          <p className="text-sm text-muted-foreground">No exams found</p>
        </div>
      ) : (
        exams.map((exam) => (
          <div
            key={exam.id}
            className="flex flex-col justify-between space-y-2 rounded-md border p-4 sm:flex-row sm:items-center sm:space-y-0"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{exam.title}</h3>
                <Badge variant={exam.status === "upcoming" ? "outline" : "secondary"}>
                  {exam.status === "upcoming" ? "Upcoming" : "Completed"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{exam.course}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(exam.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{exam.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{exam.duration} minutes</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {exam.status === "upcoming" ? (
                <Button asChild>
                  <Link href={`/student/exam/${exam.id}`}>Take Exam</Link>
                </Button>
              ) : (
                <Button variant="outline" asChild>
                  <Link href={`/student/results/${exam.id}`}>View Results</Link>
                </Button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
