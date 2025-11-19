import Container from "@/components/Container";
import Link from "next/link";

export default function RiskProcurementPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Risk-Optimized Procurement
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Source with Confidence. <br/> Map Your Network.
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Gain multi-tier visibility into your supplier network. Identify financial, geopolitical, and operational risks before they impact production.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Supplier Risk Scorecard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 mr-3">S1</div>
                      <div>
                        <div className="font-bold text-gray-900">Supplier Alpha</div>
                        <div className="text-xs text-gray-500">Tier 1 • Electronics</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-500">68</div>
                      <div className="text-xs text-gray-500">Risk Score</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-red-50 p-2 rounded text-red-700 font-bold">Financial</div>
                    <div className="bg-green-50 p-2 rounded text-green-700 font-bold">ESG</div>
                    <div className="bg-yellow-50 p-2 rounded text-yellow-700 font-bold">Geopolitical</div>
                  </div>
                  <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <strong>Alert:</strong> Tier-2 sub-supplier impacted by regional flooding.
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                See Beyond Tier 1.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Your biggest risks often lie deep in your supply chain. Pathwell Connect maps your multi-tier network to expose hidden vulnerabilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</div>
                  <div>
                    <span className="font-bold text-gray-900">Multi-Tier Discovery</span>
                    <p className="text-sm text-gray-600">Map suppliers, factories, and logistics nodes down to the raw material level.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</div>
                  <div>
                    <span className="font-bold text-gray-900">Dynamic Risk Scoring</span>
                    <p className="text-sm text-gray-600">Continuous monitoring of financial health, labor practices, and regional stability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</div>
                  <div>
                    <span className="font-bold text-gray-900">Sourcing Intelligence</span>
                    <p className="text-sm text-gray-600">Integrate risk data directly into your RFP and award decisions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure your supply base.</h2>
          <Link
            href="/contact"
            className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
}

