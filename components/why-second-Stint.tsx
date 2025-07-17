import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Network, DollarSign, Users, TrendingUp } from "lucide-react"

export function WhySecondStint() {
  const benefits = [
    {
      icon: Heart,
      title: "Stay Professionally Active with Purpose",
      description: "Continue making meaningful contributions while pursuing personal fulfillment",
      color: "from-red-500 to-pink-500",
      stats: "95% report increased life satisfaction",
    },
    {
      icon: Award,
      title: "Build a Legacy by Mentoring Students",
      description: "Shape the next generation of leaders and leave a lasting impact",
      color: "from-blue-500 to-cyan-500",
      stats: "Average 50+ students mentored per year",
    },
    {
      icon: Network,
      title: "Gain Academic Affiliation & Flexibility",
      description: "Enjoy the prestige and flexibility of academic positions",
      color: "from-green-500 to-teal-500",
      stats: "Flexible 20-30 hour work weeks",
    },
    {
      icon: DollarSign,
      title: "Financially Rewarding Second Career",
      description: "Maintain financial stability with competitive academic compensation",
      color: "from-yellow-500 to-orange-500",
      stats: "₹8-25L annual potential earnings",
    },
    {
      icon: Users,
      title: "Join a Network of Senior Peers",
      description: "Connect with like-minded professionals and institutions",
      color: "from-purple-500 to-indigo-500",
      stats: "500+ alumni network",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth & Learning",
      description: "Stay intellectually stimulated and continue growing",
      color: "from-emerald-500 to-blue-500",
      stats: "Ongoing professional development",
    },
  ]

  const alternatives = [
    { option: "Complete Retirement", downside: "Loss of purpose and professional identity" },
    { option: "Consulting", downside: "Irregular income and client dependency" },
    { option: "Board Positions", downside: "Limited availability and high competition" },
    { option: "Volunteer Work", downside: "No financial compensation" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Why Choose Second Stint
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose This Over Other Retirement Options?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlike traditional retirement paths, Second Stint offers purpose, flexibility, and financial rewards.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden"
            >
              <CardContent className="p-6 relative">
                <div
                  className={`bg-gradient-to-r ${benefit.color} p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="text-sm font-semibold text-slate-800">{benefit.stats}</div>
                </div>

                {/* Hover Effect Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">How Does Second Stint Compare?</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Option</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Purpose</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Income</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Flexibility</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Growth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-slate-100">
                  <td className="py-4 px-4 font-semibold text-green-700">Second Stint Program</td>
                  <td className="py-4 px-4 text-green-600">✓ High</td>
                  <td className="py-4 px-4 text-green-600">✓ Stable</td>
                  <td className="py-4 px-4 text-green-600">✓ High</td>
                  <td className="py-4 px-4 text-green-600">✓ Continuous</td>
                </tr>
                {alternatives.map((alt, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium text-slate-700">{alt.option}</td>
                    <td className="py-4 px-4 text-red-500">✗ Limited</td>
                    <td className="py-4 px-4 text-red-500">✗ Variable</td>
                    <td className="py-4 px-4 text-yellow-500">~ Moderate</td>
                    <td className="py-4 px-4 text-red-500">✗ Minimal</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Successful Alumni</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our graduates are now leading faculty members, successful trainers, and respected thought leaders across
            India&apos;s top institutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-amber-400">89%</div>
              <div className="text-sm text-slate-400">Placed within 6 months</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">₹15L</div>
              <div className="text-sm text-slate-400">Average annual earnings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">4.8/5</div>
              <div className="text-sm text-slate-400">Alumni satisfaction rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
