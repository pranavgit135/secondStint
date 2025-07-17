"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Target, Users, Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Briefcase, Shield } from "lucide-react"

// Mock components for booking - replace with your actual booking components
const PriorityConsultationBooking = ({ trigger }: { trigger: React.ReactNode }) => trigger

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

function CareerReadinessAssessment({ onBack }: { onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      question: "How many years of senior leadership experience do you have?",
      options: ["5-10 years", "10-15 years", "15-20 years", "20+ years"],
      weights: [1, 2, 3, 4],
    },
    {
      question: "What&apos;s your primary motivation for considering academia?",
      options: ["Share knowledge & mentor", "Stay professionally active", "Build lasting legacy", "Financial security"],
      weights: [4, 3, 4, 2],
    },
    {
      question: "How comfortable are you with technology and online learning?",
      options: ["Very comfortable", "Comfortable", "Somewhat comfortable", "Need support"],
      weights: [4, 3, 2, 1],
    },
    {
      question: "What&apos;s your preferred time commitment for this transition?",
      options: ["Full-time focus", "Part-time (20+ hrs/week)", "Flexible schedule", "Minimal commitment"],
      weights: [4, 3, 2, 1],
    },
    {
      question: "How important is institutional prestige to you?",
      options: ["Very important", "Important", "Somewhat important", "Not important"],
      weights: [3, 4, 2, 1],
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore([...answers])
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = (finalAnswers: number[]) => {
    let totalScore = 0
    finalAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== undefined) {
        totalScore += questions[questionIndex].weights[answerIndex]
      }
    })
    setScore(totalScore)
    setShowResults(true)
  }

  const getRecommendation = () => {
    if (score >= 16) {
      return {
        level: "Excellent Fit",
        color: "text-green-600",
        bgColor: "bg-green-50",
        message: "You&apos;re an ideal candidate for our program. Your experience and motivation align perfectly.",
        nextStep: "Schedule a priority consultation",
        priority: true,
      }
    } else if (score >= 12) {
      return {
        level: "Good Fit",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        message: "You have strong potential for success. We recommend discussing your specific goals.",
        nextStep: "Book a detailed assessment call",
        priority: false,
      }
    } else if (score >= 8) {
      return {
        level: "Potential Fit",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        message: "With some preparation, you could be successful. Let&apos;s explore your options.",
        nextStep: "Join our information session",
        priority: false,
      }
    } else {
      return {
        level: "Needs Preparation",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        message: "Consider building more experience before joining. We can guide your preparation.",
        nextStep: "Download our preparation guide",
        priority: false,
      }
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const recommendation = getRecommendation()
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-800">Your Assessment Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className={`text-center p-6 rounded-xl ${recommendation.bgColor}`}>
                  <h3 className={`text-2xl font-bold ${recommendation.color} mb-2`}>{recommendation.level}</h3>
                  <p className="text-slate-700 mb-4">{recommendation.message}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-sm text-slate-600">Readiness Score:</span>
                    <span className={`text-xl font-bold ${recommendation.color}`}>{score}/20</span>
                  </div>
                  <Progress value={(score / 20) * 100} className="w-full mb-4" />
                </div>
                <div className="space-y-4">
                  {recommendation.priority ? (
                    <PriorityConsultationBooking
                      trigger={
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {recommendation.nextStep}
                        </Button>
                      }
                    />
                  ) : (
                    <AssessmentCallBooking
                      trigger={
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {recommendation.nextStep}
                        </Button>
                      }
                    />
                  )}
                  <Button variant="outline" onClick={resetAssessment} className="w-full bg-transparent">
                    Retake Assessment
                  </Button>
                  <Button variant="outline" onClick={onBack} className="w-full bg-transparent">
                    Back to Survey Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const currentAnswer = answers[currentQuestion]
  const canProceed = currentAnswer !== undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Career Readiness Assessment</CardTitle>
              <CardDescription>
                Question {currentQuestion + 1} of {questions.length}
              </CardDescription>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-800">{questions[currentQuestion].question}</h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={currentAnswer === index ? "default" : "outline"}
                    className={`w-full text-left justify-start p-4 h-auto transition-all duration-200 ${
                      currentAnswer === index
                        ? "bg-blue-600 text-white border-blue-600"
                        : "hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          currentAnswer === index ? "bg-white border-white" : "border-slate-300"
                        }`}
                      >
                        {currentAnswer === index && <div className="w-2 h-2 bg-blue-600 rounded-full m-0.5"></div>}
                      </div>
                      <span>{option}</span>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center space-x-2 pt-4">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= currentQuestion ? "bg-blue-600" : "bg-slate-300"
                    } ${index === currentQuestion ? "w-6" : ""}`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="bg-transparent"
                >
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!canProceed} className="bg-blue-600 text-white hover:bg-blue-700">
                  {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                </Button>
              </div>

              <Button variant="ghost" onClick={onBack} className="w-full mt-4">
                Back to Survey Info
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SurveyLandingPage({ onStartSurvey }: { onStartSurvey: () => void }) {
  const surveyBenefits = [
    {
      icon: Target,
      title: "Assess Your Readiness",
      description: "Understand your preparedness for academic transition",
    },
    {
      icon: Users,
      title: "Identify Your Interests",
      description: "Discover which academic roles align with your goals",
    },
    {
      icon: CheckCircle,
      title: "Get Personalized Insights",
      description: "Receive tailored recommendations for your journey",
    },
    {
      icon: Clock,
      title: "Plan Your Timeline",
      description: "Understand the optimal timing for your transition",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              🎯 Self Assessment
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Still Exploring? Start with Our Survey
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Take 5 minutes to assess your readiness, interest, and post-retirement goals. Your responses will help us
              tailor this journey for you.
            </p>
          </div>

          {/* Survey Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {surveyBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-amber-500 to-red-500 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Survey Card */}
          <Card className="bg-gradient-to-r from-white to-amber-50 border-2 border-amber-200 shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Interest & Readiness Assessment</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">Career transition readiness evaluation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">Academic interest and aptitude assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">Personalized program recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">Timeline and financial planning insights</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={onStartSurvey}
                      className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Start the Survey Now
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 px-6 py-4 text-lg font-semibold rounded-xl bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-100 to-red-100 rounded-2xl p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-amber-600">5</div>
                      <div className="text-sm text-slate-600">Minutes to Complete</div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-sm font-medium text-slate-800">Section 1: Background</div>
                        <div className="text-xs text-slate-600">Professional experience & current status</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-sm font-medium text-slate-800">Section 2: Interests</div>
                        <div className="text-xs text-slate-600">Academic preferences & teaching inclination</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-sm font-medium text-slate-800">Section 3: Goals</div>
                        <div className="text-xs text-slate-600">Career objectives & timeline expectations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              🔒 Your responses are completely confidential and will only be used to provide personalized
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ReadinessSurvey() {
  const [showAssessment, setShowAssessment] = useState(false)

  const handleStartSurvey = () => {
    setShowAssessment(true)
  }

  const handleBackToLanding = () => {
    setShowAssessment(false)
  }

  if (showAssessment) {
    return <CareerReadinessAssessment onBack={handleBackToLanding} />
  }

  return <SurveyLandingPage onStartSurvey={handleStartSurvey} />
}
