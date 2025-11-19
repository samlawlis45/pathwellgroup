import Container from "@/components/Container";
import Link from "next/link";

export default function ForwardersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-32 dot-pattern">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Freight Forwarders</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
              Orchestrate global cross-border moves with a governed, digital backbone.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Enhance Your Network
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Value Proposition */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12 text-center">
            <p>
              Forwarders operate in a fragmented world of agents, customs brokers, and carriers. Pathwell Connect provides the <strong>IntelligentLedger™</strong> layer to unify these disparate parties into a single, auditable shipment record.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Border Orchestration</h3>
              <p className="text-gray-600">Connect origin agents, drayage carriers, and ocean lines into one visibility stream.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Customs</h3>
              <p className="text-gray-600">Digitize documentation with attribution tracking (AUTH.OBJ) for audit-ready customs clearance.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profit Protection</h3>
              <p className="text-gray-600">Track buy/sell rates and accessorials across multi-leg moves to prevent margin erosion.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Digital Twin for Global Moves
              </h2>
              <p className="text-gray-600 mb-6">
                Replace spreadsheets and disjointed portals with a single source of truth. Pathwell Connect integrates with ocean booking platforms, air cargo APIs, and local cartage networks to give you and your customers real-time control.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Port Congestion Intelligence:</strong> Re-route cargo before it gets stuck.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Agent Collaboration:</strong> Securely share shipment data with overseas partners using Selective Visibility (GHOST.ATTR).</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Landed Cost Calculation:</strong> Automatically attribute duties, taxes, and fees to the SKU level.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              {/* Placeholder for potential UI graphic or abstract representation */}
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                 <span className="text-gray-400 font-semibold">Global Lane Visualization</span>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Visualize multi-leg shipments with end-to-end event lineage.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary-blue text-white py-20 text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Forwarding Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the network of forwarders using Pathwell Connect to deliver digital-first experiences.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule a Demo
          </Link>
        </Container>
      </section>
    </div>
  );
}

