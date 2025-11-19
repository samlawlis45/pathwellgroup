import Container from "@/components/Container";
import Link from "next/link";

export default function ShippersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-32 dot-pattern">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Enterprise Shippers</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
              Turn supply chain risk into a competitive advantage with predictive intelligence and automated governance.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Audit Your Network
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Value Proposition - The Everstream + Governance Layer */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12 text-center">
            <p>
              Stop reacting to disruptions. Pathwell Connect gives you a <strong>Digital Twin</strong> of your logistics network, overlaid with real-time risk scoring and financial attribution. Know the cost of delay before it happens.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Planning</h3>
              <p className="text-gray-600">Integrate risk scores directly into your ERP/planning systems (IBP, SAP) to adjust inventory before orders are placed.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Compliance</h3>
              <p className="text-gray-600">Screen every supplier and shipment against UFLPA and sanctions lists with an immutable audit trail.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Attribution</h3>
              <p className="text-gray-600">Trace the financial impact of every delay back to the specific SKU, customer, or carrier responsible.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Verticals */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tailored for Complex Supply Chains
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Manufacturing", desc: "Protect production lines from Tier-N supplier disruptions." },
              { title: "Retail", desc: "Ensure on-shelf availability with predictive ETA and inventory visibility." },
              { title: "Life Sciences", desc: "Maintain strict chain of custody and temperature compliance." },
              { title: "Oil & Gas", desc: "Manage complex project logistics to remote sites with safety governance." },
            ].map((vertical, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{vertical.title}</h3>
                <p className="text-sm text-gray-600">{vertical.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary-blue text-white py-20 text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Stop Guessing. Start Governing.</h2>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            See the Platform
          </Link>
        </Container>
      </section>
    </div>
  );
}
