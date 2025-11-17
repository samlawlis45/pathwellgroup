import Container from "@/components/Container";
import Link from "next/link";

export default function ThreePLBrokerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              3PL/Broker Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Integration and connectivity solutions designed specifically for
              3PLs and freight brokers.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Shipper Platform Integration",
                description:
                  "Connect with shipper TMS and ERP systems to streamline order management and execution.",
              },
              {
                title: "Carrier Network Connectivity",
                description:
                  "Access and manage connections to your carrier network through a unified platform.",
              },
              {
                title: "Rate Management",
                description:
                  "Centralized rate management and contract integration across your carrier base.",
              },
              {
                title: "Load Board Integration",
                description:
                  "Integrate with major load boards to access additional capacity and opportunities.",
              },
              {
                title: "Documentation Automation",
                description:
                  "Automate BOL, POD, and other documentation processes for faster operations.",
              },
              {
                title: "Reporting & Analytics",
                description:
                  "Comprehensive reporting and analytics to track performance and optimize operations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Pathwell Connect for 3PL/Broker Operations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Scale Your Operations
              </h3>
              <p className="text-gray-600">
                Handle more volume with less manual effort through automated
                integrations and workflows.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Improve Customer Service
              </h3>
              <p className="text-gray-600">
                Provide better visibility and faster response times to your
                shipper customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Reduce Costs
              </h3>
              <p className="text-gray-600">
                Lower operational costs through automation and reduced manual
                processes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Competitive Advantage
              </h3>
              <p className="text-gray-600">
                Stand out with modern technology and seamless integrations that
                your competitors may lack.
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
              Ready to Modernize Your 3PL/Broker Operations?
            </h2>
            <p className="text-xl mb-8 text-white">
              Let's discuss how Pathwell Connect can help you scale and
              optimize your business.
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

