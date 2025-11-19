import Container from "@/components/Container";
import Link from "next/link";

export default function RiskLogisticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Risk-Optimized Logistics
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Predict Disruption. <br/> Protect Margins.
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Turn supply chain risk into a competitive advantage with predictive intelligence, financial attribution, and automated mitigation.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Don't Just Track Delays. <br/><span className="text-primary-blue">Quantify Their Impact.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional visibility tools tell you a shipment is late. Pathwell Connect tells you <em>why</em>, <em>how much it will cost</em>, and <em>what to do about it</em>.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">!</div>
                  <div>
                    <span className="font-bold text-gray-900">Predictive Risk Scoring</span>
                    <p className="text-sm text-gray-600">Weather, port congestion, and labor strike data fused with your shipment plan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">$</div>
                  <div>
                    <span className="font-bold text-gray-900">Financial Impact Analysis</span>
                    <p className="text-sm text-gray-600">Automatically calculate the cost of delay, expedited freight, and lost sales.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 text-primary-blue rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">✓</div>
                  <div>
                    <span className="font-bold text-gray-900">Automated Mitigation</span>
                    <p className="text-sm text-gray-600">Trigger re-routing or inventory allocation workflows instantly.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-gray-900">Shipment Risk Profile</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">HIGH RISK</span>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">On-Time Probability</span>
                      <span className="font-bold text-red-600">42%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[42%]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <div className="text-xs text-gray-500 uppercase">Primary Risk</div>
                      <div className="font-bold text-gray-900">Port Strike (LA/LB)</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <div className="text-xs text-gray-500 uppercase">Est. Impact</div>
                      <div className="font-bold text-gray-900">+$4,200 / +5 Days</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800">
                    <strong>Recommendation:</strong> Divert to Oakland via Rail.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stop reacting. Start orchestrating.</h2>
          <Link
            href="/contact"
            className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block"
          >
            Request a Risk Assessment
          </Link>
        </Container>
      </section>
    </div>
  );
}

