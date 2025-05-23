"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon, FileUp, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function CreateExamPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], correctAnswer: 0 }])

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correctAnswer: 0 }])
  }

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index))
  }

  const updateQuestion = (index: number, field: string, value: string | number) => {
    const updatedQuestions = [...questions]
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value }
    setQuestions(updatedQuestions)
  }

  const updateOption = (questionIndex: number, optionIndex: number, value: string) => {
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].options[optionIndex] = value
    setQuestions(updatedQuestions)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast({
      title: "Exam Created",
      description: "Your exam has been created successfully.",
    })

    router.push("/teacher/exams")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Generate New Exam</h1>
          <p className="text-muted-foreground">Generate a new exam for your students</p>
        </div>
        <Button asChild variant="outline">
          <a href="/teacher/dashboard">Back to Dashboard</a>
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Exam Details</CardTitle>
            <CardDescription>Basic information about the exam</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Exam Title</Label>
                <Input id="title" placeholder="e.g. Midterm Exam" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Select required>
                  <SelectTrigger id="course">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs101">CS101: Introduction to Programming</SelectItem>
                    <SelectItem value="cs201">CS201: Data Structures</SelectItem>
                    <SelectItem value="cs301">CS301: Database Systems</SelectItem>
                    <SelectItem value="cs401">CS401: Web Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Exam Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" min="15" defaultValue="60" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Exam Description</Label>
              <Textarea id="description" placeholder="Provide instructions or description for the exam" rows={3} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="materials">Course Materials</Label>
              <div className="flex items-center gap-2">
                <Input id="materials" type="file" className="cursor-pointer" />
                <Button type="button" size="icon" variant="outline">
                  <FileUp className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Upload course materials for AI to generate questions from</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security measures for the exam</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="webcam" className="flex flex-col space-y-1">
                <span>Webcam Monitoring</span>
                <span className="font-normal text-xs text-muted-foreground">
                  Monitor students via webcam during the exam
                </span>
              </Label>
              <Switch id="webcam" defaultChecked />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="eye-tracking" className="flex flex-col space-y-1">
                <span>Eye Tracking</span>
                <span className="font-normal text-xs text-muted-foreground">
                  Track eye movements to detect suspicious behavior
                </span>
              </Label>
              <Switch id="eye-tracking" defaultChecked />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="tab-switching" className="flex flex-col space-y-1">
                <span>Block Tab Switching</span>
                <span className="font-normal text-xs text-muted-foreground">
                  Prevent students from switching tabs during the exam
                </span>
              </Label>
              <Switch id="tab-switching" defaultChecked />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="unique-questions" className="flex flex-col space-y-1">
                <span>Generate Unique Questions</span>
                <span className="font-normal text-xs text-muted-foreground">
                  Use AI to generate different questions for each student
                </span>
              </Label>
              <Switch id="unique-questions" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Questions</CardTitle>
              <CardDescription>Add questions to your exam or let AI generate them</CardDescription>
            </div>
            <Button type="button" onClick={addQuestion} size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Question
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.map((question, qIndex) => (
              <div key={qIndex} className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Question {qIndex + 1}</h3>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeQuestion(qIndex)}
                    disabled={questions.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`question-${qIndex}`}>Question Text</Label>
                  <Textarea
                    id={`question-${qIndex}`}
                    value={question.question}
                    onChange={(e) => updateQuestion(qIndex, "question", e.target.value)}
                    placeholder="Enter your question here"
                    rows={2}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Answer Options</Label>
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center gap-2">
                      <Input
                        value={option}
                        onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                        placeholder={`Option ${oIndex + 1}`}
                      />
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={`correct-${qIndex}-${oIndex}`}
                          name={`correct-${qIndex}`}
                          checked={question.correctAnswer === oIndex}
                          onChange={() => updateQuestion(qIndex, "correctAnswer", oIndex)}
                          className="h-4 w-4"
                        />
                        <Label htmlFor={`correct-${qIndex}-${oIndex}`} className="text-sm">
                          Correct
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-center">
              <Button type="button" variant="outline" onClick={addQuestion}>
                <Plus className="mr-2 h-4 w-4" />
                Add Another Question
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline">
              Generate Questions with AI
            </Button>
            <Button type="submit">Generate Exam</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
