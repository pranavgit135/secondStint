import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Briefcase,
  UserCheck,
  Play,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react"
import Image from "next/image"

export function AboutProgram() {
  const roles = [
    {
      icon: GraduationCap,
      title: "Professor of Practice (PoP)",
      description: "Lead academic programs with industry expertise",
      color: "from-blue-500 to-cyan-500",
      stats: "₹15-25L/year",
      growth: "+25%",
    },
    {
      icon: Users,
      title: "Visiting Faculty",
      description: "Share knowledge across multiple institutions",
      color: "from-green-500 to-teal-500",
      stats: "₹8-15L/year",
      growth: "+30%",
    },
    {
      icon: BookOpen,
      title: "Corporate Trainer or Executive Coach",
      description: "Guide next-generation leaders",
      color: "from-purple-500 to-pink-500",
      stats: "₹12-20L/year",
      growth: "+40%",
    },
    {
      icon: Award,
      title: "Academic Administrator / Dean",
      description: "Shape institutional direction and strategy",
      color: "from-orange-500 to-red-500",
      stats: "₹20-35L/year",
      growth: "+20%",
    },
    {
      icon: Briefcase,
      title: "Simulation-based Educator",
      description: "Create immersive learning experiences",
      color: "from-indigo-500 to-purple-500",
      stats: "₹10-18L/year",
      growth: "+35%",
    },
    {
      icon: UserCheck,
      title: "Content Designer or Assessor",
      description: "Develop curriculum and evaluation frameworks",
      color: "from-teal-500 to-green-500",
      stats: "₹8-12L/year",
      growth: "+28%",
    },
  ]

  const programHighlights = [
    {
      icon: Target,
      title: "Industry-First Program",
      description: "First structured academic transition program in India",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Expert-Designed Curriculum",
      description: "Developed by leading academicians and industry experts",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Rocket,
      title: "Fast-Track Career Change",
      description: "Transition from corporate to academia in 11 months",
      color: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-green-100 to-teal-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 shadow-lg">
            <BookOpen className="w-5 h-5 mr-2" />
            About the Program
            <Star className="w-5 h-5 ml-2 text-yellow-500" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            What is the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Second Stint Program?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The Second Stint Program is India&apos;s first structured transition pathway for CXOs, retiring professionals,
            and experienced leaders who wish to shift into academia, training, consulting, or purposeful second careers.
          </p>
        </div>

        {/* Program Highlights with Enhanced Graphics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`bg-gradient-to-r ${highlight.color} p-6 rounded-3xl w-fit mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}
                >
                  <highlight.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Video Section */}
        <div className="mb-16">
          <div className="relative lg:left-46 md:left-28 left-14 max-w-4xl  mx-auto">
            <div className="relative rounded-3xl  overflow-hidden ">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Program overview video"
                width={300}
                height={300}
                className="w-4/6 h-auto"
              />
              <div className="absolute inset-0 w-4/6 rounded-3xl bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-center justify-center group cursor-pointer">
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-16 h-16 text-white ml-2" fill="white" />
                  </div>
                  <div className="absolute -inset-6 border-2 border-white/30 rounded-full animate-ping"></div>
                  <div className="absolute -inset-12 border border-white/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Video Stats Overlay */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500 p-2 rounded-lg">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Watch Program Overview</div>
                  <div className="text-sm text-slate-600">5 min • 10K+ views</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            <Award className="w-8 h-8 inline-block mr-3 text-amber-500" />
            Roles You Can Pursue After Completion
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Transform your corporate experience into academic excellence with these high-demand career paths
          </p>
        </div>

        {/* Enhanced Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}
              ></div>

              <CardContent className="p-8 relative">
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`bg-gradient-to-br ${role.color} p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {role.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">{role.description}</p>
                  </div>
                </div>

                {/* Enhanced Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-slate-700">{role.stats}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700">{role.growth} growth</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics with Icons */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-12">
              <Award className="w-8 h-8 inline-block mr-3 text-amber-400" />
              Program Success Metrics
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-slate-300">Alumni Network</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">89%</div>
                <div className="text-slate-300">Placement Rate</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-amber-400 mb-2">4.9/5</div>
                <div className="text-slate-300">Satisfaction Rating</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-red-400 mb-2">₹15L</div>
                <div className="text-slate-300">Avg. Salary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
