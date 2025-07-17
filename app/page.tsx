"use client"

import  React from "react"
import { AboutProgram } from "@/components/about-page"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  BookOpen,
  Award,
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Shield,
  Briefcase,
  MapPin,
  Quote,
  Calculator,
  FileText,
  X,
  Menu,
  Video,
  MessageCircle,
  PlayCircle,
  Download,
  UserCheck,
  Zap,
  Globe,
  Heart,
  Brain,
  Lightbulb,
  User,
} from "lucide-react"
import { useState, useEffect } from "react"
import { WhoIsThisFor } from "@/components/who-is-this-for-you"
import { ProgramStructure } from "@/components/program-structure"
import { WhySecondStint } from "@/components/why-second-Stint"

import { FinancialReadiness } from "@/components/finance-readiness"
import ReadinessSurvey from "@/components/career-readiness-survey"

// Assessment Call Booking Popup Component
function AssessmentCallBooking({ trigger }: { trigger: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    currentRole: "",
    experience: "",
    preferredTime: "",
    specificQuestions: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds and close dialog
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        currentRole: "",
        experience: "",
        preferredTime: "",
        specificQuestions: "",
      })
    }, 3000)
  }

  const isFormValid = formData.fullName && formData.contactNumber && formData.email

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Assessment Call Booked!</h3>
            <p className="text-slate-600 mb-4">
              Thank you for your interest. Our career transition expert will contact you within 24 hours to schedule
              your detailed assessment call.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>What&apos;s Next:</strong> You&apos;ll receive a confirmation email with available time slots and a
                pre-assessment questionnaire to make your call more productive.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-blue-600" />
            Book Your Detailed Assessment Call
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            Schedule a 30-minute consultation with our career transition expert to discuss your goals and program fit.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Personal Information
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contactNumber" className="text-slate-700">
                  Contact Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="mt-1"
                required
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              Professional Background
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentRole" className="text-slate-700">
                  Current/Last Role
                </Label>
                <Input
                  id="currentRole"
                  type="text"
                  placeholder="e.g., VP Technology, CEO, Director"
                  value={formData.currentRole}
                  onChange={(e) => handleInputChange("currentRole", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="experience" className="text-slate-700">
                  Years of Experience
                </Label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select experience</option>
                  <option value="10-15">10-15 years</option>
                  <option value="15-20">15-20 years</option>
                  <option value="20-25">20-25 years</option>
                  <option value="25+">25+ years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Call Preferences */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Call Preferences
            </h4>

            <div>
              <Label htmlFor="preferredTime" className="text-slate-700">
                Preferred Time Slot
              </Label>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <Label htmlFor="specificQuestions" className="text-slate-700">
                Specific Questions or Areas of Interest
              </Label>
              <Textarea
                id="specificQuestions"
                placeholder="e.g., Career transition timeline, program ROI, specific academic roles, etc."
                value={formData.specificQuestions}
                onChange={(e) => handleInputChange("specificQuestions", e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">What to Expect in Your Assessment Call:</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Personalized career transition roadmap</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Program fit evaluation based on your background</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Timeline and investment discussion</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Q&A about academic opportunities</span>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4">
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Booking Your Call...
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Assessment Call
                </>
              )}
            </Button>

            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="px-6 bg-transparent">
              Cancel
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center pt-4 border-t">
            <div className="flex items-center justify-center space-x-6 text-xs text-slate-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>30-Minute Call</span>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Professional Assessment Component
// function CareerReadinessAssessment() {
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [answers, setAnswers] = useState<number[]>([])
//   const [showResults, setShowResults] = useState(false)
//   const [score, setScore] = useState(0)

//   const questions = [
//     {
//       question: "How many years of senior leadership experience do you have?",
//       options: ["5-10 years", "10-15 years", "15-20 years", "20+ years"],
//       weights: [1, 2, 3, 4],
//     },
//     {
//       question: "What&apos;s your primary motivation for considering academia?",
//       options: ["Share knowledge & mentor", "Stay professionally active", "Build lasting legacy", "Financial security"],
//       weights: [4, 3, 4, 2],
//     },
//     {
//       question: "How comfortable are you with technology and online learning?",
//       options: ["Very comfortable", "Comfortable", "Somewhat comfortable", "Need support"],
//       weights: [4, 3, 2, 1],
//     },
//     {
//       question: "What&apos;s your preferred time commitment for this transition?",
//       options: ["Full-time focus", "Part-time (20+ hrs/week)", "Flexible schedule", "Minimal commitment"],
//       weights: [4, 3, 2, 1],
//     },
//     {
//       question: "How important is institutional prestige to you?",
//       options: ["Very important", "Important", "Somewhat important", "Not important"],
//       weights: [3, 4, 2, 1],
//     },
//   ]

//   const handleAnswer = (answerIndex: number) => {
//     const newAnswers = [...answers]
//     newAnswers[currentQuestion] = answerIndex
//     setAnswers(newAnswers)
//   }

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1)
//     } else {
//       calculateScore([...answers])
//     }
//   }

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1)
//     }
//   }

//   const calculateScore = (finalAnswers: number[]) => {
//     let totalScore = 0
//     finalAnswers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== undefined) {
//         totalScore += questions[questionIndex].weights[answerIndex]
//       }
//     })
//     setScore(totalScore)
//     setShowResults(true)
//   }

