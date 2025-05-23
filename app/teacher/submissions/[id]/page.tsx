import Link from "next/link"
import { ArrowLeft, Download, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubmissionDetails } from "@/components/teacher/submission-details"
import { SubmissionAnswers } from "@/components/teacher/submission-answers"
import { SubmissionSecurity } from "@/components/teacher/submission-security"

export default function SubmissionPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the submission data from your API
  const submission = {
    id: params.id,
    studentName: "John Doe",
    studentId: "S12345",
    examTitle: "Midterm Exam",
    course: "CS301: Database Systems",
    submittedAt: "2025-05-22T14:30:00Z",
    duration: "58 minutes",
    score: 85,
    securityFlags: 1,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/teacher/submissions">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Submission Details</h1>
            <p className="text-muted-foreground">
              {submission.examTitle} - {submission.studentName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/teacher/submissions/${params.id}/download`}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Student Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm text-muted-foreground">{submission.studentName}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Student ID</p>
              <p className="text-sm text-muted-foreground">{submission.studentId}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Course</p>
              <p className="text-sm text-muted-foreground">{submission.course}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Exam</p>
              <p className="text-sm text-muted-foreground">{submission.examTitle}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Submitted</p>
              <p className="text-sm text-muted-foreground">{new Date(submission.submittedAt).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Duration</p>
              <p className="text-sm text-muted-foreground">{submission.duration}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Score</p>
              <p className="text-sm text-muted-foreground">{submission.score}/100</p>
            </div>
            <div>
              <p className="text-sm font-medium">Security Flags</p>
              <p className="text-sm text-muted-foreground">
                {submission.securityFlags > 0 ? `${submission.securityFlags} flag(s) detected` : "No flags detected"}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="answers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="answers">Answers</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="answers">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Student Answers
                  </CardTitle>
                  <CardDescription>Review the student's answers to each question</CardDescription>
                </CardHeader>
                <CardContent>
                  <SubmissionAnswers submissionId={params.id} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Submission Details</CardTitle>
                  <CardDescription>Detailed information about this submission</CardDescription>
                </CardHeader>
                <CardContent>
                  <SubmissionDetails submissionId={params.id} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Analysis</CardTitle>
                  <CardDescription>Security monitoring results during the exam</CardDescription>
                </CardHeader>
                <CardContent>
                  <SubmissionSecurity submissionId={params.id} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
