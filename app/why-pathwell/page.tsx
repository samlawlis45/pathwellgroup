import Container from "@/components/Container";
import Link from "next/link";

export default function WhyPathwellPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Why Pathwell
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              The integrated logistics model that combines connectivity and
              execution.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Model */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Model</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Most logistics companies force you to choose between technology
              platforms and operational execution. Pathwell Group brings both
              together under one roof.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our integrated model means you get seamless connectivity through
              Pathwell Connect and proven freight execution through Pathwell
              Logistics—all from a single partner who understands both sides of
              the equation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-primary-blue">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Pathwell Connect
                </h3>
                <p className="text-gray-700">
                  Integration, connectivity, and platform services that connect
                  your systems and enable data-driven decisions.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-primary-blue">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Pathwell Logistics
                </h3>
                <p className="text-gray-700">
                  Transportation services, brokerage, and managed logistics with
                  integrated technology and operational expertise.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Advantage */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Technology Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Modern Architecture",
                description:
                  "Built on modern, scalable technology that grows with your business.",
              },
              {
                title: "API-First Design",
                description:
                  "RESTful APIs and webhooks for seamless integration with your systems.",
              },
              {
                title: "Real-Time Visibility",
                description:
                  "Live tracking, event monitoring, and instant alerts across your supply chain.",
              },
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational Expertise */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Operational Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Proven Track Record",
                description:
                  "Years of experience executing freight across all modes and industries.",
              },
              {
                title: "Extensive Carrier Network",
                description:
                  "Access to a broad network of vetted carriers and capacity providers.",
              },
              {
                title: "Industry Knowledge",
                description:
                  "Deep understanding of logistics challenges across shippers, carriers, and 3PLs.",
              },
              {
                title: "Customer-Focused",
                description:
                  "Dedicated account management and support teams focused on your success.",
              },
            ].map((expertise, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {expertise.title}
                </h3>
                <p className="text-gray-600">{expertise.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Experience the Pathwell Difference
            </h2>
            <p className="text-xl mb-8 text-white">
              See how our integrated model can transform your logistics
              operations.
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

