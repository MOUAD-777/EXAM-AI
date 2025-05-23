import type React from "react"
import { Sidebar } from "@/components/student/sidebar"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">{children}</main>
    </div>
  )
}
