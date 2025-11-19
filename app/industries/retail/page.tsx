import Container from "@/components/Container";
import Link from "next/link";

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32 dot-pattern">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For E-Commerce & Retail</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
              Unify parcel and freight workflows, improve fulfillment accuracy, and reduce last-mile costs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Optimize Fulfillment
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12 text-center">
            <p>
              Deliver a superior customer experience while controlling logistics costs. Pathwell Connect integrates your storefront, WMS, and carriers into a single fulfillment engine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parcel Optimization</h3>
              <p className="text-gray-600">Rate shop across national and regional carriers instantly.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inventory Sync</h3>
              <p className="text-gray-600">Real-time stock visibility across all sales channels.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
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
