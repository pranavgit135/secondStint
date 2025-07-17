import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Video,
  Users,
  BookOpen,
  Target,
  Clock,
  Award,
  Zap,
  Star,
  TrendingUp,
  CheckCircle,
  Play,
  Rocket,
  Brain,
  Globe,
} from "lucide-react"

export function ProgramStructure() {
  const highlights = [
    {
      icon: Calendar,
      title: "11 Months Duration",
      description: "Comprehensive learning journey",
      color: "from-blue-500 to-cyan-500",
      stats: "44 weeks",
      detail: "Structured timeline",
    },
    {
      icon: MapPin,
      title: "7-Day Residential Bootcamp",
      description: "Intensive start to your journey",
      color: "from-green-500 to-teal-500",
      stats: "168 hours",
      detail: "Immersive experience",
    },
    {
      icon: Users,
      title: "Monthly In-Person Sessions",
      description: "2-day sessions every month",
      color: "from-purple-500 to-pink-500",
      stats: "20 sessions",
      detail: "Hands-on learning",
    },
    {
      icon: Video,
      title: "Live Online Masterclasses",
      description: "Expert-led virtual sessions",
      color: "from-orange-500 to-red-500",
      stats: "50+ classes",
      detail: "Industry experts",
    },
  ]

  const focusAreas = [
    {
      icon: BookOpen,
      title: "Faculty Training & Pedagogy",
      description: "Master the art of effective teaching and curriculum design",
      modules: ["Teaching Methodologies", "Curriculum Development", "Assessment Strategies"],
      color: "from-blue-500 to-purple-500",
      duration: "3 months",
      certification: "Teaching Excellence Certificate",
    },
    {
      icon: Users,
      title: "Mentorship Frameworks",
      description: "Develop structured approaches to guide and inspire others",
      modules: ["Mentoring Models", "Coaching Techniques", "Leadership Development"],
      color: "from-green-500 to-teal-500",
      duration: "2.5 months",
      certification: "Certified Executive Coach",
    },
    {
      icon: Target,
      title: "Case-based Teaching",
      description: "Learn to create and deliver impactful case studies",
      modules: ["Case Writing", "Discussion Leadership", "Simulation Design"],
      color: "from-purple-500 to-pink-500",
      duration: "3 months",
      certification: "Case Method Expert",
    },
    {
      icon: Award,
      title: "Career Pathway Planning",
      description: "Strategic planning for your academic transition",
      modules: ["Academic Networking", "Institution Partnerships", "Personal Branding"],
      color: "from-orange-500 to-red-500",
      duration: "2.5 months",
      certification: "Career Transition Specialist",
    },
  ]

  const learningMethods = [
    {
      icon: Brain,
      title: "Interactive Workshops",
      description: "Hands-on learning with real scenarios",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Globe,
      title: "Global Case Studies",
      description: "Learn from international best practices",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Rocket,
      title: "Simulation Exercises",
      description: "Practice in realistic academic environments",
      color: "from-red-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-green-100 to-teal-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Rocket className="w-5 h-5 mr-2" />
            Program Structure
            <Star className="w-5 h-5 ml-2 text-yellow-500" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            A Structured,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Immersive Learning
            </span>{" "}
            Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our hybrid learning model combines intensive residential experiences with flexible online learning.
          </p>
        </div>

        {/* Enhanced Program Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${highlight.color} opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500`}
              ></div>

              <CardContent className="p-8 text-center relative">
                <div
                  className={`bg-gradient-to-r ${highlight.color} p-5 rounded-3xl w-fit mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}
                >
                  <highlight.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{highlight.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{highlight.description}</p>

                <div className="space-y-2">
                  <div className="bg-slate-100 rounded-lg p-2">
                    <div className="font-bold text-slate-800">{highlight.stats}</div>
                  </div>
                  <div className="text-xs text-slate-500">{highlight.detail}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Learning Format Visual */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200/30 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-200/30 rounded-full"></div>
          </div>

          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12 flex items-center justify-center">
            <Zap className="w-8 h-8 mr-3 text-amber-500" />
            Hybrid Learning Model
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-3xl mb-6 mx-auto w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-xl">Residential Bootcamp</h4>
              <p className="text-slate-600 mb-4">7 intensive days to kickstart your journey</p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold">168 Contact Hours</span>
                </div>
                <div className="text-xs text-slate-500">Immersive Learning Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-3xl mb-6 mx-auto w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-xl">Monthly Sessions</h4>
              <p className="text-slate-600 mb-4">2-day in-person sessions for hands-on learning</p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold">20 Sessions</span>
                </div>
                <div className="text-xs text-slate-500">Practical Application</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-3xl mb-6 mx-auto w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                <Video className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-xl">Online Masterclasses</h4>
              <p className="text-slate-600 mb-4">Live virtual sessions with industry experts</p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Play className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold">50+ Classes</span>
                </div>
                <div className="text-xs text-slate-500">Expert-Led Sessions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Methods */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12 flex items-center justify-center">
            <Brain className="w-8 h-8 mr-3 text-purple-500" />
            Innovative Learning Methods
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {learningMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-gradient-to-r ${method.color} p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3">{method.title}</h4>
                  <p className="text-slate-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Core Focus Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12 flex items-center justify-center">
            <Target className="w-8 h-8 mr-3 text-red-500" />
            Core Focus Areas
          </h3>
          <div className="grid lg:grid-cols-2 gap-10">
            {focusAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <CardContent className="p-10 relative">
                  <div className="flex items-start space-x-6 mb-8">
                    <div
                      className={`bg-gradient-to-br ${area.color} p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}
                    >
                      <area.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-slate-600 mb-4 text-lg">{area.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-semibold text-slate-700">{area.duration}</span>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-semibold text-slate-700">Certification</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-semibold text-slate-800 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Key Modules:
                    </h5>
                    <div className="grid md:grid-cols-3 gap-3">
                      {area.modules.map((module, moduleIndex) => (
                        <div
                          key={moduleIndex}
                          className="bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-lg p-3 text-center group-hover:shadow-md transition-shadow"
                        >
                          <span className="text-sm font-medium text-slate-700">{module}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">{area.certification}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-32 h-32 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 mr-3 text-amber-400" />
              Program Timeline & Milestones
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform shadow-xl">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-xl mb-2">Month 1</div>
                <div className="text-amber-300 font-semibold mb-2">Foundation Bootcamp</div>
                <div className="text-sm text-slate-300">Intensive 7-day immersion</div>
                <div className="mt-3 bg-white/10 rounded-lg p-2">
                  <div className="text-xs text-slate-400">168 contact hours</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform shadow-xl">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-xl mb-2">Months 2-6</div>
                <div className="text-blue-300 font-semibold mb-2">Core Learning</div>
                <div className="text-sm text-slate-300">Monthly sessions + online classes</div>
                <div className="mt-3 bg-white/10 rounded-lg p-2">
                  <div className="text-xs text-slate-400">10 sessions + 25 classes</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform shadow-xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-xl mb-2">Months 7-10</div>
                <div className="text-purple-300 font-semibold mb-2">Specialization</div>
                <div className="text-sm text-slate-300">Advanced modules + practicum</div>
                <div className="mt-3 bg-white/10 rounded-lg p-2">
                  <div className="text-xs text-slate-400">8 sessions + projects</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform shadow-xl">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-xl mb-2">Month 11</div>
                <div className="text-green-300 font-semibold mb-2">Certification & Placement</div>
                <div className="text-sm text-slate-300">Final assessment + job support</div>
                <div className="mt-3 bg-white/10 rounded-lg p-2">
                  <div className="text-xs text-slate-400">Certificate + placement</div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-12 bg-white/10 rounded-full h-2 relative">
              <div className="bg-gradient-to-r from-amber-500 via-blue-500 via-purple-500 to-green-500 h-full rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
