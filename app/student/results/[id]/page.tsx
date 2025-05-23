import Link from "next/link"
import { ArrowLeft, Calendar, Check, Download, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResultDetailPage({ params }: { params: { id: string } }) {
  // Mock result data
  const result = {
    id: params.id,
    exam: "Database Systems Midterm",
    course: "CS301: Database Systems",
    date: "2025-05-15",
    score: 85,
    maxScore: 100,
    grade: "B",
    status: "Graded",
    duration: "58 minutes",
    questions: [
      {
        question: "What is a primary key in a relational database?",
        yourAnswer: "A unique identifier for a record in a table",
        correctAnswer: "A unique identifier for a record in a table",
        isCorrect: true,
        points: 20,
        maxPoints: 20,
      },
      {
        question: "Which of the following is NOT a type of SQL join?",
        yourAnswer: "Parallel Join",
        correctAnswer: "Parallel Join",
        isCorrect: true,
        points: 20,
        maxPoints: 20,
      },
      {
        question: "What does ACID stand for in database transactions?",
        yourAnswer: "Atomicity, Consistency, Isolation, Durability",
        correctAnswer: "Atomicity, Consistency, Isolation, Durability",
        isCorrect: true,
        points: 20,
        maxPoints: 20,
      },
      {
        question: "Which normal form eliminates transitive dependencies?",
        yourAnswer: "Second Normal Form (2NF)",
        correctAnswer: "Third Normal Form (3NF)",
        isCorrect: false,
        points: 0,
        maxPoints: 20,
      },
      {
        question: "What is the purpose of an index in a database?",
        yourAnswer: "To improve the speed of data retrieval operations",
        correctAnswer: "To improve the speed of data retrieval operations",
        isCorrect: true,
        points: 20,
        maxPoints: 20,
      },
    ],
    feedback: "Good understanding of database concepts. Review normalization forms.",
    classAverage: 78,
    classHigh: 95,
    classLow: 65,
  }

  // Calculate statistics
  const correctAnswers = result.questions.filter((q) => q.isCorrect).length
  const totalQuestions = result.questions.length
  const percentageCorrect = (correctAnswers / totalQuestions) * 100

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/student/results">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{result.exam}</h1>
            <p className="text-muted-foreground">{result.course}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/student/results/${params.id}/print`}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {result.score}/{result.maxScore}
            </div>
            <p className="text-xs text-muted-foreground">Grade: {result.grade}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Average</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {result.classAverage}/{result.maxScore}
            </div>
            <p className="text-xs text-muted-foreground">
              You scored {result.score > result.classAverage ? "above" : "below"} average
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Date Taken</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Date(result.date).toLocaleDateString()}</div>
            <p className="text-xs text-muted-foreground">Duration: {result.duration}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
          <CardDescription>Overview of your exam performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Score Distribution</span>
              <span className="text-sm font-medium">{result.score}%</span>
            </div>
            <Progress value={result.score} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>Class Avg: {result.classAverage}%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="rounded-md bg-muted p-4">
            <div className="mb-2 font-medium">Performance Metrics</div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Correct Answers</p>
                <p className="text-lg font-medium">
                  {correctAnswers}/{totalQuestions} ({percentageCorrect.toFixed(0)}%)
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time Spent</p>
                <p className="text-lg font-medium">{result.duration}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Class Percentile</p>
                <p className="text-lg font-medium">
                  {Math.round(((result.score - result.classLow) / (result.classHigh - result.classLow)) * 100)}%
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2 font-medium">Instructor Feedback</div>
            <div className="rounded-md border p-4">
              <p className="text-sm">{result.feedback}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="questions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="questions">Questions & Answers</TabsTrigger>
          <TabsTrigger value="analytics">Detailed Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="questions">
          <Card>
            <CardHeader>
              <CardTitle>Questions and Answers</CardTitle>
              <CardDescription>Review your answers and correct solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {result.questions.map((question, index) => (
                  <div key={index} className="space-y-2 rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Question {index + 1}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {question.points}/{question.maxPoints} points
                        </span>
                        {question.isCorrect ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>

                    <p className="text-sm">{question.question}</p>

                    <div className="space-y-1">
                      <p className="text-sm font-medium">Your Answer:</p>
                      <p className={`text-sm ${question.isCorrect ? "text-green-600" : "text-red-600"}`}>
                        {question.yourAnswer}
                      </p>
                    </div>

                    {!question.isCorrect && (
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Correct Answer:</p>
                        <p className="text-sm text-green-600">{question.correctAnswer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>In-depth analysis of your performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">Topic Performance</h3>
                <div className="space-y-4 rounded-md border p-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Database Fundamentals</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>SQL Joins</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Database Transactions</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Normalization</span>
                      <span>0%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-red-500" style={{ width: "0%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Indexing</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Comparison to Class</h3>
                <div className="h-64 rounded-md border p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      Comparison chart showing your score relative to the class would be displayed here
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Recommended Study Areas</h3>
                <div className="rounded-md border p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-800">
                        1
                      </span>
                      <span>Review database normalization forms, especially 3NF and BCNF</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-yellow-800">
                        2
                      </span>
                      <span>Practice identifying functional dependencies in database schemas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                        3
                      </span>
                      <span>Continue strengthening knowledge of database fundamentals and SQL</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
