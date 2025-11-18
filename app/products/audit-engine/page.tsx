import Container from "@/components/Container";
import Link from "next/link";

export default function AuditEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Pathwell Connect Audit Engine</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A freight and parcel audit system powered by rules, analytics, and clean data.
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
                title: "Invoice Audits",
                desc: "Automated validation of every line item against contract rates."
              },
              {
                title: "Accessorial Tracking",
                desc: "Detailed monitoring of surcharges, detention, and extra fees."
              },
              {
                title: "Parcel Rate Optimization",
                desc: "Identify refund eligibility and service level downgrades."
              },
              {
                title: "Finance-Ready Reporting",
                desc: "Clean, coded data ready for your ERP and GL systems."
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Automate your freight audit.</h2>
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