//   const getRecommendation = () => {
//     if (score >= 16) {
//       return {
//         level: "Excellent Fit",
//         color: "text-green-600",
//         bgColor: "bg-green-50",
//         message: "You&apos;re an ideal candidate for our program. Your experience and motivation align perfectly.",
//         nextStep: "Schedule a priority consultation",
//         priority: true,
//       }
//     } else if (score >= 12) {
//       return {
//         level: "Good Fit",
//         color: "text-blue-600",
//         bgColor: "bg-blue-50",
//         message: "You have strong potential for success. We recommend discussing your specific goals.",
//         nextStep: "Book a detailed assessment call",
//         priority: false,
//       }
//     } else if (score >= 8) {
//       return {
//         level: "Potential Fit",
//         color: "text-yellow-600",
//         bgColor: "bg-yellow-50",
//         message: "With some preparation, you could be successful. Let&apos;s explore your options.",
//         nextStep: "Join our information session",
//         priority: false,
//       }
//     } else {
//       return {
//         level: "Needs Preparation",
//         color: "text-orange-600",
//         bgColor: "bg-orange-50",
//         message: "Consider building more experience before joining. We can guide your preparation.",
//         nextStep: "Download our preparation guide",
//         priority: false,
//       }
//     }
//   }

//   const resetAssessment = () => {
//     setCurrentQuestion(0)
//     setAnswers([])
//     setShowResults(false)
//     setScore(0)
//   }

//   if (showResults) {
//     const recommendation = getRecommendation()
//     return (
//       <Card className="border-2 border-blue-200 shadow-xl">
//         <CardHeader className="text-center">
//           <CardTitle className="text-2xl text-slate-800">Your Assessment Results</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className={`text-center p-6 rounded-xl ${recommendation.bgColor}`}>
//             <h3 className={`text-2xl font-bold ${recommendation.color} mb-2`}>{recommendation.level}</h3>
//             <p className="text-slate-700 mb-4">{recommendation.message}</p>
//             <div className="flex items-center justify-center space-x-2 mb-4">
//               <span className="text-sm text-slate-600">Readiness Score:</span>
//               <span className={`text-xl font-bold ${recommendation.color}`}>{score}/20</span>
//             </div>
//             <Progress value={(score / 20) * 100} className="w-full mb-4" />
//           </div>

//           <div className="space-y-4">
//             {recommendation.priority ? (
//               <PriorityConsultationBooking
//                 trigger={
//                   <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     {recommendation.nextStep}
//                   </Button>
//                 }
//               />
//             ) : (
//               <AssessmentCallBooking
//                 trigger={
//                   <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     {recommendation.nextStep}
//                   </Button>
//                 }
//               />
//             )}
//             <Button variant="outline" onClick={resetAssessment} className="w-full bg-transparent">
//               Retake Assessment
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     )
//   }

//   const currentAnswer = answers[currentQuestion]
//   const canProceed = currentAnswer !== undefined

//   return (
//     <Card className="border-2 border-blue-200 shadow-xl">
//       <CardHeader>
//         <CardTitle className="text-xl text-slate-800">Career Readiness Assessment</CardTitle>
//         <CardDescription>
//           Question {currentQuestion + 1} of {questions.length}
//         </CardDescription>
//         <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-full" />
//       </CardHeader>
//       <CardContent
//         showNavigation={true}
//         onNext={handleNext}
//         onPrevious={handlePrevious}
//         navigationDisabled={{
//           previous: currentQuestion === 0,
//           next: !canProceed,
//         }}
//         className="space-y-6"
//       >
//         <h3 className="text-lg font-semibold text-slate-800">{questions[currentQuestion].question}</h3>
//         <div className="space-y-3">
//           {questions[currentQuestion].options.map((option, index) => (
//             <Button
//               key={index}
//               variant={currentAnswer === index ? "default" : "outline"}
//               className={`w-full text-left justify-start p-4 h-auto transition-all duration-200 ${
//                 currentAnswer === index
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "hover:bg-blue-50 hover:border-blue-300 bg-transparent"
//               }`}
//               onClick={() => handleAnswer(index)}
//             >
//               <div className="flex items-center space-x-3">
//                 <div
//                   className={`w-4 h-4 rounded-full border-2 ${
//                     currentAnswer === index ? "bg-white border-white" : "border-slate-300"
//                   }`}
//                 >
//                   {currentAnswer === index && <div className="w-2 h-2 bg-blue-600 rounded-full m-0.5"></div>}
//                 </div>
//                 <span>{option}</span>
//               </div>
//             </Button>
//           ))}
//         </div>

