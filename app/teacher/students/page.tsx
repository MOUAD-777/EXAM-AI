import Link from "next/link"
import { Download, Search, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { examData } from "@/lib/data"

export default function StudentsPage() {
  const students = examData.students
  const courses = examData.courses

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage and view student information</p>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="relative flex-1 md:w-64 md:flex-none">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search students..." className="pl-8" />
          </div>
          <Button variant="outline" asChild>
            <Link href="/teacher/students/import">
              <Download className="mr-2 h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button asChild>
            <Link href="/teacher/students/add">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Student
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Students</TabsTrigger>
          {courses.slice(0, 4).map((course) => (
            <TabsTrigger key={course.id} value={course.id}>
              {course.code}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Students</CardTitle>
              <CardDescription>View and manage all students across your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b p-3 font-medium">
                  <div>Name</div>
                  <div>Student ID</div>
                  <div>Email</div>
                  <div>Courses</div>
                  <div className="text-right">Actions</div>
                </div>
                {students.map((student) => (
                  <div key={student.id} className="grid grid-cols-5 border-b p-3">
                    <div className="font-medium">{student.name}</div>
                    <div className="text-muted-foreground">{student.studentId}</div>
                    <div className="text-muted-foreground">{student.email}</div>
                    <div className="flex flex-wrap gap-1">
                      {Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, i) => (
                        <span
                          key={i}
                          className="inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {courses[i].code}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/teacher/students/${student.id}`}>View</Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/teacher/students/${student.id}/edit`}>Edit</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {courses.slice(0, 4).map((course) => (
          <TabsContent key={course.id} value={course.id}>
            <Card>
              <CardHeader>
                <CardTitle>{course.code} Students</CardTitle>
                <CardDescription>Students enrolled in {course.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b p-3 font-medium">
                    <div>Name</div>
                    <div>Student ID</div>
                    <div>Email</div>
                    <div className="text-right">Actions</div>
                  </div>
                  {students.slice(0, Math.floor(Math.random() * 2) + 1).map((student) => (
                    <div key={student.id} className="grid grid-cols-4 border-b p-3">
                      <div className="font-medium">{student.name}</div>
                      <div className="text-muted-foreground">{student.studentId}</div>
                      <div className="text-muted-foreground">{student.email}</div>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/teacher/students/${student.id}`}>View</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/teacher/students/${student.id}/edit`}>Edit</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
