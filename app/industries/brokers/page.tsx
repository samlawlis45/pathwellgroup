import Container from "@/components/Container";
import Link from "next/link";

export default function BrokersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-32 dot-pattern">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Brokers & 3PLs</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
              Scale your operations with an automated integration fabric and governed carrier network.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Modernize Your Stack
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Value Proposition */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12 text-center">
            <p>
              Don't just move freight—become a strategic technology partner to your shippers. Pathwell Connect provides the <strong>Connectivity</strong> and <strong>Governance</strong> infrastructure to bid on complex enterprise RFPs and win.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Integration</h3>
              <p className="text-gray-600">Say "yes" to any shipper requirement (EDI, API, Real-time Vis) without IT headaches.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Carrier Governance</h3>
              <p className="text-gray-600">Automated fraud monitoring and compliance checks for every carrier in your network.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Margin Visibility</h3>
              <p className="text-gray-600">Real-time P&L analysis per load, lane, and customer with internal cost attribution.</p>
            </div>
          </div>
        </Container>
      </section>

       {/* CTA */}
       <section className="bg-primary-blue text-white py-20 text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Win More Enterprise Freight</h2>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Partner With Us
          </Link>
        </Container>
      </section>
    </div>
  );
}
