import Link from "next/link"
import { Calendar, Edit, Mail, MapPin, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">View and manage your personal information</p>
        </div>
        <Button asChild>
          <Link href="/student/profile/edit">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-muted">
                <User className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background shadow-sm"
                  asChild
                >
                  <Link href="/student/profile/edit">
                    <Edit className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Full Name</p>
                  <p className="text-sm text-muted-foreground">John Doe</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">123 University Ave, College Town, CT 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Date of Birth</p>
                  <p className="text-sm text-muted-foreground">January 15, 2000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="academic">Academic Info</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="academic">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>Your academic details and enrollment information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Student ID</p>
                      <p className="text-sm text-muted-foreground">S12345</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Program</p>
                      <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Year</p>
                      <p className="text-sm text-muted-foreground">3rd Year</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Enrollment Date</p>
                      <p className="text-sm text-muted-foreground">September 1, 2022</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Expected Graduation</p>
                      <p className="text-sm text-muted-foreground">June 15, 2026</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Academic Status</p>
                      <p className="text-sm text-muted-foreground">Good Standing</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Academic Summary</h3>
                    <div className="rounded-md border p-4">
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Current GPA</p>
                          <p className="text-2xl font-bold">3.7</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Credits Completed</p>
                          <p className="text-2xl font-bold">72</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Credits Remaining</p>
                          <p className="text-2xl font-bold">48</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Current Semester</h3>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-3 border-b p-3 font-medium">
                        <div>Course</div>
                        <div>Credits</div>
                        <div>Grade</div>
                      </div>
                      <div className="grid grid-cols-3 border-b p-3">
                        <div>CS301: Database Systems</div>
                        <div>4</div>
                        <div>In Progress</div>
                      </div>
                      <div className="grid grid-cols-3 border-b p-3">
                        <div>CS201: Data Structures</div>
                        <div>4</div>
                        <div>In Progress</div>
                      </div>
                      <div className="grid grid-cols-3 border-b p-3">
                        <div>CS401: Web Development</div>
                        <div>3</div>
                        <div>In Progress</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>MATH301: Linear Algebra</div>
                        <div>3</div>
                        <div>In Progress</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>User Preferences</CardTitle>
                  <CardDescription>Customize your experience on the platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Notification Settings</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications for important updates
                          </p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Exam Reminders</p>
                          <p className="text-sm text-muted-foreground">
                            Receive reminders before upcoming exams and deadlines
                          </p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Grade Updates</p>
                          <p className="text-sm text-muted-foreground">Receive notifications when grades are posted</p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Display Settings</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Dark Mode</p>
                          <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-muted"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">High Contrast</p>
                          <p className="text-sm text-muted-foreground">Increase contrast for better readability</p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-muted"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Accessibility</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Screen Reader Support</p>
                          <p className="text-sm text-muted-foreground">Optimize content for screen readers</p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Font Size</p>
                          <p className="text-sm text-muted-foreground">Adjust text size for better readability</p>
                        </div>
                        <select className="rounded-md border px-2 py-1 text-sm">
                          <option>Default</option>
                          <option>Large</option>
                          <option>Extra Large</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and privacy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Account Security</h3>
                    <div className="space-y-4 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Password</p>
                          <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Change Password
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enable
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Login History</p>
                          <p className="text-sm text-muted-foreground">View your recent login activity</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View History
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Privacy Settings</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Profile Visibility</p>
                          <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                        </div>
                        <select className="rounded-md border px-2 py-1 text-sm">
                          <option>Public</option>
                          <option>Students Only</option>
                          <option>Private</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Data Usage</p>
                          <p className="text-sm text-muted-foreground">
                            Allow system to use your data for improvements
                          </p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Connected Accounts</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Google</p>
                          <p className="text-sm text-muted-foreground">Connected as john.doe@gmail.com</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Disconnect
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Microsoft</p>
                          <p className="text-sm text-muted-foreground">Not connected</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
