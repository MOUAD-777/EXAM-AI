import Link from "next/link"
import { BookOpen, Plus, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { examData } from "@/lib/data"

export default function TeacherCoursesPage() {
  const courses = examData.courses

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Manage your courses and teaching materials</p>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="relative flex-1 md:w-64 md:flex-none">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search courses..." className="pl-8" />
          </div>
          <Button asChild>
            <Link href="/teacher/courses/create">
              <Plus className="mr-2 h-4 w-4" />
              New Course
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current">Current Semester</TabsTrigger>
          <TabsTrigger value="past">Past Courses</TabsTrigger>
          <TabsTrigger value="all">All Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {course.code}
                  </CardTitle>
                  <CardDescription>{course.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students enrolled</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}/materials`}>Materials</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}/exams`}>Exams</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}/students`}>Students</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}`}>Manage</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Courses</CardTitle>
              <CardDescription>Courses from previous semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                <p className="text-sm text-muted-foreground">No past courses found</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {course.code}
                  </CardTitle>
                  <CardDescription>{course.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students enrolled</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}/materials`}>Materials</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}/exams`}>Exams</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}/students`}>Students</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/teacher/courses/${course.id}`}>Manage</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
