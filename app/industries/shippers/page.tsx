import Container from "@/components/Container";
import Link from "next/link";

export default function ShippersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Shippers</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Streamline operations, improve visibility, reduce freight spend, and enhance carrier collaboration.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
            <p>
              Managing a modern supply chain requires more than just moving goods. It requires connectivity, data, and control. Pathwell Connect helps shippers of all sizes unify their logistics operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">Identify leakage through audit and optimize carrier selection.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visibility</h3>
              <p className="text-gray-600">Know where every shipment is, regardless of carrier or mode.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">Automate manual tasks like tendering and invoice reconciliation.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to optimize your supply chain?</h2>
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

