import Link from "next/link"
import { BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CourseList() {
  const courses = [
    {
      id: "cs101",
      name: "Introduction to Programming",
      code: "CS101",
      students: 42,
      exams: 2,
    },
    {
      id: "cs201",
      name: "Data Structures",
      code: "CS201",
      students: 35,
      exams: 1,
    },
    {
      id: "cs301",
      name: "Database Systems",
      code: "CS301",
      students: 28,
      exams: 3,
    },
    {
      id: "cs401",
      name: "Web Development",
      code: "CS401",
      students: 23,
      exams: 2,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Courses</CardTitle>
          <CardDescription>Courses you are teaching this semester</CardDescription>
        </div>
        <Button asChild>
          <Link href="/teacher/courses">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BookOpen className="h-4 w-4" />
                  {course.code}
                </CardTitle>
                <CardDescription className="line-clamp-1">{course.name}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{course.exams} exams</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/teacher/courses/${course.id}`}>Manage</Link>
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
