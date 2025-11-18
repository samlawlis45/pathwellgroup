import Container from "@/components/Container";
import Link from "next/link";

export default function ShippersPage() {
  const modes = [
    {
      title: "Truckload Capacity",
      description: "Access 50,000+ vetted carriers across dry van, reefer, and flatbed networks. Our digital matching engine finds the right truck instantly.",
      icon: "🚛"
    },
    {
      title: "LTL & Consolidation",
      description: "Optimize less-than-truckload spend with dynamic routing, consolidation programs, and preferred tariff agreements.",
      icon: "📦"
    },
    {
      title: "Expedited & Critical",
      description: "When time is the only KPI. Team drivers, air charter, and hot shot services monitored 24/7/365.",
      icon: "⚡"
    },
    {
      title: "Cross-Border",
      description: "Seamless US-Mexico-Canada logistics. We handle customs coordination, transloading, and through-trailer service.",
      icon: "🌐"
    },
    {
      title: "Drayage & Port",
      description: "First-mile container moves from all major North American ports and rail ramps. Integrated with steamship line visibility.",
      icon: "⚓"
    },
    {
      title: "Drop Trailer",
      description: "Flexible drop pools to optimize facility throughput and driver detention. Create a virtual private fleet without the assets.",
      icon: "🏗️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-primary-blue text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Modern Freight Execution
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Capacity on Demand. <br/> Service by Design.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              We combine a massive digital freight network with expert human operators to deliver reliable capacity in any market condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get a Quote
              </Link>
              <Link
                href="/portal/shippers"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Shipper Portal
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-b border-gray-100 bg-white">
        <Container>
          <div className="grid grid-cols-3 gap-8 text-center divide-x divide-gray-100">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">98.5%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">On-Time Pickup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">&lt; 15 min</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Avg. Quote Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Carrier Vetting</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modes Grid */}
      <section className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-Modal Solutions</h2>
            <p className="text-lg text-gray-600">One partner for every load type. We simplify complexity through consolidation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modes.map((mode, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-blue/30 transition-all group"
              >
                <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-primary-blue/10 group-hover:scale-110 transition-all duration-300">
                  {mode.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-blue transition-colors">
                  {mode.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{mode.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Pathwell <br/><span className="text-primary-blue">Digital Advantage.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just make phone calls. Our platform uses predictive analytics and API connectivity to source capacity before the market reacts.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center text-primary-blue font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Rate Selection</h3>
                    <p className="text-gray-600">AI-powered pricing engines that benchmark your freight against real-time market indices to ensure you never overpay.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center text-primary-blue font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Compliance</h3>
                    <p className="text-gray-600">Every carrier is monitored daily for safety ratings, insurance coverage, and operating authority changes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center text-primary-blue font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Visibility</h3>
                    <p className="text-gray-600">MacroPoint, project44, and FourKites ready. Track your freight from pickup to delivery with shareable links.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Execution Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium text-gray-400">
                    <span>Tender Acceptance</span>
                    <span>96.4%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[96%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium text-gray-400">
                    <span>On-Time Delivery</span>
                    <span>98.2%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-blue w-[98%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium text-gray-400">
                    <span>Tracking Compliance</span>
                    <span>99.1%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[99%]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-300 italic">
                  "Pathwell's digital approach reduced our spot market exposure by 40% in the first quarter."
                </p>
                <p className="text-xs text-gray-500 mt-2 font-bold uppercase">- Director of Logistics, CPG Retailer</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-blue">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Modernize Your Network?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Stop settling for legacy brokerage. Experience the difference of a digitally connected partner.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors inline-block shadow-lg"
            >
              Start Shipping
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
