import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, you would fetch submissions from a database
  const submissions = [
    {
      id: "sub1",
      studentId: "s1",
      examId: "exam1",
      submittedAt: "2025-05-22T14:30:00Z",
      answers: [0, 3, 0, 1, 0],
      score: 85,
      securityFlags: 1,
    },
    {
      id: "sub2",
      studentId: "s2",
      examId: "exam1",
      submittedAt: "2025-05-22T14:15:00Z",
      answers: [0, 3, 0, 2, 0],
      score: 92,
      securityFlags: 0,
    },
    {
      id: "sub3",
      studentId: "s3",
      examId: "exam4",
      submittedAt: "2025-05-21T10:00:00Z",
      answers: [1, 2, 3, 0, 1],
      score: 78,
      securityFlags: 0,
    },
  ]

  return NextResponse.json(submissions)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real app, you would validate the data and save it to a database
    const newSubmission = {
      id: `sub${Math.floor(Math.random() * 1000)}`,
      submittedAt: new Date().toISOString(),
      ...body,
    }

    // Here we would add the submission to the database

    return NextResponse.json(newSubmission, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create submission" }, { status: 500 })
  }
}
