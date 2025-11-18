import Container from "@/components/Container";
import Link from "next/link";

export default function AnalyticsEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Powered by IntelligentLedger™
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Pathwell Connect Analytics Engine
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A logistics-specific data warehouse that uses our patented attribution framework to unify your entire supply chain into a single, immutable source of truth.
            </p>
          </div>
        </Container>
      </section>

      {/* Value Prop - The Governance Gap */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data Without Lineage is <br /><span className="text-primary-blue">Just Noise.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Competitors collect data, but they lose the context. Who updated the ETA? Which system triggered the invoice variance? Was this status event derived or raw?
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The <strong>Pathwell Connect Analytics Engine</strong> is built on our proprietary <strong>IntelligentLedger™</strong> architecture. It adapts the Multi-Tier Configuration Architecture (MTCA) to logistics, ensuring every data point has provenance, attribution, and enforceable visibility rules.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Patented Attribution (AUTH.OBJ)
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Role-Based Visibility (GHOST.ATTR)
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Recursive Cost Tracing (ECON.ROY)
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              {/* Stack Diagram */}
              <div className="space-y-2 text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Raw Logistics Data</div>
              <div className="grid grid-cols-4 gap-2 mb-8">
                {['ERP Orders', 'TMS Loads', 'Carrier EDI', 'IoT Signals'].map(src => (
                  <div key={src} className="bg-white p-3 rounded border border-gray-200 shadow-sm text-xs font-bold text-gray-600">{src}</div>
                ))}
              </div>

              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-gray-300 mb-2"></div>
                <div className="w-full bg-gray-900 text-white p-6 rounded-xl shadow-lg relative z-10 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold">IntelligentLedger™</span>
                    <span className="text-xs bg-primary-blue px-2 py-1 rounded">Patent Protected</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Canonical Normalization</span>
                      <span className="font-mono text-xs">PROC.CN</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Event Lineage</span>
                      <span className="font-mono text-xs">AUTH.OBJ</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost Attribution</span>
                      <span className="font-mono text-xs">ECON.ROY</span>
                    </div>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-300 mt-2"></div>
              </div>

              <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                <div className="text-primary-blue font-bold text-lg mb-1">Trusted Analytics</div>
                <div className="text-xs text-gray-500">Audit-Ready • Financially Accurate</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The 4-Layer Blueprint */}
      <section className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The 4-Layer Governance Model</h2>
            <p className="text-gray-600">
              We map our patented MTCA primitives directly to supply chain operations to create a data model no competitor can match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">1. Canonical Model</h3>
                <span className="bg-blue-50 text-primary-blue text-xs font-mono px-2 py-1 rounded">PROC.CN</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                We structure shipments, orders, and events into a single unified schema. This layer handles the normalization of 8+ disparate systems into one language.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Standardized Shipment Objects</li>
                <li>• Global Location Masters</li>
                <li>• Unified Carrier Profiles</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">2. Attribution & Lineage</h3>
                <span className="bg-blue-50 text-primary-blue text-xs font-mono px-2 py-1 rounded">AUTH.OBJ</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                For every data point, we track the "who, when, and where." We know if an ETA came from a GPS ping, a carrier API, or a manual TMS update.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Source System Tracking</li>
                <li>• Timestamped Event History</li>
                <li>• Confidence Scoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">3. Selective Visibility</h3>
                <span className="bg-blue-50 text-primary-blue text-xs font-mono px-2 py-1 rounded">GHOST.ATTR</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A granular permissions framework that controls exactly what data shippers, carriers, and brokers can see across the network.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Role-Based Field Redaction</li>
                <li>• Partner-Specific Views</li>
                <li>• Secure Data Sharing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">4. Cost Attribution</h3>
                <span className="bg-blue-50 text-primary-blue text-xs font-mono px-2 py-1 rounded">ECON.ROY</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Recursive tracing of costs to their root cause. We link invoices back to the specific operational events that triggered them.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Accessorial Root Cause Analysis</li>
                <li>• Invoice-to-Event Matching</li>
                <li>• Variance Detection</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-blue text-white text-center">
        <Container>
          <h2 className="text-4xl font-bold mb-6">Deploy the IntelligentLedger™</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Move beyond simple data collection. Adopt a governance framework built for the complexity of modern logistics.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors shadow-lg inline-block"
          >
            Schedule a Data Strategy Session
          </Link>
        </Container>
      </section>
    </div>
  );
}
