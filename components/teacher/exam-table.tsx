import Link from "next/link"
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { examData } from "@/lib/data"

interface ExamTableProps {
  status: "upcoming" | "past" | "draft" | "all"
}

export function ExamTable({ status }: ExamTableProps) {
  let exams = examData.exams

  if (status === "upcoming") {
    exams = exams.filter((exam) => exam.status === "upcoming")
  } else if (status === "past") {
    exams = exams.filter((exam) => exam.status === "completed")
  } else if (status === "draft") {
    exams = exams.filter((exam) => exam.status === "draft")
  }

  return (
    <div className="space-y-4">
      {exams.length === 0 ? (
        <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
          <p className="text-sm text-muted-foreground">No exams found</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">Exam Title</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Course</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Time</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Duration</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-right text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <tr key={exam.id} className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">{exam.title}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{exam.course}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {new Date(exam.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{exam.time}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{exam.duration} min</td>
                    <td className="px-4 py-3 text-sm">
                      <Badge
                        variant={
                          exam.status === "upcoming" ? "outline" : exam.status === "completed" ? "secondary" : "default"
                        }
                      >
                        {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/teacher/exams/${exam.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/teacher/exams/${exam.id}/edit`}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
