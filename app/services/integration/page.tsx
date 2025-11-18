import Container from "@/components/Container";
import Link from "next/link";

export default function IntegrationServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Integration & Connectivity</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              End-to-end connectivity across all major systems in the supply chain ecosystem.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Pathwell Connect delivers end-to-end connectivity across all major systems in the supply chain ecosystem. We modernize data flows, eliminate integration bottlenecks, and ensure clean, reliable interoperability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  API integration design and implementation
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  EDI onboarding and mapping
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  ERP / TMS / WMS connectivity packages
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Real-time shipment and order event orchestration
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Data quality monitoring
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outcomes</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">🚀</div>
                  <div>
                    <div className="font-bold text-gray-900">Faster Onboarding</div>
                    <div className="text-sm text-gray-600">Connect partners in days, not months</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">🎯</div>
                  <div>
                    <div className="font-bold text-gray-900">Fewer Exceptions</div>
                    <div className="text-sm text-gray-600">Automated data validation and error handling</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">💰</div>
                  <div>
                    <div className="font-bold text-gray-900">Lower Operational Overhead</div>
                    <div className="text-sm text-gray-600">Reduce manual data entry and check calls</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">🔐</div>
                  <div>
                    <div className="font-bold text-gray-900">Unified Source of Truth</div>
                    <div className="text-sm text-gray-600">Consistent data across all platforms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Ready to connect your ecosystem?</h2>
          <Link href="/contact" className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block">
            Get Started
          </Link>
        </Container>
      </section>
    </div>
  );
}
