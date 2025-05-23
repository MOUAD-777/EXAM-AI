import Link from "next/link"
import { ArrowUpDown, Calendar, Download, FileText, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { examData } from "@/lib/data"

export default function ResultsPage() {
  // Mock results data
  const results = [
    {
      id: "res1",
      exam: "Database Systems Midterm",
      course: "CS301: Database Systems",
      date: "2025-05-15",
      score: 85,
      maxScore: 100,
      grade: "B",
      status: "Graded",
    },
    {
      id: "res2",
      exam: "Data Structures Quiz 1",
      course: "CS201: Data Structures",
      date: "2025-05-10",
      score: 92,
      maxScore: 100,
      grade: "A",
      status: "Graded",
    },
    {
      id: "res3",
      exam: "Web Development Assignment",
      course: "CS401: Web Development",
      date: "2025-05-08",
      score: 78,
      maxScore: 100,
      grade: "C+",
      status: "Graded",
    },
    {
      id: "res4",
      exam: "Introduction to Programming Final",
      course: "CS101: Introduction to Programming",
      date: "2025-04-30",
      score: 88,
      maxScore: 100,
      grade: "B+",
      status: "Graded",
    },
    {
      id: "res5",
      exam: "Database Systems Final",
      course: "CS301: Database Systems",
      date: "2025-05-28",
      score: null,
      maxScore: 100,
      grade: null,
      status: "Upcoming",
    },
  ]

  // Calculate overall statistics
  const gradedResults = results.filter((result) => result.status === "Graded")
  const totalScore = gradedResults.reduce((sum, result) => sum + result.score, 0)
  const averageScore = gradedResults.length > 0 ? totalScore / gradedResults.length : 0
  const highestScore = gradedResults.length > 0 ? Math.max(...gradedResults.map((result) => result.score)) : 0
  const lowestScore = gradedResults.length > 0 ? Math.min(...gradedResults.map((result) => result.score)) : 0

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Exam Results</h1>
          <p className="text-muted-foreground">View your exam scores and performance</p>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="relative flex-1 md:w-64 md:flex-none">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search results..." className="pl-8" />
          </div>
          <Button variant="outline" asChild>
            <Link href="/student/results/export">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageScore.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Across all graded exams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Highest Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highestScore}%</div>
            <p className="text-xs text-muted-foreground">Your best performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lowest Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lowestScore}%</div>
            <p className="text-xs text-muted-foreground">Your lowest performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Exams</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{gradedResults.length}</div>
            <p className="text-xs text-muted-foreground">Out of {results.length} total exams</p>
          </CardContent>
        </Card>
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
                    {examData.courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Exam Type</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="midterm">Midterm</SelectItem>
                    <SelectItem value="final">Final</SelectItem>
                    <SelectItem value="quiz">Quiz</SelectItem>
                    <SelectItem value="assignment">Assignment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Date Range</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="semester">This Semester</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Grade</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Grades</SelectItem>
                    <SelectItem value="a">A</SelectItem>
                    <SelectItem value="b">B</SelectItem>
                    <SelectItem value="c">C</SelectItem>
                    <SelectItem value="d">D</SelectItem>
                    <SelectItem value="f">F</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Results</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>All Exam Results</CardTitle>
                  <CardDescription>Complete history of your exam results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 border-b p-3 font-medium">
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
                      <div>Grade</div>
                      <div>Status</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {results.map((result) => (
                      <div key={result.id} className="grid grid-cols-7 border-b p-3">
                        <div className="font-medium">{result.exam}</div>
                        <div className="text-sm text-muted-foreground">{result.course}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(result.date).toLocaleDateString()}
                        </div>
                        <div>
                          {result.score !== null ? (
                            `${result.score}/${result.maxScore}`
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </div>
                        <div>
                          {result.grade ? (
                            <span
                              className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                                result.grade.startsWith("A")
                                  ? "bg-green-100 text-green-800"
                                  : result.grade.startsWith("B")
                                    ? "bg-blue-100 text-blue-800"
                                    : result.grade.startsWith("C")
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                              }`}
                            >
                              {result.grade}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </div>
                        <div>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                              result.status === "Graded" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {result.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" asChild disabled={result.status !== "Graded"}>
                            <Link href={`/student/results/${result.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recent">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Results</CardTitle>
                  <CardDescription>Your most recent exam results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results
                      .filter((result) => result.status === "Graded")
                      .slice(0, 3)
                      .map((result) => (
                        <div key={result.id} className="rounded-md border p-4">
                          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                            <div>
                              <h3 className="font-medium">{result.exam}</h3>
                              <p className="text-sm text-muted-foreground">{result.course}</p>
                              <p className="text-sm text-muted-foreground">
                                Date: {new Date(result.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">Score:</span>
                                <span className="text-sm">
                                  {result.score}/{result.maxScore}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">Grade:</span>
                                <span
                                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                                    result.grade.startsWith("A")
                                      ? "bg-green-100 text-green-800"
                                      : result.grade.startsWith("B")
                                        ? "bg-blue-100 text-blue-800"
                                        : result.grade.startsWith("C")
                                          ? "bg-yellow-100 text-yellow-800"
                                          : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {result.grade}
                                </span>
                              </div>
                              <Button size="sm" asChild>
                                <Link href={`/student/results/${result.id}`}>View Details</Link>
                              </Button>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="mb-1 flex justify-between text-xs">
                              <span>Your Score</span>
                              <span>{result.score}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted">
                              <div
                                className={`h-2 rounded-full ${
                                  result.score >= 90
                                    ? "bg-green-500"
                                    : result.score >= 80
                                      ? "bg-blue-500"
                                      : result.score >= 70
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                }`}
                                style={{ width: `${result.score}%` }}
                              />
                            </div>
                            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                              <span>Class Average: {Math.floor(result.score * 0.9)}%</span>
                              <span>Class High: {Math.floor(result.score * 1.05)}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>Insights into your exam performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Score Distribution</h3>
                    <div className="rounded-md border p-4">
                      <div className="space-y-4">
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>90-100% (A)</span>
                            <span>1 exam</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: "25%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>80-89% (B)</span>
                            <span>2 exams</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-blue-500" style={{ width: "50%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>70-79% (C)</span>
                            <span>1 exam</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-yellow-500" style={{ width: "25%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>Below 70% (D/F)</span>
                            <span>0 exams</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-red-500" style={{ width: "0%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Performance by Course</h3>
                    <div className="rounded-md border p-4">
                      <div className="space-y-4">
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>CS301: Database Systems</span>
                            <span>85%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-blue-500" style={{ width: "85%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>CS201: Data Structures</span>
                            <span>92%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: "92%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>CS401: Web Development</span>
                            <span>78%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-yellow-500" style={{ width: "78%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>CS101: Introduction to Programming</span>
                            <span>88%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-blue-500" style={{ width: "88%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Performance Trend</h3>
                    <div className="h-64 rounded-md border p-4">
                      <div className="flex h-full items-center justify-center">
                        <p className="text-sm text-muted-foreground">Performance trend chart would be displayed here</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Comparison to Class Average</h3>
                    <div className="rounded-md border p-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="rounded-md bg-muted p-3 text-center">
                            <p className="text-sm text-muted-foreground">Your Average</p>
                            <p className="text-2xl font-bold">{averageScore.toFixed(1)}%</p>
                          </div>
                          <div className="rounded-md bg-muted p-3 text-center">
                            <p className="text-sm text-muted-foreground">Class Average</p>
                            <p className="text-2xl font-bold">{(averageScore * 0.95).toFixed(1)}%</p>
                          </div>
                          <div className="rounded-md bg-muted p-3 text-center">
                            <p className="text-sm text-muted-foreground">Difference</p>
                            <p className="text-2xl font-bold text-green-600">+{(averageScore * 0.05).toFixed(1)}%</p>
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
      </div>
    </div>
  )
}
