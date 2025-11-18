import Container from "@/components/Container";
import Link from "next/link";

export default function ShippersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Shipper Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              End-to-end logistics solutions designed for shippers who demand
              efficiency, visibility, and cost control.
            </p>
          </div>
        </Container>
      </section>

      {/* Shipper Solutions by Mode */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Solutions by Mode
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Cross-Border",
                description:
                  "Seamless movement across borders with compliance automation, customs support, and multi-modal routing.",
              },
              {
                title: "Freight Capacity Solutions",
                description:
                  "Access dependable, scalable capacity across truckload, LTL, drayage, parcel, and expedited modes.",
              },
              {
                title: "Project Logistics",
                description:
                  "Heavy haul, multi-load coordination, white-glove services, and end-to-end project management.",
              },
              {
                title: "International Solutions",
                description:
                  "Air, ocean, and forwarding coordination with document automation, carrier integrations, and regulatory support.",
              },
              {
                title: "Visibility & Reporting",
                description:
                  "Unified visibility across modes with real-time tracking, exception alerts, and KPI dashboards.",
              },
              {
                title: "Warehouse Connectivity & Distribution",
                description:
                  "Connect WMS, OMS, and TMS systems to streamline inventory, fulfillment, replenishment, and distribution flows.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Capabilities */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Key Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Smart Rate Selection",
                description:
                  "AI-powered rate shopping across carriers and modes to find the optimal balance of cost and service.",
              },
              {
                title: "Connectivity Across Systems",
                description:
                  "Seamless integration with your ERP, TMS, and WMS systems for unified logistics management.",
              },
              {
                title: "Cold Chain Monitoring",
                description:
                  "Real-time temperature monitoring, excursion alerts, and regulatory compliance workflows.",
              },
              {
                title: "Freight Charge Audit",
                description:
                  "Automated auditing of freight bills to identify errors, overcharges, and recover lost spend.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Value Proposition
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Lower Cost
              </h3>
              <p className="text-gray-600">
                Optimize transportation spend through intelligent rate
                selection and carrier negotiation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Higher Visibility
              </h3>
              <p className="text-gray-600">
                Real-time tracking and comprehensive reporting across your
                entire supply chain.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Single Partner
              </h3>
              <p className="text-gray-600">
                One partner for connectivity, execution, and advisory services.
                Simplify your vendor relationships.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Shipping Operations?
            </h2>
            <p className="text-xl mb-8 text-white">
              Let's discuss how Pathwell can help you reduce costs and improve
              visibility.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
