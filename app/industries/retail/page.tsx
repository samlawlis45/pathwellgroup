import Container from "@/components/Container";
import Link from "next/link";

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For E-Commerce & Retail</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Unify parcel and freight workflows, improve fulfillment accuracy, and reduce last-mile costs.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
            <p>
              Deliver a superior customer experience while controlling logistics costs. Pathwell Connect integrates your storefront, WMS, and carriers into a single fulfillment engine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parcel Optimization</h3>
              <p className="text-gray-600">Rate shop across national and regional carriers instantly.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inventory Sync</h3>
              <p className="text-gray-600">Real-time stock visibility across all sales channels.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Returns Management</h3>
              <p className="text-gray-600">Simplify the reverse logistics process for you and your customers.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimize your fulfillment.</h2>
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

