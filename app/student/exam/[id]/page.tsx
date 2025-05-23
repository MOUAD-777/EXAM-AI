"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { AlertTriangle, Clock, Eye } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { WebcamMonitor } from "@/components/student/webcam-monitor"
import { TabMonitor } from "@/components/student/tab-monitor"
import { examData } from "@/lib/data"

export default function ExamPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes in seconds
  const [securityAlerts, setSecurityAlerts] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const exam = examData.exams.find((e) => e.id === params.id)

  const timerId = useRef<number | null>(null)

  if (!exam) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Exam Not Found</CardTitle>
            <CardDescription>The exam you're looking for doesn't exist or you don't have access to it.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => router.push("/student/exams")} className="w-full">
              Return to Exams
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Timer effect
  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId.current as number)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current)
      }
    }
  }, [])

  // Security alert handler
  const handleSecurityAlert = (message: string) => {
    setSecurityAlerts((prev) => [...prev, message])
    toast({
      title: "Security Alert",
      description: message,
      variant: "destructive",
    })
  }

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Exam Submitted",
        description: "Your exam has been submitted successfully.",
      })
      router.push("/student/exams/confirmation")
    }, 2000)
  }

  const currentQuestionData = exam.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / exam.questions.length) * 100

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{exam.title}</h1>
          <p className="text-muted-foreground">{exam.course}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
          <Button variant="destructive" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Exam"}
          </Button>
        </div>
      </div>

      {securityAlerts.length > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Security Alert</AlertTitle>
          <AlertDescription>{securityAlerts[securityAlerts.length - 1]}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                Question {currentQuestion + 1} of {exam.questions.length}
              </CardTitle>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{currentQuestionData.question}</h3>
                <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswer} className="space-y-3">
                  {currentQuestionData.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                Previous
              </Button>
              <Button onClick={handleNext} disabled={currentQuestion === exam.questions.length - 1}>
                Next
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Security Monitoring
              </CardTitle>
              <CardDescription>Your exam is being monitored for security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <WebcamMonitor onSecurityAlert={handleSecurityAlert} />
              <TabMonitor onSecurityAlert={handleSecurityAlert} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Question Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {exam.questions.map((_, index) => (
                  <Button
                    key={index}
                    variant={index === currentQuestion ? "default" : answers[index] ? "outline" : "secondary"}
                    className="h-10 w-10 p-0"
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
