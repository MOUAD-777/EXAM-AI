import Link from "next/link"
import { ArrowLeft, BookOpen, Calendar, FileText, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { examData } from "@/lib/data"

export default function StudentPage({ params }: { params: { id: string } }) {
  const student = examData.students.find((s) => s.id === params.id)

  if (!student) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Student Not Found</CardTitle>
            <CardDescription>
              The student you're looking for doesn't exist or you don't have access to it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/teacher/students">Return to Students</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Random courses for this student
  const studentCourses = examData.courses.slice(0, Math.floor(Math.random() * 3) + 1)

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/teacher/students">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{student.name}</h1>
            <p className="text-muted-foreground">Student ID: {student.studentId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/teacher/students/${params.id}/edit`}>Edit Student</Link>
          </Button>
          <Button asChild>
            <Link href={`/teacher/messages/new?recipient=${params.id}`}>Send Message</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-muted">
                <User className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Full Name</p>
                  <p className="text-sm text-muted-foreground">{student.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Enrollment Date</p>
                  <p className="text-sm text-muted-foreground">September 1, 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-3">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="exams">Exams</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="courses">
              <Card>
                <CardHeader>
                  <CardTitle>Enrolled Courses</CardTitle>
                  <CardDescription>Courses this student is taking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentCourses.map((course) => (
                      <div key={course.id} className="rounded-md border p-4">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                          <div>
                            <h3 className="flex items-center gap-2 font-medium">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              {course.code}: {course.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/teacher/courses/${course.id}`}>View Course</Link>
                            </Button>
                            <Button size="sm">View Progress</Button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="mb-1 text-sm font-medium">Course Progress</p>
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
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="exams">
              <Card>
                <CardHeader>
                  <CardTitle>Exam History</CardTitle>
                  <CardDescription>Past and upcoming exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 border-b p-3 font-medium">
                      <div>Exam</div>
                      <div>Course</div>
                      <div>Date</div>
                      <div>Score</div>
                      <div className="text-right">Actions</div>
                    </div>
                    <div className="grid grid-cols-5 border-b p-3">
                      <div className="font-medium">Midterm Exam</div>
                      <div className="text-muted-foreground">CS301: Database Systems</div>
                      <div className="text-muted-foreground">May 15, 2025</div>
                      <div>85/100</div>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/teacher/submissions/sub1">View</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 border-b p-3">
                      <div className="font-medium">Quiz 1</div>
                      <div className="text-muted-foreground">CS201: Data Structures</div>
                      <div className="text-muted-foreground">May 10, 2025</div>
                      <div>92/100</div>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/teacher/submissions/sub2">View</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 p-3">
                      <div className="font-medium">Final Exam</div>
                      <div className="text-muted-foreground">CS401: Web Development</div>
                      <div className="text-muted-foreground">May 28, 2025</div>
                      <div>Upcoming</div>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" disabled>
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                  <CardDescription>Overall performance across all courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 font-medium">Grade Distribution</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>CS101: Introduction to Programming</span>
                            <span>A (92%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "92%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>CS201: Data Structures</span>
                            <span>B+ (88%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "88%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>CS301: Database Systems</span>
                            <span>B (85%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <h3 className="mb-2 font-medium">Overall Statistics</h3>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-md bg-muted p-3 text-center">
                          <p className="text-sm text-muted-foreground">GPA</p>
                          <p className="text-2xl font-bold">3.7</p>
                        </div>
                        <div className="rounded-md bg-muted p-3 text-center">
                          <p className="text-sm text-muted-foreground">Average Score</p>
                          <p className="text-2xl font-bold">88%</p>
                        </div>
                        <div className="rounded-md bg-muted p-3 text-center">
                          <p className="text-sm text-muted-foreground">Class Rank</p>
                          <p className="text-2xl font-bold">12/42</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 font-medium">Performance Trends</h3>
                      <div className="h-48 rounded-md border p-4">
                        <p className="flex h-full items-center justify-center text-sm text-muted-foreground">
                          Performance chart would be displayed here
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Student's recent actions and submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Completed Exam</p>
                            <p className="text-sm text-muted-foreground">Database Systems Midterm</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Viewed Course Materials</p>
                            <p className="text-sm text-muted-foreground">CS301: Database Systems</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Submitted Assignment</p>
                            <p className="text-sm text-muted-foreground">CS201: Data Structures - Assignment 2</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
