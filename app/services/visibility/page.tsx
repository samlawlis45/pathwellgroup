import Container from "@/components/Container";
import Link from "next/link";

export default function VisibilityServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Visibility & Control Tower</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Real-time shipment tracking and proactive exception management across all modes.
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
                Our visibility operations bring predictability and transparency across all shipments, modes, and partners. We combine real-time signals, proactive monitoring, and clear communication to ensure you always know where your freight is.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Shipment tracking activation across carriers and modes
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Predictive ETA monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Exception management workflows
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Carrier event normalization
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Daily communication and escalation support
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outcomes</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">📈</div>
                  <div>
                    <div className="font-bold text-gray-900">Improved OTIF Performance</div>
                    <div className="text-sm text-gray-600">Hit delivery windows more consistently</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">🛡️</div>
                  <div>
                    <div className="font-bold text-gray-900">Reduced Uncertainty</div>
                    <div className="text-sm text-gray-600">Eliminate "black holes" in your supply chain</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">⚡</div>
                  <div>
                    <div className="font-bold text-gray-900">Streamlined Operations</div>
                    <div className="text-sm text-gray-600">Manage by exception, not by check-call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">See your supply chain clearly.</h2>
          <Link href="/contact" className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block">
            Get Visibility
          </Link>
        </Container>
      </section>
    </div>
  );
}
