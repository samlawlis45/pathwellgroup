import Container from "@/components/Container";
import Link from "next/link";

export default function IntelligentLedgerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-primary-blue/20 text-primary-blue border border-primary-blue/30 text-sm font-semibold mb-6">
              Core Technology
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              IntelligentLedger™ Technology
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The patented attribution and governance framework powering the Pathwell Connect platform.
            </p>
          </div>
        </Container>
      </section>

      {/* The Concept */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Beyond Simple Data Storage
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Standard databases store <em>what</em> happened. They rarely store <em>who</em> said it, <em>when</em> it was validated, or <em>why</em> it changed. In complex supply chains, this lack of context creates "data trust" issues.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                IntelligentLedger™ creates a <strong>multi-tier configuration architecture (MTCA)</strong> that wraps every data point in a layer of governance. It ensures that every shipment event, invoice line, and status update has a permanent, auditable history.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-primary-blue/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="font-mono text-xs text-gray-400 mb-2">OBJECT ID: SHP-88392</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-bold text-gray-700">Status: DELIVERED</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Confirmed</span>
                    </div>
                    <div className="pl-4 border-l-2 border-primary-blue space-y-2">
                      <div className="text-xs text-gray-500">
                        <span className="font-bold">AUTH.OBJ:</span> Carrier API
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="font-bold">TS:</span> 2023-10-24 14:30:00
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="font-bold">GHOST.ATTR:</span> Visible to All
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Patent Primitives */}
      <section className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patent-Backed Primitives</h2>
            <p className="text-gray-600">
              We map specific elements of our IP directly to logistics challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary-blue transition-all group">
              <div className="font-mono text-sm text-primary-blue font-bold mb-2">AUTH.OBJ</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Attribution & Lineage</h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong>The IP:</strong> A mechanism for tracking the authorship and derivation history of an object.
              </p>
              <p className="text-gray-600 text-sm border-t border-gray-100 pt-4">
                <strong>Application:</strong> Knowing exactly which system (ERP, Carrier, Driver App) generated an ETA or POD, and assigning a trust score to it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary-blue transition-all group">
              <div className="font-mono text-sm text-primary-blue font-bold mb-2">GHOST.ATTR</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Selective Visibility</h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong>The IP:</strong> A permissioning layer that allows objects to "ghost" or redact attributes based on viewer context.
              </p>
              <p className="text-gray-600 text-sm border-t border-gray-100 pt-4">
                <strong>Application:</strong> Securely sharing a shipment record where the Shipper sees costs, the Broker sees margin, and the Carrier sees only operational details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary-blue transition-all group">
              <div className="font-mono text-sm text-primary-blue font-bold mb-2">ECON.ROY</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Economic Traceability</h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong>The IP:</strong> Recursive attribution of economic value or cost to the components of a complex object.
              </p>
              <p className="text-gray-600 text-sm border-t border-gray-100 pt-4">
                <strong>Application:</strong> Tracing a freight invoice variance back to the specific dwell event or accessorial charge that caused it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Built on a Foundation of Trust</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            IntelligentLedger™ provides the governance layer that makes the Pathwell Connect Analytics Engine the most trustworthy source of truth in logistics.
          </p>
          <Link
            href="/products/analytics-engine"
            className="text-primary-blue font-bold hover:text-white transition-colors"
          >
            Explore the Analytics Engine →
          </Link>
        </Container>
      </section>
    </div>
  );
}

