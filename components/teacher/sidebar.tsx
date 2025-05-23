"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, FileText, Home, LogOut, Settings, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      name: "Dashboard",
      href: "/teacher/dashboard",
      icon: Home,
    },
    {
      name: "Exams",
      href: "/teacher/exams",
      icon: Calendar,
    },
    {
      name: "Courses",
      href: "/teacher/courses",
      icon: BookOpen,
    },
    {
      name: "Students",
      href: "/teacher/students",
      icon: Users,
    },
    {
      name: "Submissions",
      href: "/teacher/submissions",
      icon: FileText,
    },
    {
      name: "Profile",
      href: "/teacher/profile",
      icon: User,
    },
    {
      name: "Settings",
      href: "/teacher/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/teacher/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="text-primary">ExamGuard</span>
          <span className="text-xs text-muted-foreground">Teacher</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="flex flex-col gap-1">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={pathname === route.href ? "secondary" : "ghost"}
              className="justify-start"
              asChild
            >
              <Link href={route.href}>
                <route.icon className="mr-2 h-4 w-4" />
                {route.name}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}
