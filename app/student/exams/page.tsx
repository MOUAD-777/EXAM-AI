import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExamList } from "@/components/student/exam-list"

export default function ExamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Exams</h1>
          <p className="text-muted-foreground">View and take your scheduled exams</p>
        </div>
        <Button asChild>
          <Link href="/student/dashboard">Back to Dashboard</Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All Exams</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Exams</CardTitle>
              <CardDescription>Your scheduled exams for the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <ExamList status="upcoming" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Exams</CardTitle>
              <CardDescription>Exams you have already taken</CardDescription>
            </CardHeader>
            <CardContent>
              <ExamList status="completed" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Exams</CardTitle>
              <CardDescription>All exams for the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <ExamList status="all" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