//         {/* Progress Indicator */}
//         <div className="flex justify-center space-x-2 pt-4">
//           {questions.map((_, index) => (
//             <div
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index <= currentQuestion ? "bg-blue-600" : "bg-slate-300"
//               } ${index === currentQuestion ? "w-6" : ""}`}
//             />
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// Priority Consultation Booking Component
function PriorityConsultationBooking({ trigger }: { trigger: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    currentRole: "",
    experience: "",
    currentSalary: "",
    preferredTime: "",
    urgency: "",
    specificGoals: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required"
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid contact number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.currentRole.trim()) {
      newErrors.currentRole = "Current role is required"
    }

    if (!formData.experience) {
      newErrors.experience = "Experience level is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 4 seconds and close dialog
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        currentRole: "",
        experience: "",
        currentSalary: "",
        preferredTime: "",
        urgency: "",
        specificGoals: "",
      })
      setErrors({})
    }, 4000)
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Priority Consultation Scheduled!</h3>
            <p className="text-slate-600 mb-4">
              Congratulations! Based on your excellent assessment score, you&apos;ve been fast-tracked for a priority
              consultation.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-green-800">
                <strong>What happens next:</strong>
              </p>
              <ul className="text-sm text-green-700 mt-2 space-y-1">
                <li>• Our senior consultant will call you within 2 hours</li>
                <li>• You&apos;ll receive a detailed program roadmap</li>
                <li>• Priority access to the next cohort</li>
                <li>• Exclusive early-bird pricing discussion</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-blue-800">Check your email for confirmation and pre-consultation materials.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800 flex items-center">
            <Award className="w-6 h-6 mr-3 text-green-600" />
            Priority Consultation Booking
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            Based on your excellent assessment score, you qualify for priority consultation with our senior academic
            transition expert.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-800">Priority Benefits</span>
          </div>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Fast-track consultation within 2 hours</li>
            <li>• Direct access to senior program director</li>
            <li>• Personalized career transition roadmap</li>
            <li>• Early-bird pricing eligibility</li>
            <li>• Direct contact with program director</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Personal Information
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={`mt-1 ${errors.fullName ? "border-red-500" : ""}`}
                  required
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <Label htmlFor="contactNumber" className="text-slate-700">
                  Contact Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  className={`mt-1 ${errors.contactNumber ? "border-red-500" : ""}`}
                  required
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              Professional Background
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentRole" className="text-slate-700">
                  Current/Last Role <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="currentRole"
                  type="text"
                  placeholder="e.g., VP Technology, CEO, Director"
                  value={formData.currentRole}
                  onChange={(e) => handleInputChange("currentRole", e.target.value)}
                  className={`mt-1 ${errors.currentRole ? "border-red-500" : ""}`}
                  required
                />
                {errors.currentRole && <p className="text-red-500 text-xs mt-1">{errors.currentRole}</p>}
              </div>

              <div>
                <Label htmlFor="experience" className="text-slate-700">
                  Years of Experience <span className="text-red-500">*</span>
                </Label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  className={`mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.experience ? "border-red-500" : ""}`}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="15-20">15-20 years</option>
                  <option value="20-25">20-25 years</option>
                  <option value="25-30">25-30 years</option>
                  <option value="30+">30+ years</option>
                </select>
                {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="currentSalary" className="text-slate-700">
                Current Annual Package (Optional)
              </Label>
              <select
                id="currentSalary"
                value={formData.currentSalary}
                onChange={(e) => handleInputChange("currentSalary", e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select salary range</option>
                <option value="20-30L">₹20-30 Lakhs</option>
                <option value="30-50L">₹30-50 Lakhs</option>
                <option value="50L+">₹50+ Lakhs</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* Consultation Preferences */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Consultation Preferences
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredTime" className="text-slate-700">
                  Preferred Time for Call
                </Label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select preferred time</option>
                  <option value="asap">ASAP (within 2 hours)</option>
                  <option value="today-evening">Today evening</option>
                  <option value="tomorrow-morning">Tomorrow morning</option>
                  <option value="tomorrow-evening">Tomorrow evening</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <Label htmlFor="urgency" className="text-slate-700">
                  Transition Timeline
                </Label>
                <select
                  id="urgency"
                  value={formData.urgency}
                  onChange={(e) => handleInputChange("urgency", e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within 3 months)</option>
                  <option value="6-months">Within 6 months</option>
                  <option value="1-year">Within 1 year</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="specificGoals" className="text-slate-700">
                Specific Academic Goals or Questions
              </Label>
              <Textarea
                id="specificGoals"
                placeholder="e.g., Target institutions, preferred subjects to teach, research interests, consulting goals, etc."
                value={formData.specificGoals}
                onChange={(e) => handleInputChange("specificGoals", e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          {/* Priority Features */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Your Priority Consultation Includes:</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>45-minute detailed discussion (vs. standard 30 minutes)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Personalized academic career roadmap</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Institution-specific placement strategy</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Early-bird program pricing discussion</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Direct contact with program director</span>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Scheduling Priority Consultation...
                </>
              ) : (
                <>
                  <Award className="w-4 h-4 mr-2" />
                  Schedule Priority Consultation
                </>
              )}
            </Button>

            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="px-6 bg-transparent">
              Cancel
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center pt-4 border-t">
            <div className="flex items-center justify-center space-x-6 text-xs text-slate-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-3 h-3" />
                <span>Priority Access</span>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Success Stories Component
function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0)

  const stories = [
    {
      name: "Rajesh Kumar",
      age: 52,
      previousRole: "VP Technology, Fortune 500",
      currentRole: "Professor of Practice, IIM Bangalore",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The transition was seamless. Within 6 months, I was teaching MBA students and consulting for startups. My industry experience became my biggest asset.",
      results: ["₹18L annual package", "Flexible schedule", "3 consulting projects"],
      timeline: "Joined: Jan 2023 | Placed: July 2023",
    },
    {
      name: "Priya Sharma",
      age: 48,
      previousRole: "Chief Marketing Officer",
      currentRole: "Dean of Executive Education, XLRI",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "After 20 years in corporate, I wanted to give back. This program helped me transition into academia while maintaining my consulting practice.",
      results: ["₹25L+ total income", "Published 2 papers", "50+ executives trained"],
      timeline: "Joined: March 2022 | Placed: Oct 2022",
    },
    {
      name: "Amit Patel",
      age: 55,
      previousRole: "CEO, Manufacturing Company",
      currentRole: "Visiting Faculty & Executive Coach",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I was worried about relevance after retirement. Now I&apos;m busier than ever, teaching at 3 institutions and running my coaching practice.",
      results: ["Multiple income streams", "Work-life balance", "Industry recognition"],
      timeline: "Joined: Aug 2022 | Placed: Feb 2023",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-slate-800 mb-4">Success Stories from Your Peers</h3>
        <p className="text-lg text-slate-600">Real professionals who made the transition successfully</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all duration-300 ${
              activeStory === index
                ? "border-2 border-blue-500 h-full shadow-xl scale-105"
                : "border border-slate-200 h-52 hover:shadow-lg"
            }`}
            onMouseEnter={() => setActiveStory(index)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-blue-200"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{story.name}</h4>
                  <p className="text-sm text-slate-600">Age: {story.age}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Previous Role</p>
                  <p className="text-sm font-medium text-slate-700">{story.previousRole}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Current Role</p>
                  <p className="text-sm font-medium text-blue-700">{story.currentRole}</p>
                </div>
              </div>

              {activeStory === index && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-300">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Quote className="w-5 h-5 text-blue-600 mb-2" />
                    <p className="text-sm text-slate-700 italic">{story.quote}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Key Results</p>
                    <div className="space-y-1">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 border-t pt-3">{story.timeline}</div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <div className="text-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
          <Video className="w-4 h-4 mr-2" />
          Watch Full Video Testimonials
        </Button>
      </div> */}
    </div>
  )
}

// ROI Calculator Component


// Advanced Program Slider
function ProgramSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)


  const slides = [
    {
      id: "overview",
      title: "Program Overview",
      subtitle: "Comprehensive 11-Month Journey",
      icon: Target,
      content: (
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                Time Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-800">Residential Bootcamp</p>
                    <p className="text-sm text-slate-600">Intensive foundation building</p>
                  </div>
                  <Badge className="bg-blue-600 text-white/90">7 Days</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-800">Monthly Sessions</p>
                    <p className="text-sm text-slate-600">Hands-on skill development</p>
                  </div>
                  <Badge className="bg-green-600 text-white/90">2 Days/Month</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-800">Online Masterclasses</p>
                    <p className="text-sm text-slate-600">Expert-led virtual sessions</p>
                  </div>
                  <Badge className="bg-purple-600 text-white/90">4 Hours/Week</Badge>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-slate-800 mb-3">Total Commitment</h4>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-2xl font-bold text-slate-800">8-10 Hours</p>
                  <p className="text-slate-600">per week average</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-400" />
                Certification & Credentials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  { title: "Professor of Practice Certification", desc: "Industry-recognized credential" },
                  { title: "Teaching Excellence Certificate", desc: "Pedagogy and methodology" },
                  { title: "Executive Coaching Certification", desc: "Professional coaching skills" },
                  { title: "Academic Writing Certification", desc: "Research and publication" },
                ].map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{cert.title}</p>
                      <p className="text-sm text-slate-300">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-400/20 p-4 rounded-lg border border-yellow-400/30">
                <p className="text-yellow-200 text-sm">
                  <Shield className="w-4 h-4 inline mr-2" />
                  All certifications are industry-recognized and enhance your professional credibility
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "curriculum",
      title: "Curriculum Deep Dive",
      subtitle: "What You&apos;ll Learn",
      icon: BookOpen,
      content: (
        <Tabs defaultValue="foundation" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="foundation">Foundation</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="specialization">Specialization</TabsTrigger>
            <TabsTrigger value="transition">Transition</TabsTrigger>
          </TabsList>

          <TabsContent value="foundation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Months 1-2: Foundation Phase</CardTitle>
                <CardDescription>Building your academic foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Core Modules</h4>
                    <ul className="space-y-2">
                      {[
                        "Academic Writing & Research Methods",
                        "Teaching Pedagogy & Methodology",
                        "Curriculum Design & Development",
                        "Student Psychology & Learning",
                        "Technology in Education",
                      ].map((module, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-slate-700">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Practical Exercises</h4>
                    <ul className="space-y-2">
                      {[
                        "Mock teaching sessions",
                        "Case study development",
                        "Research paper writing",
                        "Presentation skills",
                        "Academic networking",
                      ].map((exercise, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Lightbulb className="w-4 h-4 text-yellow-500" />
                          <span className="text-slate-700">{exercise}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="development" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Months 3-6: Development Phase</CardTitle>
                <CardDescription>Advanced teaching and mentoring skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Advanced Modules</h4>
                    <ul className="space-y-2">
                      {[
                        "Executive Education Design",
                        "Corporate Training Methods",
                        "Mentorship & Coaching",
                        "Assessment & Evaluation",
                        "Industry-Academia Bridge",
                      ].map((module, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-slate-700">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Real-World Practice</h4>
                    <ul className="space-y-2">
                      {[
                        "Guest lectures at partner institutions",
                        "Corporate workshop delivery",
                        "Student mentoring projects",
                        "Research collaboration",
                        "Conference presentations",
                      ].map((practice, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Brain className="w-4 h-4 text-purple-500" />
                          <span className="text-slate-700">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specialization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Months 7-9: Specialization Phase</CardTitle>
                <CardDescription>Choose your academic focus area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Management & Strategy",
                      desc: "Leadership, strategy, operations",
                      icon: Briefcase,
                    },
                    {
                      title: "Technology & Innovation",
                      desc: "Digital transformation, AI, tech management",
                      icon: Zap,
                    },
                    {
                      title: "Finance & Economics",
                      desc: "Corporate finance, economics, markets",
                      icon: DollarSign,
                    },
                    {
                      title: "Marketing & Sales",
                      desc: "Brand management, digital marketing",
                      icon: TrendingUp,
                    },
                    {
                      title: "Human Resources",
                      desc: "Talent management, organizational behavior",
                      icon: Users,
                    },
                    {
                      title: "Entrepreneurship",
                      desc: "Startup ecosystem, venture capital",
                      icon: Target,
                    },
                  ].map((spec, index) => (
                    <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors">
                      <CardContent className="p-4 text-center">
                        <spec.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <h5 className="font-semibold text-slate-800 mb-1">{spec.title}</h5>
                        <p className="text-sm text-slate-600">{spec.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transition" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Months 10-11: Transition Phase</CardTitle>
                <CardDescription>Career placement and launch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Placement Support</h4>
                    <div className="space-y-3">
                      {[
                        { title: "CV & Portfolio Development", desc: "Academic-focused resume building" },
                        { title: "Interview Preparation", desc: "Mock interviews with feedback" },
                        { title: "Institution Matching", desc: "Connect with suitable opportunities" },
                        { title: "Salary Negotiation", desc: "Maximize your compensation package" },
                      ].map((support, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                          <UserCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-slate-800">{support.title}</p>
                            <p className="text-sm text-slate-600">{support.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Launch Activities</h4>
                    <div className="space-y-3">
                      {[
                        { title: "First Teaching Assignment", desc: "Guided initial teaching experience" },
                        { title: "Research Project Launch", desc: "Begin your academic research" },
                        { title: "Network Integration", desc: "Join academic and industry networks" },
                        { title: "Ongoing Mentorship", desc: "6-month post-program support" },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                          <Heart className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-slate-800">{activity.title}</p>
                            <p className="text-sm text-slate-600">{activity.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ),
    },
    // {
    //   id: "investment",
    //   title: "Investment & Returns",
    //   subtitle: "Financial Planning for Your Transition",
    //   icon: DollarSign,
    //   content: (
    //     <div className="grid lg:grid-cols-2 gap-8">
    //       <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-900 to-blue-900 text-white">
    //         <CardHeader>
    //           <CardTitle className="text-2xl flex items-center">
    //             <DollarSign className="w-6 h-6 mr-3 text-yellow-400" />
    //             Program Investment
    //           </CardTitle>
    //         </CardHeader>
    //         <CardContent className="space-y-6">
    //           <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
    //             <p className="text-4xl font-bold text-yellow-400 mb-2">₹9 Lakhs</p>
    //             <p className="text-blue-200 text-lg">Total Program Fee</p>
    //             <p className="text-blue-300 text-sm mt-2">Flexible payment options available</p>
    //           </div>

    //           <div className="space-y-4">
    //             <h4 className="font-semibold text-xl text-yellow-400">What's Included:</h4>
    //             {[
    //               { item: "11-month comprehensive curriculum", value: "₹4L value" },
    //               { item: "Residential bootcamp & monthly sessions", value: "₹2L value" },
    //               { item: "Industry certifications", value: "₹1L value" },
    //               { item: "Career placement support", value: "₹1L value" },
    //               { item: "Lifetime alumni network access", value: "₹1L value" },
    //             ].map((inclusion, index) => (
    //               <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
    //                 <span className="text-blue-100">{inclusion.item}</span>
    //                 <Badge className="bg-green-600">{inclusion.value}</Badge>
    //               </div>
    //             ))}
    //           </div>

    //           <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
    //             <p className="text-green-200 text-sm">
    //               <Shield className="w-4 h-4 inline mr-2" />
    //               100% Money-back guarantee if not placed within 12 months
    //             </p>
    //           </div>
    //         </CardContent>
    //       </Card>

    //       <Card className="border-0 shadow-lg bg-white">
    //         <CardHeader>
    //           <CardTitle className="text-2xl text-slate-800 flex items-center">
    //             <TrendingUp className="w-6 h-6 mr-3 text-green-600" />
    //             Expected Returns
    //           </CardTitle>
    //         </CardHeader>
    //         <CardContent className="space-y-6">
    //           <div className="grid grid-cols-2 gap-4">
    //             <div className="text-center p-4 bg-green-50 rounded-lg">
    //               <p className="text-2xl font-bold text-green-600">₹15-25L</p>
    //               <p className="text-sm text-slate-600">Annual Academic Salary</p>
    //             </div>
    //             <div className="text-center p-4 bg-blue-50 rounded-lg">
    //               <p className="text-2xl font-bold text-blue-600">₹5-15L</p>
    //               <p className="text-sm text-slate-600">Consulting Income</p>
    //             </div>
    //           </div>

    //           <div className="space-y-4">
    //             <h4 className="font-semibold text-slate-800">Career Progression Timeline:</h4>
    //             <div className="space-y-3">
    //               {[
    //                 { period: "Year 1", role: "Visiting Faculty", salary: "₹12-18L" },
    //                 { period: "Year 2-3", role: "Professor of Practice", salary: "₹18-25L" },
    //                 { period: "Year 4+", role: "Senior Faculty/Dean", salary: "₹25-40L" },
    //               ].map((progression, index) => (
    //                 <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
    //                   <div>
    //                     <p className="font-medium text-slate-800">{progression.period}</p>
    //                     <p className="text-sm text-slate-600">{progression.role}</p>
    //                   </div>
    //                   <Badge className="bg-green-600">{progression.salary}</Badge>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>

    //           <div className="border-t pt-4">
    //             <h4 className="font-semibold text-slate-800 mb-3">Additional Benefits:</h4>
    //             <ul className="space-y-2">
    //               {[
    //                 "Flexible working hours",
    //                 "Prestigious institutional affiliation",
    //                 "Continuous learning opportunities",
    //                 "Global academic network",
    //                 "Research and publication opportunities",
    //               ].map((benefit, index) => (
    //                 <li key={index} className="flex items-center space-x-2">
    //                   <CheckCircle className="w-4 h-4 text-green-500" />
    //                   <span className="text-sm text-slate-700">{benefit}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   ),
    // },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="space-y-8">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-2">Program Details</h3>
          <p className="text-lg text-slate-600">Comprehensive information about your transformation journey</p>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-2 border-slate-300 hover:border-blue-500 bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-slate-600 font-medium">
            {currentSlide + 1} of {slides.length}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-2 border-slate-300 hover:border-blue-500 bg-transparent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="flex space-x-2 bg-slate-100 p-2 rounded-lg">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                index === currentSlide ? "bg-white text-blue-700 shadow-md" : "text-slate-600 hover:text-slate-800"
              }`}
            >
              <slide.icon className="w-4 h-4" />
              <span className="font-medium">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Slide Content */}
      <div className="min-h-[600px]">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-slate-800 mb-2">{slides[currentSlide].title}</h4>
          <p className="text-lg text-slate-600">{slides[currentSlide].subtitle}</p>
        </div>
        {slides[currentSlide].content}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-blue-600 w-8" : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Main Component
export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }



  return (
    <div className="min-h-screen bg-white">
      
      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and tagline section */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
            <div className="flex-shrink-0">
            <Image
                src="/logo.webp"
                alt="Second Stint Program"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </div>

            {/* Tagline and stats - responsive visibility */}
            <div className="hidden sm:block min-w-0 flex-1">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-tight truncate">
                Transforming Industry Leaders into Academic Pioneers
              </p>
              <div className="hidden md:flex items-center space-x-3 lg:space-x-4 text-xs text-slate-500 mt-1">
                <span className="flex items-center whitespace-nowrap">
                  <Shield className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="hidden lg:inline">Trusted by </span>500+ Leaders
                </span>
                <span className="flex items-center whitespace-nowrap">
                  <Award className="w-3 h-3 mr-1 flex-shrink-0" />
                  95% Placement<span className="hidden lg:inline"> Rate</span>
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 flex-shrink-0">
            <Link
              href="#about"
              className="text-slate-700 hover:text-blue-700 font-medium transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Program Overview
            </Link>
            <Link
              href="#assessment"
              className="text-slate-700 hover:text-blue-700 font-medium transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Readiness Check
            </Link>
            <Link
              href="#investment"
              className="text-slate-700 hover:text-blue-700 font-medium transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Investment
            </Link>
            
            <AssessmentCallBooking
              trigger={
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-3 xl:px-4 2xl:px-6 py-2 text-sm xl:text-base whitespace-nowrap">
                  <Calendar className="w-4 h-4 mr-1 xl:mr-2" />
                  <span className="hidden xl:inline">Book </span>Consultation
                </Button>
              }
            />
          </nav>

          {/* Mobile CTA Button (visible on medium screens) */}
          <div className="hidden md:block lg:hidden flex-shrink-0 ml-4">
            <AssessmentCallBooking
              trigger={
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  Book Call
                </Button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden flex-shrink-0 ml-2 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile tagline and stats - shown on small screens */}
        <div className="sm:hidden mt-2 px-1">
          <p className="text-xs text-slate-600 leading-tight mb-1">
            Transforming Industry Leaders into Academic Pioneers
          </p>
          <div className="flex items-center space-x-4 text-xs text-slate-500">
            <span className="flex items-center">
              <Shield className="w-3 h-3 mr-1" />
              500+ Leaders
            </span>
            <span className="flex items-center">
              <Award className="w-3 h-3 mr-1" />
              95% Placement
            </span>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="#about"
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors py-2 px-2 rounded-md hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Program Overview
              </Link>
              <Link
                href="#assessment"
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors py-2 px-2 rounded-md hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Readiness Check
              </Link>
              <Link
                href="#investment"
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors py-2 px-2 rounded-md hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investment
              </Link>

              {/* Mobile CTA Button */}
              <div className="pt-2">
                <AssessmentCallBooking
                  trigger={
                    <Button
                      className="bg-blue-700 hover:bg-blue-800 text-white w-full justify-center py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                  }
                />
              </div>

              {/* Mobile stats (duplicate for menu) */}
              <div className="flex items-center justify-center space-x-6 text-xs text-slate-500 pt-2 border-t border-slate-100 mt-4">
                <span className="flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Trusted by 500+ Leaders
                </span>
                <span className="flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  95% Placement Rate
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
      {/* <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.webp"
                alt="Second Stint Program"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
              </div>
              <div className="hidden md:block">
                <p className="text-sm text-slate-600">Transforming Industry Leaders into Academic Pioneers</p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span className="flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    Trusted by 500+ Leaders
                  </span>
                  <span className="flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    95% Placement Rate
                  </span>
                </div>
              </div>
              
            
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#about" className="text-slate-700 hover:text-blue-700 font-medium transition-colors">
                Program Overview
              </Link>
              <Link href="#assessment" className="text-slate-700 hover:text-blue-700 font-medium transition-colors">
                Readiness Check
              </Link> */}
              {/* <Link href="#success" className="text-slate-700 hover:text-blue-700 font-medium transition-colors">
                Success Stories
              </Link> */}
              {/* <Link href="#investment" className="text-slate-700 hover:text-blue-700 font-medium transition-colors">
                Investment
              </Link>
              <AssessmentCallBooking
                trigger={
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                }
              />
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                For Senior Professionals Aged 45-60
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Transform Your Experience Into
                <span className="relative inline-block">
            <span className="relative z-10 pl-3 pr-3"> 
              {" "}Academic Excellence</span>
            <span className="absolute inset-0 bg-gradient-to-l to-blue-800 opacity-20 border-2 p-2 border-blue-500 rounded-md animate-slide-in"></span>
          </span>
                {/* <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Academic Excellence
                </span> */}
              </h1>
              <style jsx>{`
        @keyframes slide-in {
          0% {
            width: 0%;
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            width: 100%;
            opacity: 0.2;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 2s ease-out forwards;
          transform-origin: left center;
        }
      `}</style>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                India&apos;s premier structured pathway for accomplished professionals transitioning into academia, training,
                and consulting. Turn your decades of industry expertise into a prestigious second career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg">
                <Target className="w-5 h-5 mr-2" />
                Take Readiness Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:border-blue-500 px-8 py-4 text-lg bg-transparent"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Program Overview
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>11-Month Structured Program</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>95% Placement Success</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>₹15-25L Average Package</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      {/* <section className="py-12 bg-white border-b hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-slate-600 font-medium">Trusted by professionals from leading organizations</p>
          </div>
          {(() => {
            // Company slider logic with smooth sliding animation
            const companies = ["TCS", "Infosys", "Wipro", "HCL", "Accenture", "IBM", "Microsoft", "Google"];
            const visibleCount = 6;
            const [startIndex, setStartIndex] = React.useState(0);
            const [isAnimating, setIsAnimating] = React.useState(false);

            // Duplicate companies for seamless looping
            const extendedCompanies = [...companies, ...companies.slice(0, visibleCount)];

            React.useEffect(() => {
              const interval = setInterval(() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setStartIndex((prev) => {
                    // Reset to 0 when reaching the end for seamless loop
                    if (prev + 1 >= companies.length) {
                      setIsAnimating(false);
                      return 0;
                    }
                    return prev + 1;
                  });
                }, 500); // Duration of the slide animation
              }, 1800);
              return () => clearInterval(interval);
            }, [companies.length]);

            // Calculate translateX for smooth sliding
            const slideWidth = 120; // px, adjust as needed for spacing
            const translateX = -startIndex * slideWidth;

            return (
              <div
                className="overflow-hidden w-full flex justify-center sm:ml-16 md:ml-10 lg:ml-60 "
                style={{ maxWidth: `${slideWidth * visibleCount}px` }}
              >
                <div
                  className="flex items-center opacity-60"
                  style={{
                    transition: isAnimating ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
                    transform: `translateX(${translateX}px)`,
                  }}
                  onTransitionEnd={() => setIsAnimating(false)}
                >
                  {extendedCompanies.slice(0, companies.length + visibleCount).map((company, idx) => (
                    <div
                      key={company + idx}
                      className="text-slate-400 font-bold text-lg h-16 flex items-center justify-center flex-shrink-0"
                      style={{ width: `${slideWidth}px`, textAlign: "center" }}
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section> */}

      <AboutProgram/>
      <WhoIsThisFor/>
      <ProgramStructure/>
      <WhySecondStint/>
      {/* <ReadinessSurvey/> */}
      <ReadinessSurvey/>
      

      {/* Career Assessment Section
      <section id="assessment" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Assess Your Readiness for Academic Transition</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Take our comprehensive assessment to understand your fit for the program and receive personalized
                recommendations
              </p>
            </div>

            <div className="grid  gap-12 items-start">
              <CareerReadinessAssessment />
              <ROICalculator />
            </div>
          </div>
        </div>
      </section> */}

      {/* Success Stories */}
      <section id="success" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SuccessStories />
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ProgramSlider />
          </div>
        </div>
      </section>

        <FinancialReadiness/>

      {/* Why Choose This Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Why Choose Academic Transition Over Traditional Retirement?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Compare the benefits of staying professionally active through academia versus conventional retirement
                options
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Stay Intellectually Engaged",
                  description:
                    "Continue learning, researching, and contributing to knowledge creation while sharing your expertise",
                  icon: Brain,
                  benefits: [
                    "Continuous learning",
                    "Research opportunities",
                    "Knowledge sharing",
                    "Mental stimulation",
                  ],
                },
                {
                  title: "Financial Security & Growth",
                  description:
                    "Maintain and potentially increase your income through academic salaries and consulting opportunities",
                  icon: DollarSign,
                  benefits: ["Steady income", "Consulting revenue", "Pension benefits", "Financial growth"],
                },
                {
                  title: "Legacy & Impact",
                  description:
                    "Shape the next generation of leaders and leave a lasting impact on industry and education",
                  icon: Heart,
                  benefits: ["Mentoring leaders", "Industry impact", "Knowledge legacy", "Recognition"],
                },
                {
                  title: "Professional Network",
                  description:
                    "Expand your network across academia and industry, opening new collaboration opportunities",
                  icon: Globe,
                  benefits: ["Academic network", "Industry connections", "Global reach", "Collaborations"],
                },
                {
                  title: "Flexible Lifestyle",
                  description: "Enjoy the flexibility of academic schedules while maintaining professional engagement",
                  icon: Clock,
                  benefits: ["Flexible hours", "Work-life balance", "Travel opportunities", "Sabbaticals"],
                },
                {
                  title: "Prestigious Affiliation",
                  description:
                    "Associate with renowned institutions and enhance your professional standing and credibility",
                  icon: Award,
                  benefits: ["Institutional prestige", "Professional credibility", "Industry recognition", "Status"],
                },
              ].map((benefit, index) => (
      <Card key={index} className="border-2 relative z-10 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">{benefit.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4 flex-grow">{benefit.description}</p>
                    <div className="space-y-2">
                      {benefit.benefits.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                   
                  </CardContent>
                </Card>
       
               
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Advanced Countdown CTA */}
      {/* <CountdownCTA /> */}

      {/* Advanced Testimonials Carousel */}
      {/* <TestimonialsCarousel /> */}

      {/* Lifestyle Comparison */}
      {/* <LifestyleComparison /> */}



      {/* Contact & Consultation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Ready to Begin Your Transition?</h2>
              <p className="text-xl text-slate-600">
                Schedule a consultation with our career transition experts to discuss your specific goals
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">Free Consultation</CardTitle>
                  <CardDescription>30-minute career assessment call</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {[
                      "Personalized career assessment",
                      "Program fit evaluation",
                      "Timeline planning",
                      "Investment discussion",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <AssessmentCallBooking
                    trigger={
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Free Consultation
                      </Button>
                    }
                  />
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">Program Brochure</CardTitle>
                  <CardDescription>Detailed curriculum and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {["Complete curriculum details", "Faculty profiles", "Success stories", "Investment breakdown"].map(
                      (item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">Information Session</CardTitle>
                  <CardDescription>Join our next group session</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {[
                      "Live program overview",
                      "Q&A with faculty",
                      "Meet fellow participants",
                      "Networking opportunity",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Users className="w-4 h-4 mr-2" />
                    Join Next Session
                  </Button>
                </CardContent>
              </Card>
            </div>

             {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Get answers to common questions about the program</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What are the specific eligibility criteria for the program?",
                  answer:
                    "We accept senior professionals aged 45-60 with minimum 15 years of leadership experience. This includes CXOs, VPs, Directors, Business Heads, and Functional Leaders from any industry. We also welcome retiring professionals, women returning from career breaks, and entrepreneurs seeking academic engagement. A bachelor&apos;s degree is required, but a PhD is not necessary.",
                },
                {
                  question: "How much time commitment is required weekly?",
                  answer:
                    "The program requires 8-10 hours per week on average. This includes 4 hours of online masterclasses, 2-3 hours of self-study, and 2-3 hours for assignments and projects. Additionally, you&apos;ll attend one 2-day monthly session and a 7-day residential bootcamp at the beginning.",
                },
                {
                  question: "Can I continue my current job while doing this program?",
                  answer:
                    "Yes, the program is designed for working professionals. The hybrid format allows you to maintain your current role while preparing for transition. However, we recommend discussing with your employer about potential conflicts of interest, especially regarding the consulting components.",
                },
                {
                  question: "What kind of salary can I expect in academic roles?",
                  answer:
                    "Academic salaries vary by institution and role. Visiting Faculty positions typically offer ₹12-18L annually, Professor of Practice roles range from ₹18-25L, and senior positions can reach ₹25-40L+. Additionally, most participants earn ₹5-15L annually through consulting, training, and advisory roles.",
                },
                {
                  question: "Do you guarantee job placement after the program?",
                  answer:
                    "We have a 95% placement success rate and offer comprehensive career support including CV development, interview preparation, and institution matching. While we cannot guarantee specific positions, we provide a 100% money-back guarantee if you&apos;re not placed within 12 months of program completion.",
                },
                {
                  question: "What if I don&apos;t have a PhD? Can I still teach at good institutions?",
                  answer:
                    "The program focuses on &apos;Professor of Practice&apos; roles where industry experience is valued over academic credentials. Many top institutions actively seek professionals with real-world expertise. Your decades of industry experience are your primary qualification.",
                },
                {
                  question: "Is there ongoing support after program completion?",
                  answer:
                    "Yes, we provide 6 months of post-program mentorship, lifetime access to our alumni network, continuing education resources, and career advancement support. Our alumni community is active and provides ongoing networking and collaboration opportunities.",
                },
                {
                  question: "What makes this different from other executive education programs?",
                  answer:
                    "This is specifically designed for career transition, not just skill enhancement. We focus on practical placement outcomes, provide industry-specific training, offer real teaching opportunities during the program, and have established partnerships with academic institutions for direct placement.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-800 cursor-pointer text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-2 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


            <div className="mt-16 text-center">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Still Have Questions?</h3>
                <p className="text-slate-600 mb-6">
                  Our career transition experts are here to help you make an informed decision
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">info@secondstint.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Mumbai | Delhi | Bangalore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Newsletter Section */}
            <NewsletterSection />

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 ">
              <Image
                src="/logo.webp"
                alt="Second Stint Program"
                width={300}
                height={100}
                className=" w-auto  mb-6 brightness-0 invert"
              />
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Empowering accomplished professionals aged 45-60 to transition into meaningful academic and mentoring
                roles. Transform your industry expertise into academic excellence.
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-red-600 hover:bg-red-700 text-white px-4 py-2">#STAYRELEVANT</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">#ACADEMICEXCELLENCE</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <Link href="#assessment" className="hover:text-white transition-colors">
                    Readiness Assessment
                  </Link>
                </li>
                <li>
                  <Link href="#program" className="hover:text-white transition-colors">
                    Program Details
                  </Link>
                </li>
                <li>
                  <Link href="#success" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#investment" className="hover:text-white transition-colors">
                    Investment & ROI
                  </Link>
                </li>
                <li>
                  <Link href="/brochure" className="hover:text-white transition-colors">
                    Download Brochure
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@secondstint.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p>Mumbai | Delhi | Bangalore</p>
                    <p className="text-sm">Pan-India Program Delivery</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Program Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-slate-700 rounded-lg">
                    <p className="text-2xl font-bold text-green-400">500+</p>
                    <p className="text-slate-300">Graduates</p>
                  </div>
                  <div className="text-center p-3 bg-slate-700 rounded-lg">
                    <p className="text-2xl font-bold text-blue-400">95%</p>
                    <p className="text-slate-300">Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-slate-400 text-sm">
                &copy; 2024 Second Stint Program. Powered by Yangpoo Education. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/refund" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}



// Newsletter Signup Section
function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Stay Updated on Academic Opportunities</h2>
            <p className="text-xl text-slate-300">
              Get weekly insights, job openings, and exclusive content for aspiring academic professionals
            </p>
          </div>

          {isSubscribed ? (
            <div className="bg-green-600 p-8 rounded-2xl">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Welcome to Our Community!</h3>
              <p className="text-green-100">You&apos;ll receive your first newsletter within 24 hours.</p>
            </div>
          ) : (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Subscribe
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    { icon: Briefcase, title: "Job Alerts", desc: "Latest academic positions" },
                    { icon: BookOpen, title: "Industry Insights", desc: "Trends and opportunities" },
                    { icon: Users, title: "Success Stories", desc: "Graduate achievements" },
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-300">{benefit.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-400 mt-6">No spam, unsubscribe anytime. We respect your privacy.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
