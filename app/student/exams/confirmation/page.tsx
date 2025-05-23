import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExamConfirmationPage() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Exam Submitted Successfully</CardTitle>
          <CardDescription>Your exam has been received and will be processed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p>Thank you for completing your exam. Your responses have been securely recorded.</p>
          <div className="rounded-md bg-muted p-4">
            <p className="font-medium">Submission Details</p>
            <p className="text-sm text-muted-foreground">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-sm text-muted-foreground">Time: {new Date().toLocaleTimeString()}</p>
            <p className="text-sm text-muted-foreground">
              Reference: EX-
              {Math.floor(Math.random() * 10000)
                .toString()
                .padStart(4, "0")}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/student/dashboard">Return to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/student/exams">View All Exams</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
