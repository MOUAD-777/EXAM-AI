"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, CameraOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface WebcamMonitorProps {
  onSecurityAlert: (message: string) => void
}

export function WebcamMonitor({ onSecurityAlert }: WebcamMonitorProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isWebcamActive, setIsWebcamActive] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let stream: MediaStream | null = null

    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 320 },
            height: { ideal: 240 },
            facingMode: "user",
          },
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          setIsWebcamActive(true)
          setError(null)
        }
      } catch (err) {
        console.error("Error accessing webcam:", err)
        setError("Unable to access webcam. Please check permissions.")
        onSecurityAlert("Webcam access is required for this exam.")
      }
    }

    startWebcam()

    // Simulate security checks
    const securityCheck = setInterval(() => {
      if (!isWebcamActive) {
        onSecurityAlert("Webcam is not active. Please enable your camera.")
      }

      // In a real implementation, you would use face detection and tracking here
    }, 10000)

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
      clearInterval(securityCheck)
    }
  }, [onSecurityAlert, isWebcamActive])

  return (
    <div className="space-y-2">
      {error ? (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <div className="relative overflow-hidden rounded-md bg-muted">
          <video ref={videoRef} autoPlay playsInline muted className="h-[160px] w-full object-cover" />
          <div className="absolute bottom-2 right-2">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => setIsWebcamActive(!isWebcamActive)}
            >
              {isWebcamActive ? <CameraOff className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
      <p className="text-xs text-muted-foreground">Your webcam is being monitored for security purposes</p>
    </div>
  )
}
