import { Check, X } from "lucide-react"

interface SubmissionAnswersProps {
  submissionId: string
}

export function SubmissionAnswers({ submissionId }: SubmissionAnswersProps) {
  // In a real app, you would fetch this data from your API
  const answers = [
    {
      questionNumber: 1,
      question: "What is a primary key in a relational database?",
      studentAnswer: "A unique identifier for a record in a table",
      correctAnswer: "A unique identifier for a record in a table",
      isCorrect: true,
      points: 20,
    },
    {
      questionNumber: 2,
      question: "Which of the following is NOT a type of SQL join?",
      studentAnswer: "Parallel Join",
      correctAnswer: "Parallel Join",
      isCorrect: true,
      points: 20,
    },
    {
      questionNumber: 3,
      question: "What does ACID stand for in database transactions?",
      studentAnswer: "Atomicity, Consistency, Isolation, Durability",
      correctAnswer: "Atomicity, Consistency, Isolation, Durability",
      isCorrect: true,
      points: 20,
    },
    {
      questionNumber: 4,
      question: "Which normal form eliminates transitive dependencies?",
      studentAnswer: "Second Normal Form (2NF)",
      correctAnswer: "Third Normal Form (3NF)",
      isCorrect: false,
      points: 0,
    },
    {
      questionNumber: 5,
      question: "What is the purpose of an index in a database?",
      studentAnswer: "To improve the speed of data retrieval operations",
      correctAnswer: "To improve the speed of data retrieval operations",
      isCorrect: true,
      points: 20,
    },
  ]

  const totalScore = answers.reduce((sum, answer) => sum + answer.points, 0)
  const maxScore = answers.length * 20

  return (
    <div className="space-y-6">
      <div className="rounded-md bg-muted p-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Total Score</span>
          <span className="font-medium">
            {totalScore}/{maxScore} ({Math.round((totalScore / maxScore) * 100)}%)
          </span>
        </div>
      </div>

      {answers.map((answer) => (
        <div key={answer.questionNumber} className="space-y-2 rounded-md border p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Question {answer.questionNumber}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{answer.points}/20 points</span>
              {answer.isCorrect ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
            </div>
          </div>

          <p className="text-sm">{answer.question}</p>

          <div className="space-y-1">
            <p className="text-sm font-medium">Student's Answer:</p>
            <p className={`text-sm ${answer.isCorrect ? "text-green-600" : "text-red-600"}`}>{answer.studentAnswer}</p>
          </div>

          {!answer.isCorrect && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Correct Answer:</p>
              <p className="text-sm text-green-600">{answer.correctAnswer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
