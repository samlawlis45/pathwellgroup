import Container from "@/components/Container";
import Link from "next/link";

export default function NetworkManagementServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Carrier Network & Capacity</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Build and manage a high-performing carrier network through centralized onboarding and intelligent capacity programs.
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
                Pathwell Connect streamlines carrier onboarding, compliance, and capacity management to build a more reliable and high-performing network. We turn your carrier database into a strategic asset.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Digital carrier onboarding portal
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Compliance checks and scorecards
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Routing guide development
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Lane-level capacity insights
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue font-bold mr-3">✓</span>
                  Procurement support
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outcomes</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">⚡</div>
                  <div>
                    <div className="font-bold text-gray-900">Faster Onboarding</div>
                    <div className="text-sm text-gray-600">Approve carriers in minutes, not days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">✅</div>
                  <div>
                    <div className="font-bold text-gray-900">Higher Compliance</div>
                    <div className="text-sm text-gray-600">Reduce risk with automated monitoring</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl mr-4">🚚</div>
                  <div>
                    <div className="font-bold text-gray-900">Better Performance</div>
                    <div className="text-sm text-gray-600">Improve service levels with scorecarding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Optimize your capacity.</h2>
          <Link href="/contact" className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block">
            Manage Your Network
          </Link>
        </Container>
      </section>
    </div>
  );
}

