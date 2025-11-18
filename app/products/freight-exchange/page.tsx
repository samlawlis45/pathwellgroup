import Container from "@/components/Container";
import Link from "next/link";

export default function FreightExchangePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider mb-4">Product</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Pathwell Connect Freight Exchange</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              A private, secure freight collaboration layer for shippers and carriers.
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
                  Load posting and tendering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Spot bidding workflows
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Routing guide logic
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Capacity communication
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize your procurement.</h3>
                <Link href="/contact" className="text-primary-blue font-bold hover:underline">
                  See it in action →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

