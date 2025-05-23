import Link from "next/link"
import { ArrowLeft, BookOpen, Calendar, FileText, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { examData } from "@/lib/data"

export default function CoursePage({ params }: { params: { id: string } }) {
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
              <Link href="/student/courses">Return to Courses</Link>
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
            <Link href="/student/courses">
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
            <Link href={`/student/courses/${params.id}/materials`}>
              <FileText className="mr-2 h-4 w-4" />
              Course Materials
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/student/courses/${params.id}/exams`}>
              <Calendar className="mr-2 h-4 w-4" />
              View Exams
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instructor</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{course.instructor}</div>
            <p className="text-xs text-muted-foreground">Office Hours: Mon-Wed 10:00-12:00</p>
          </CardContent>
        </Card>
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
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseExams.length}</div>
            <p className="text-xs text-muted-foreground">
              Next: {courseExams.length > 0 ? courseExams[0].title : "No upcoming exams"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
              <CardDescription>About this course</CardDescription>
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
                <h3 className="text-lg font-medium">Prerequisites</h3>
                <p className="text-sm text-muted-foreground">
                  {course.code === "CS101"
                    ? "No prerequisites required."
                    : `Completion of ${course.code.charAt(2)}${(Number.parseInt(course.code.slice(2, 5)) - 100)
                        .toString()
                        .padStart(2, "0")} or equivalent.`}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="syllabus">
          <Card>
            <CardHeader>
              <CardTitle>Course Syllabus</CardTitle>
              <CardDescription>Detailed course content and requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Course Content</h3>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between border-b p-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Week 1-2: Introduction and Fundamentals</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b p-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Week 3-4: Core Concepts</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b p-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Week 5-6: Advanced Topics</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Week 7-8: Applications and Projects</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Grading</h3>
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
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Course Schedule</CardTitle>
              <CardDescription>Weekly schedule and important dates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="flex items-center justify-between border-b p-3">
                    <div>
                      <p className="font-medium">Week 1: Introduction</p>
                      <p className="text-sm text-muted-foreground">May 1 - May 7, 2025</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Lectures: Mon, Wed 10:00-11:30</div>
                  </div>
                  <div className="flex items-center justify-between border-b p-3">
                    <div>
                      <p className="font-medium">Week 2: Basic Concepts</p>
                      <p className="text-sm text-muted-foreground">May 8 - May 14, 2025</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Lectures: Mon, Wed 10:00-11:30</div>
                  </div>
                  <div className="flex items-center justify-between border-b p-3 bg-muted/50">
                    <div>
                      <p className="font-medium">Week 3: Core Principles</p>
                      <p className="text-sm text-muted-foreground">May 15 - May 21, 2025</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Lectures: Mon, Wed 10:00-11:30</div>
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <div>
                      <p className="font-medium">Week 4: Advanced Topics</p>
                      <p className="text-sm text-muted-foreground">May 22 - May 28, 2025</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Lectures: Mon, Wed 10:00-11:30</div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Important Dates</h3>
                  <div className="space-y-2 rounded-md border p-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Assignment 1 Due</span>
                      <span>May 14, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Midterm Exam</span>
                      <span>May 25, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Assignment 2 Due</span>
                      <span>June 5, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Final Exam</span>
                      <span>June 28, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="grades">
          <Card>
            <CardHeader>
              <CardTitle>Course Grades</CardTitle>
              <CardDescription>Your performance in this course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b p-3 font-medium">
                    <div>Assessment</div>
                    <div>Due Date</div>
                    <div>Score</div>
                    <div>Weight</div>
                  </div>
                  <div className="grid grid-cols-4 border-b p-3">
                    <div>Assignment 1</div>
                    <div className="text-muted-foreground">May 14, 2025</div>
                    <div>85/100</div>
                    <div className="text-muted-foreground">10%</div>
                  </div>
                  <div className="grid grid-cols-4 border-b p-3">
                    <div>Quiz 1</div>
                    <div className="text-muted-foreground">May 21, 2025</div>
                    <div>90/100</div>
                    <div className="text-muted-foreground">5%</div>
                  </div>
                  <div className="grid grid-cols-4 border-b p-3">
                    <div>Midterm Exam</div>
                    <div className="text-muted-foreground">May 25, 2025</div>
                    <div>Upcoming</div>
                    <div className="text-muted-foreground">25%</div>
                  </div>
                  <div className="grid grid-cols-4 p-3">
                    <div>Current Grade</div>
                    <div></div>
                    <div className="font-medium">87.5/100</div>
                    <div className="text-muted-foreground">15% of total</div>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <h3 className="mb-2 font-medium">Grade Distribution</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>Assignments (30%)</span>
                        <span>85/100</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted-foreground/20">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>Midterm (25%)</span>
                        <span>Pending</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted-foreground/20">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "0%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>Final Exam (35%)</span>
                        <span>Pending</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted-foreground/20">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "0%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>Participation (10%)</span>
                        <span>90/100</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted-foreground/20">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
