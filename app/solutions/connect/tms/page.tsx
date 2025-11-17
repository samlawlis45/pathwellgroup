import Container from "@/components/Container";
import Link from "next/link";

export default function TMSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              TMS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Seamless integration and connectivity solutions for Transportation
              Management Systems.
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
                title: "TMS Integration",
                description:
                  "Connect your TMS with carriers, brokers, and other logistics systems for seamless data flow.",
              },
              {
                title: "ERP Connectivity",
                description:
                  "Integrate TMS with your ERP system to synchronize orders, inventory, and financial data.",
              },
              {
                title: "WMS Integration",
                description:
                  "Connect warehouse management systems with transportation planning for end-to-end visibility.",
              },
              {
                title: "Carrier API Connections",
                description:
                  "Direct API connections to major carriers for real-time rate shopping and booking.",
              },
              {
                title: "Data Synchronization",
                description:
                  "Automated data synchronization across systems to ensure accuracy and reduce manual entry.",
              },
              {
                title: "Custom Workflows",
                description:
                  "Build custom integration workflows tailored to your specific business processes.",
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
            Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Reduced Manual Work
              </h3>
              <p className="text-gray-600">
                Automate data entry and eliminate manual processes between
                systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Real-Time Visibility
              </h3>
              <p className="text-gray-600">
                Get instant updates across all connected systems for better
                decision-making.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Improved Accuracy
              </h3>
              <p className="text-gray-600">
                Eliminate data entry errors with automated synchronization.
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
              Ready to Integrate Your TMS?
            </h2>
            <p className="text-xl mb-8 text-white">
              Let's discuss how Pathwell Connect can streamline your TMS
              integrations.
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

