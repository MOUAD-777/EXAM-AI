import { NextResponse } from "next/server"
import { examData } from "@/lib/data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const exam = examData.exams.find((e) => e.id === params.id)

  if (!exam) {
    return NextResponse.json({ error: "Exam not found" }, { status: 404 })
  }

  return NextResponse.json(exam)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const examIndex = examData.exams.findIndex((e) => e.id === params.id)

    if (examIndex === -1) {
      return NextResponse.json({ error: "Exam not found" }, { status: 404 })
    }

    // In a real app, you would update the exam in the database
    const updatedExam = {
      ...examData.exams[examIndex],
      ...body,
    }

    return NextResponse.json(updatedExam)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update exam" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const examIndex = examData.exams.findIndex((e) => e.id === params.id)

  if (examIndex === -1) {
    return NextResponse.json({ error: "Exam not found" }, { status: 404 })
  }

  // In a real app, you would delete the exam from the database

  return NextResponse.json({ success: true })
}
