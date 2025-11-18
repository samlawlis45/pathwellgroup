import Container from "@/components/Container";
import Link from "next/link";

export default function BrokersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Brokers & 3PLs</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Modernize your tech stack, automate key workflows, and expand service capabilities without adding headcount.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
            <p>
              In a competitive market, efficiency is everything. Pathwell Connect provides the infrastructure 3PLs need to scale faster and serve customers better.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automation</h3>
              <p className="text-gray-600">Reduce manual check calls and data entry.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connectivity</h3>
              <p className="text-gray-600">Integrate directly with shipper TMSs and carrier ELDs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalability</h3>
              <p className="text-gray-600">Handle more volume with the same team.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Scale your brokerage today.</h2>
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

