import Link from "next/link"
import { Calendar, Edit, Mail, MapPin, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeacherProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">View and manage your personal information</p>
        </div>
        <Button asChild>
          <Link href="/teacher/profile/edit">
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
                  <Link href="/teacher/profile/edit">
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
                  <p className="text-sm text-muted-foreground">Professor Smith</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">professor.smith@university.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Office</p>
                  <p className="text-sm text-muted-foreground">Science Building, Room 305</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Office Hours</p>
                  <p className="text-sm text-muted-foreground">Mon, Wed: 10:00 AM - 12:00 PM</p>
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
                  <CardDescription>Your academic details and teaching information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Faculty ID</p>
                      <p className="text-sm text-muted-foreground">F98765</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Department</p>
                      <p className="text-sm text-muted-foreground">Computer Science</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Position</p>
                      <p className="text-sm text-muted-foreground">Associate Professor</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Joined</p>
                      <p className="text-sm text-muted-foreground">September 1, 2018</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Specialization</p>
                      <p className="text-sm text-muted-foreground">Database Systems, Web Development</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Status</p>
                      <p className="text-sm text-muted-foreground">Active</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Education</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div>
                        <p className="font-medium">Ph.D. in Computer Science</p>
                        <p className="text-sm text-muted-foreground">Stanford University, 2015</p>
                      </div>
                      <div>
                        <p className="font-medium">M.S. in Computer Science</p>
                        <p className="text-sm text-muted-foreground">MIT, 2010</p>
                      </div>
                      <div>
                        <p className="font-medium">B.S. in Computer Engineering</p>
                        <p className="text-sm text-muted-foreground">University of California, Berkeley, 2008</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Current Teaching</h3>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-3 border-b p-3 font-medium">
                        <div>Course</div>
                        <div>Schedule</div>
                        <div>Students</div>
                      </div>
                      <div className="grid grid-cols-3 border-b p-3">
                        <div>CS301: Database Systems</div>
                        <div>Mon, Wed 10:00-11:30 AM</div>
                        <div>28</div>
                      </div>
                      <div className="grid grid-cols-3 border-b p-3">
                        <div>CS201: Data Structures</div>
                        <div>Tue, Thu 1:00-2:30 PM</div>
                        <div>35</div>
                      </div>
                      <div className="grid grid-cols-3 border-b p-3">
                        <div>CS401: Web Development</div>
                        <div>Mon, Wed 2:00-3:30 PM</div>
                        <div>23</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>CS101: Introduction to Programming</div>
                        <div>Tue, Thu 10:00-11:30 AM</div>
                        <div>42</div>
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
                          <p className="font-medium">Exam Submissions</p>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications when students submit exams
                          </p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Security Alerts</p>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications for security flags during exams
                          </p>
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
                    <h3 className="mb-4 text-lg font-medium">Exam Settings</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Default Security Level</p>
                          <p className="text-sm text-muted-foreground">Set default security level for new exams</p>
                        </div>
                        <select className="rounded-md border px-2 py-1 text-sm">
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">AI Question Generation</p>
                          <p className="text-sm text-muted-foreground">
                            Use AI to generate unique questions for each student
                          </p>
                        </div>
                        <div className="h-6 w-10 rounded-full bg-primary"></div>
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
                          <p className="text-sm text-muted-foreground">Last changed 2 months ago</p>
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
                          Enabled
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
                          <option>Faculty Only</option>
                          <option>Students & Faculty</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Contact Information</p>
                          <p className="text-sm text-muted-foreground">Control who can see your contact information</p>
                        </div>
                        <select className="rounded-md border px-2 py-1 text-sm">
                          <option>Students & Faculty</option>
                          <option>Faculty Only</option>
                          <option>Private</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">API Access</h3>
                    <div className="space-y-3 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">API Keys</p>
                          <p className="text-sm text-muted-foreground">Manage API keys for external integrations</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage Keys
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Webhooks</p>
                          <p className="text-sm text-muted-foreground">
                            Configure webhooks for real-time notifications
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
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
