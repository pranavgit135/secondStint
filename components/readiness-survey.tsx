import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Target, Users } from "lucide-react"

export function ReadinessSurvey() {
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
