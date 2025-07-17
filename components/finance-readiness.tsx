import { Button } from "@/components/ui/button"
import { Shield, Calculator, PieChart } from "lucide-react"

export function FinancialReadiness() {
  

 

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        

       

        {/* Payment Options */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Flexible Payment Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-xl border-2 border-blue-500/50 transition-all hover:scale-105 duration-500">
              <Calculator className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Full Payment</h4>
              <p className="text-slate-300 text-sm mb-3">Pay upfront and save</p>
              <div className="text-lg font-bold text-green-400">5% Discount</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border-2 border-amber-500/50 transition-all hover:scale-105 duration-500">
              <PieChart className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">EMI Plan</h4>
              <p className="text-slate-300 text-sm mb-3">Spread across 12 months</p>
              <div className="text-lg font-bold text-amber-400">₹75K/month</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border-2 border-purple-500/50 transition-all hover:scale-105 duration-500">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Corporate Sponsorship</h4>
              <p className="text-slate-300 text-sm mb-3">Company-funded transition</p>
              <div className="text-lg font-bold text-purple-400">Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Invest in Your Future?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of senior professionals who have successfully transitioned to fulfilling academic careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Schedule Financial Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-transparent"
            >
              Download Detailed Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
