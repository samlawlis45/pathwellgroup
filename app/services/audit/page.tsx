import Container from "@/components/Container";
import Link from "next/link";

export default function AuditServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Freight Audit & Analytics</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Modern auditing and analytics to uncover cost leakage and improve financial performance.
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
                A modern auditing and analytics suite that surfaces hidden cost leakage and reveals new optimization opportunities. We validate every invoice against your contracts and market benchmarks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Invoice validation and charge audits
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Parcel spend optimization
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Contract vs invoice variance detection
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Accessorial pattern analysis
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Spend dashboards and BI reporting
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outcomes</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">💸</div>
                  <div>
                    <div className="font-bold text-gray-900">Reduced Overspend</div>
                    <div className="text-sm text-gray-600">Recover 2-5% of freight spend typically lost to errors</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">🤝</div>
                  <div>
                    <div className="font-bold text-gray-900">Improved Accountability</div>
                    <div className="text-sm text-gray-600">Hold carriers to their contractual commitments</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">📊</div>
                  <div>
                    <div className="font-bold text-gray-900">Actionable Insights</div>
                    <div className="text-sm text-gray-600">Data-driven leverage for rate negotiations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Stop paying for errors.</h2>
          <Link href="/contact" className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block">
            Start Auditing
          </Link>
        </Container>
      </section>
    </div>
  );
}
