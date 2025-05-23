import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExamTable } from "@/components/teacher/exam-table"

export default function TeacherExamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Exams</h1>
          <p className="text-muted-foreground">Create, edit, and monitor your exams</p>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/teacher/dashboard">Back to Dashboard</Link>
          </Button>
          <Button asChild>
            <Link href="/teacher/exams/create">
              <Sparkles className="mr-2 h-4 w-4" />
              Generate New Exam
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Exams</CardTitle>
              <CardDescription>Exams scheduled for the future</CardDescription>
            </CardHeader>
            <CardContent>
              <ExamTable status="upcoming" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Exams</CardTitle>
              <CardDescription>Completed exams with results</CardDescription>
            </CardHeader>
            <CardContent>
              <ExamTable status="past" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="drafts">
          <Card>
            <CardHeader>
              <CardTitle>Draft Exams</CardTitle>
              <CardDescription>Exams in preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <ExamTable status="draft" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
