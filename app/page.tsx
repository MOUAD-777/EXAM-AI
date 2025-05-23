import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">ExamGuard</h1>
        </div>
      </header>
      <main className="flex-1 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Secure Online Examination Platform</h2>
              <p className="text-xl text-muted-foreground">
                ExamGuard provides a secure environment for conducting online exams with advanced anti-fraud measures.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg">
                  <Link href="/login">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Secure Exam Platform"
                className="rounded-lg shadow-xl"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div id="features" className="mt-24 space-y-12">
            <h2 className="text-center text-3xl font-bold">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Generated Exams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Unique exams for each student generated from course materials using advanced LLM technology.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Anti-Fraud Measures</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Webcam monitoring, eye tracking, and tab switching detection to ensure exam integrity.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Seamless Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Intuitive interfaces for both students and teachers with real-time feedback and monitoring.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ExamGuard. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
