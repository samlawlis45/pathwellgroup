import Container from "@/components/Container";
import Link from "next/link";

export default function AuditEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider mb-4">Product</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Pathwell Connect Audit Engine</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              A freight and parcel audit system powered by rules, analytics, and clean data.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Invoice audits and variance detection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Accessorial tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Parcel rate optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Finance-ready reporting
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recover lost spend.</h3>
                <Link href="/contact" className="text-primary-blue font-bold hover:underline">
                  Start auditing →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

