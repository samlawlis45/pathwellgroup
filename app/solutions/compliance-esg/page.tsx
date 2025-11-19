import Container from "@/components/Container";
import Link from "next/link";

export default function ComplianceESGPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Compliance & ESG Governance
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Audit-Ready Compliance. <br/> Verifiable ESG.
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Automate regulatory reporting and sustainability tracking with a governed data ledger that proves your compliance.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The "Show Your Work" Era.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Regulations like UFLPA, CSDDD, and the German Supply Chain Act require more than just promises. They require proof. Pathwell Connect provides an immutable audit trail of your entire supply chain.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">✓</div>
                  <div>
                    <span className="font-bold text-gray-900">Forced Labor Screening</span>
                    <p className="text-sm text-gray-600">Automated checks against entity lists and high-risk regions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">✓</div>
                  <div>
                    <span className="font-bold text-gray-900">Scope 3 Emissions</span>
                    <p className="text-sm text-gray-600">Calculate carbon footprint per shipment using GLEC-accredited methodologies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">✓</div>
                  <div>
                    <span className="font-bold text-gray-900">Chain of Custody</span>
                    <p className="text-sm text-gray-600">Trace raw materials to finished goods with our IntelligentLedger™.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Compliance Dashboard</h3>
                  <span className="text-xs font-mono text-gray-400">AUDIT_ID: 992-A</span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-100 rounded flex justify-between items-center">
                    <span className="text-sm font-bold text-green-800">UFLPA Status</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border border-green-200 text-green-700">CLEARED</span>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-100 rounded flex justify-between items-center">
                    <span className="text-sm font-bold text-yellow-800">Carbon Intensity</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border border-yellow-200 text-yellow-700">1.2 kg/km</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-700">Data Lineage</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border border-gray-300 text-gray-600">VERIFIED</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="text-primary-blue text-sm font-bold hover:underline">Download Audit Report ↓</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prove your compliance.</h2>
          <Link
            href="/contact"
            className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
}

