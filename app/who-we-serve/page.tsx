import Container from "@/components/Container";
import Link from "next/link";

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Who We Serve</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Purpose-built solutions for every stakeholder in the logistics ecosystem.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="space-y-24">
            <div id="shippers" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32">
              <div>
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-4xl mb-6">🏢</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Shippers</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Streamline operations, improve visibility, reduce freight spend, and enhance carrier collaboration. We give you the control tower you need to manage your network effectively.
                </p>
                <Link href="/contact" className="text-primary-blue font-bold hover:underline">
                  Solutions for Shippers →
                </Link>
              </div>
              <div className="bg-gray-50 h-64 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400">
                Shipper Dashboard Preview
              </div>
            </div>

            <div id="brokers" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32">
              <div className="md:order-2">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-4xl mb-6">🤝</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Brokers & 3PLs</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Modernize your tech stack, automate key workflows, and expand service capabilities without adding headcount. Integrate seamlessly with your shipper customers.
                </p>
                <Link href="/contact" className="text-primary-blue font-bold hover:underline">
                  Solutions for Brokers →
                </Link>
              </div>
              <div className="md:order-1 bg-gray-50 h-64 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400">
                Broker Tooling Preview
              </div>
            </div>

            <div id="carriers" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32">
              <div>
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-4xl mb-6">🚛</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Carriers</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Connect directly with your shipper and broker customers through simple, modern integration and operational support. Get paid faster and reduce empty miles.
                </p>
                <Link href="/contact" className="text-primary-blue font-bold hover:underline">
                  Solutions for Carriers →
                </Link>
              </div>
              <div className="bg-gray-50 h-64 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400">
                Carrier Portal Preview
              </div>
            </div>

            <div id="ecommerce" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32">
              <div className="md:order-2">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-4xl mb-6">🛒</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">E-Commerce & Retail</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Unify parcel and freight workflows, improve fulfillment accuracy, and reduce last-mile costs. Deliver a better customer experience from cart to door.
                </p>
                <Link href="/contact" className="text-primary-blue font-bold hover:underline">
                  Solutions for Retail →
                </Link>
              </div>
              <div className="md:order-1 bg-gray-50 h-64 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400">
                Parcel Analytics Preview
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Find your solution.</h2>
          <Link href="/contact" className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block">
            Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
}

