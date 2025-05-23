import Link from "next/link"
import { ArrowUpDown, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubmissionsPage() {
  const submissions = [
    {
      id: "sub1",
      student: "John Doe",
      studentId: "S12345",
      exam: "Database Systems Midterm",
      course: "CS301: Database Systems",
      date: "2025-05-22T14:30:00Z",
      score: 85,
      securityFlags: 1,
    },
    {
      id: "sub2",
      student: "Jane Smith",
      studentId: "S12346",
      exam: "Database Systems Midterm",
      course: "CS301: Database Systems",
      date: "2025-05-22T14:15:00Z",
      score: 92,
      securityFlags: 0,
    },
    {
      id: "sub3",
      student: "Bob Johnson",
      studentId: "S12347",
      exam: "Web Development Final",
      course: "CS401: Web Development",
      date: "2025-05-21T10:00:00Z",
      score: 78,
      securityFlags: 0,
    },
    {
      id: "sub4",
      student: "Alice Brown",
      studentId: "S12348",
      exam: "Data Structures Quiz",
      course: "CS201: Data Structures",
      date: "2025-05-20T09:30:00Z",
      score: 95,
      securityFlags: 0,
    },
    {
      id: "sub5",
      student: "Charlie Wilson",
      studentId: "S12349",
      exam: "Introduction to Programming Final",
      course: "CS101: Introduction to Programming",
      date: "2025-05-19T13:00:00Z",
      score: 88,
      securityFlags: 2,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Exam Submissions</h1>
          <p className="text-muted-foreground">Review and grade student exam submissions</p>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="relative flex-1 md:w-64 md:flex-none">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search submissions..." className="pl-8" />
          </div>
          <Button variant="outline" asChild>
            <Link href="/teacher/submissions/export">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="w-full md:w-64">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Course</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    <SelectItem value="cs101">CS101: Introduction to Programming</SelectItem>
                    <SelectItem value="cs201">CS201: Data Structures</SelectItem>
                    <SelectItem value="cs301">CS301: Database Systems</SelectItem>
                    <SelectItem value="cs401">CS401: Web Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Exam</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select exam" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Exams</SelectItem>
                    <SelectItem value="midterm">Midterm Exams</SelectItem>
                    <SelectItem value="final">Final Exams</SelectItem>
                    <SelectItem value="quiz">Quizzes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Date Range</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Security Flags</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select flag status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Submissions</SelectItem>
                    <SelectItem value="flagged">Flagged Only</SelectItem>
                    <SelectItem value="clean">Clean Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="flagged">Flagged</TabsTrigger>
              <TabsTrigger value="all">All Submissions</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Submissions</CardTitle>
                  <CardDescription>Latest exam submissions from students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 border-b p-3 font-medium">
                      <div>Student</div>
                      <div>Exam</div>
                      <div>Course</div>
                      <div>
                        <Button variant="ghost" className="flex h-8 items-center gap-1 p-0 font-medium">
                          Date
                          <ArrowUpDown className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>
                        <Button variant="ghost" className="flex h-8 items-center gap-1 p-0 font-medium">
                          Score
                          <ArrowUpDown className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>Flags</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {submissions.map((submission) => (
                      <div key={submission.id} className="grid grid-cols-7 border-b p-3">
                        <div className="font-medium">{submission.student}</div>
                        <div className="text-sm text-muted-foreground">{submission.exam}</div>
                        <div className="text-sm text-muted-foreground">{submission.course}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(submission.date).toLocaleDateString()}
                        </div>
                        <div>{submission.score}/100</div>
                        <div>
                          {submission.securityFlags > 0 ? (
                            <span className="inline-flex rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                              {submission.securityFlags} {submission.securityFlags === 1 ? "flag" : "flags"}
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                              Clean
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/teacher/submissions/${submission.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="flagged">
              <Card>
                <CardHeader>
                  <CardTitle>Flagged Submissions</CardTitle>
                  <CardDescription>Submissions with security flags</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 border-b p-3 font-medium">
                      <div>Student</div>
                      <div>Exam</div>
                      <div>Course</div>
                      <div>Date</div>
                      <div>Score</div>
                      <div>Flags</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {submissions
                      .filter((s) => s.securityFlags > 0)
                      .map((submission) => (
                        <div key={submission.id} className="grid grid-cols-7 border-b p-3">
                          <div className="font-medium">{submission.student}</div>
                          <div className="text-sm text-muted-foreground">{submission.exam}</div>
                          <div className="text-sm text-muted-foreground">{submission.course}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(submission.date).toLocaleDateString()}
                          </div>
                          <div>{submission.score}/100</div>
                          <div>
                            <span className="inline-flex rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                              {submission.securityFlags} {submission.securityFlags === 1 ? "flag" : "flags"}
                            </span>
                          </div>
                          <div className="text-right">
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/teacher/submissions/${submission.id}`}>View</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>All Submissions</CardTitle>
                  <CardDescription>Complete list of exam submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 border-b p-3 font-medium">
                      <div>Student</div>
                      <div>Exam</div>
                      <div>Course</div>
                      <div>Date</div>
                      <div>Score</div>
                      <div>Flags</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {submissions.map((submission) => (
                      <div key={submission.id} className="grid grid-cols-7 border-b p-3">
                        <div className="font-medium">{submission.student}</div>
                        <div className="text-sm text-muted-foreground">{submission.exam}</div>
                        <div className="text-sm text-muted-foreground">{submission.course}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(submission.date).toLocaleDateString()}
                        </div>
                        <div>{submission.score}/100</div>
                        <div>
                          {submission.securityFlags > 0 ? (
                            <span className="inline-flex rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                              {submission.securityFlags} {submission.securityFlags === 1 ? "flag" : "flags"}
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                              Clean
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/teacher/submissions/${submission.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
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
