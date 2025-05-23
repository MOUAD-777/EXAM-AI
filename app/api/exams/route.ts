import { NextResponse } from "next/server"
import { examData } from "@/lib/data"

export async function GET() {
  return NextResponse.json(examData.exams)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real app, you would validate the data and save it to a database
    const newExam = {
      id: `exam${examData.exams.length + 1}`,
      ...body,
      status: body.status || "draft",
    }

    // Here we would add the exam to the database

    return NextResponse.json(newExam, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create exam" }, { status: 500 })
  }
}
