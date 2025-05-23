import Link from "next/link"
import { ArrowLeft, FileText, Plus, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { examData } from "@/lib/data"

export default function TeacherCoursePage({ params }: { params: { id: string } }) {
  const course = examData.courses.find((c) => c.id === params.id)

  if (!course) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Course Not Found</CardTitle>
            <CardDescription>
              The course you're looking for doesn't exist or you don't have access to it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/teacher/courses">Return to Courses</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Filter exams for this course
  const courseExams = examData.exams.filter((exam) => exam.course.includes(course.code))

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/teacher/courses">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{course.code}</h1>
            <p className="text-muted-foreground">{course.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/teacher/courses/${params.id}/edit`}>Edit Course</Link>
          </Button>
          <Button asChild>
            <Link href={`/teacher/exams/create?course=${params.id}`}>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Exam
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{course.students}</div>
            <p className="text-xs text-muted-foreground">Enrolled this semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exams</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseExams.length}</div>
            <p className="text-xs text-muted-foreground">
              Next: {courseExams.length > 0 ? courseExams[0].title : "No upcoming exams"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Materials</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Course documents and resources</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="exams">Exams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
              <CardDescription>Course details and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="text-sm text-muted-foreground">
                  This course provides a comprehensive introduction to {course.name.toLowerCase()}. Students will learn
                  fundamental concepts and practical applications through lectures, assignments, and hands-on projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Learning Objectives</h3>
                <ul className="ml-6 list-disc text-sm text-muted-foreground">
                  <li>Understand core principles and theories in {course.name.toLowerCase()}</li>
                  <li>Develop practical skills through hands-on exercises and projects</li>
                  <li>Apply concepts to solve real-world problems</li>
                  <li>Prepare for advanced studies in this field</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Course Schedule</h3>
                <div className="mt-2 space-y-2 rounded-md border p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Lectures</span>
                    <span>Monday, Wednesday 10:00-11:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lab Sessions</span>
                    <span>Friday 2:00-4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Office Hours</span>
                    <span>Tuesday, Thursday 1:00-3:00 PM</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Grading Structure</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span>Assignments</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Midterm Exam</span>
                    <span>25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Final Exam</span>
                    <span>35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participation</span>
                    <span>10%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="students">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Enrolled Students</CardTitle>
                <CardDescription>Students taking this course</CardDescription>
              </div>
              <Button asChild>
                <Link href={`/teacher/courses/${params.id}/students/add`}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Student
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b p-3 font-medium">
                  <div>Name</div>
                  <div>Student ID</div>
                  <div>Email</div>
                  <div>Progress</div>
                  <div className="text-right">Actions</div>
                </div>
                {examData.students.map((student) => (
                  <div key={student.id} className="grid grid-cols-5 border-b p-3">
                    <div className="font-medium">{student.name}</div>
                    <div className="text-muted-foreground">{student.studentId}</div>
                    <div className="text-muted-foreground">{student.email}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                          />
                        </div>
                        <span className="text-xs">{Math.floor(Math.random() * 40) + 60}%</span>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/teacher/students/${student.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="materials">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Course Materials</CardTitle>
                <CardDescription>Lecture notes, assignments, and resources</CardDescription>
              </div>
              <Button asChild>
                <Link href={`/teacher/courses/${params.id}/materials/upload`}>
                  <Plus className="mr-2 h-4 w-4" />
                  Upload Material
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium">Lecture Materials</h3>
                  <div className="rounded-md border">
                    <div className="flex items-center justify-between border-b p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Introduction to {course.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Core Concepts and Principles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Advanced Topics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Assignments</h3>
                  <div className="rounded-md border">
                    <div className="flex items-center justify-between border-b p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Assignment 1: Fundamentals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Assignment 2: Applications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exams">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Course Exams</CardTitle>
                <CardDescription>Manage exams for this course</CardDescription>
              </div>
              <Button asChild>
                <Link href={`/teacher/exams/create?course=${params.id}`}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Exam
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {courseExams.length > 0 ? (
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 border-b p-3 font-medium">
                    <div>Exam Title</div>
                    <div>Date</div>
                    <div>Duration</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>
                  {courseExams.map((exam) => (
                    <div key={exam.id} className="grid grid-cols-5 border-b p-3">
                      <div className="font-medium">{exam.title}</div>
                      <div className="text-muted-foreground">{new Date(exam.date).toLocaleDateString()}</div>
                      <div className="text-muted-foreground">{exam.duration} minutes</div>
                      <div>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                            exam.status === "upcoming"
                              ? "bg-blue-100 text-blue-800"
                              : exam.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/teacher/exams/${exam.id}`}>View</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/teacher/exams/${exam.id}/edit`}>Edit</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-muted-foreground">No exams created for this course yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
