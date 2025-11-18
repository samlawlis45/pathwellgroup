import Container from "@/components/Container";
import Link from "next/link";

export default function CarrierHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Pathwell Connect Carrier Hub</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A complete solution for carrier onboarding, compliance, and connectivity.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Digital Onboarding Workflow",
                desc: "Streamline the approval process with automated document collection and signing."
              },
              {
                title: "Insurance Automation",
                desc: "Direct connections to insurance providers to verify coverage instantly."
              },
              {
                title: "System Integration (API/EDI)",
                desc: "Connect carrier systems directly for automated tendering and tracking."
              },
              {
                title: "Performance Dashboards",
                desc: "Monitor service levels, on-time performance, and acceptance rates."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Simplify your carrier network.</h2>
          <Link
            href="/contact"
            className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block"
          >
            Request Demo
          </Link>
        </Container>
      </section>
    </div>
  );
}
