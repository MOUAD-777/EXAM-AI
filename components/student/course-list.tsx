import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CourseList() {
  const courses = [
    {
      id: "cs101",
      name: "Introduction to Programming",
      code: "CS101",
      instructor: "Dr. Jane Smith",
      progress: 75,
    },
    {
      id: "cs201",
      name: "Data Structures",
      code: "CS201",
      instructor: "Dr. John Doe",
      progress: 60,
    },
    {
      id: "cs301",
      name: "Database Systems",
      code: "CS301",
      instructor: "Prof. Alice Johnson",
      progress: 40,
    },
    {
      id: "cs401",
      name: "Web Development",
      code: "CS401",
      instructor: "Prof. Bob Brown",
      progress: 90,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Courses</CardTitle>
        <CardDescription>Current semester courses and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="h-2 bg-primary" style={{ width: `${course.progress}%` }} />
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BookOpen className="h-4 w-4" />
                  {course.code}
                </CardTitle>
                <CardDescription className="line-clamp-1">{course.name}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm">
                <p className="text-muted-foreground">{course.instructor}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{course.progress}% complete</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/student/courses/${course.id}`}>View</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
