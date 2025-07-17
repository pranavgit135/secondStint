import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  UserPlus,
  Building,
  Star,
  TrendingUp,
  Award,
  Heart,
  Target,
  Zap,
  Crown,
} from "lucide-react"

export function WhoIsThisFor() {
  const profiles = [
    {
      icon: Users,
      title: "Senior Professionals",
      subtitle: "Aged 48–65",
      description: "Experienced leaders ready for their next chapter",
      color: "from-blue-500 to-cyan-500",
      stats: "15+ years exp",
      badge: "Most Popular",
    },
    {
      icon: Crown,
      title: "CXOs & Business Heads",
      subtitle: "Functional Leaders",
      description: "Top-tier executives with strategic experience",
      color: "from-purple-500 to-pink-500",
      stats: "C-Suite Level",
      badge: "Premium",
    },
    {
      icon: UserPlus,
      title: "Retiring Professionals",
      subtitle: "Active or Recently Retired",
      description: "Professionals seeking purposeful engagement",
      color: "from-green-500 to-teal-500",
      stats: "50+ age group",
      badge: "Growing",
    },
    {
      icon: Building,
      title: "Entrepreneurs & Consultants",
      subtitle: "Seeking Academic Engagement",
      description: "Business owners ready to share expertise",
      color: "from-orange-500 to-red-500",
      stats: "Business Owners",
      badge: "Trending",
    },
  ]

  const benefits = [
    {
      icon: Award,
      text: "Extensive industry experience (15+ years)",
      color: "text-blue-500",
    },
    {
      icon: Building,
      text: "Leadership roles in reputable organizations",
      color: "text-green-500",
    },
    {
      icon: Heart,
      text: "Passion for mentoring and knowledge sharing",
      color: "text-red-500",
    },
    {
      icon: Target,
      text: "Desire for meaningful second career",
      color: "text-purple-500",
    },
    {
      icon: TrendingUp,
      text: "Financial stability for program investment",
      color: "text-amber-500",
    },
    {
      icon: Zap,
      text: "Commitment to 11-month learning journey",
      color: "text-cyan-500",
    },
  ]

  const successStories = [
    {
      role: "Former CEO → Professor of Practice",
      institution: "IIM Bangalore",
      salary: "₹25L/year",
      satisfaction: "Extremely Satisfied",
    },
    {
      role: "Ex-VP Sales → Corporate Trainer",
      institution: "Multiple B-Schools",
      salary: "₹18L/year",
      satisfaction: "Love the Flexibility",
    },
    {
      role: "Retired CFO → Visiting Faculty",
      institution: "ISB Hyderabad",
      salary: "₹22L/year",
      satisfaction: "Purposeful Work",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-amber-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Target className="w-5 h-5 mr-2" />
            Target Audience
            <Users className="w-5 h-5 ml-2" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Is This the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-400">
              Right Program
            </span>{" "}
            for You?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Designed specifically for accomplished professionals ready to transition into academia and mentoring roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Enhanced Target Profiles */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left flex items-center">
              <Crown className="w-8 h-8 mr-3 text-amber-400" />
              Target Profiles
            </h3>
            <div className="grid gap-6">
              {profiles.map((profile, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 group transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${profile.color} opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500`}
                  ></div>

                  <CardContent className="p-6 relative">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`bg-gradient-to-r ${profile.color} p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}
                      >
                        <profile.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white text-lg">{profile.title}</h4>
                          <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full text-xs font-medium">
                            {profile.badge}
                          </span>
                        </div>
                        <p className="text-amber-300 text-sm mb-2 font-medium">{profile.subtitle}</p>
                        <p className="text-slate-300 text-sm mb-3">{profile.description}</p>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-slate-400">{profile.stats}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Ideal Candidate Checklist */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-green-400" />
              Ideal Candidate Profile
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors flex-1">
                      {benefit.text}
                    </span>
                    <CheckCircle className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Self Assessment CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl backdrop-blur-sm">
              <div className="text-center">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Quick Self-Assessment</h4>
                <p className="text-slate-300 text-sm mb-4">Check if you match our ideal candidate profile</p>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Take 2-Min Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-amber-400" />
            Success Stories from Similar Profiles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-amber-500 to-red-500 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{story.role}</h4>
                  <p className="text-amber-300 text-sm mb-2">{story.institution}</p>
                  <p className="text-green-400 font-semibold mb-2">{story.salary}</p>
                  <p className="text-slate-300 text-xs italic">"{story.satisfaction}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Section for Women with Enhanced Graphics */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-16 h-16 bg-purple-400/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-pink-400/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-3xl w-fit mx-auto mb-6">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-purple-300">Special Welcome for Women</h3>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              <strong className="text-white">Women returning from sabbatical</strong> - We understand your unique
              journey and provide tailored support for your transition back into professional academia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/30 rounded-full text-purple-200 text-sm">
                <Heart className="w-4 h-4 mr-2" />💜 Inclusive Environment
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/30 rounded-full text-pink-200 text-sm">
                <Users className="w-4 h-4 mr-2" />👥 Women&apos;s Support Network
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/30 rounded-full text-purple-200 text-sm">
                <Star className="w-4 h-4 mr-2" />⭐ Flexible Learning Options
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
