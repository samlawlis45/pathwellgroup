import Container from "@/components/Container";
import Link from "next/link";

export default function ManufacturersPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Manufacturer Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Supply chain solutions designed for manufacturers who need reliable,
              cost-effective transportation and visibility.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Raw Materials Logistics",
                description:
                  "Efficient inbound logistics for raw materials and components with just-in-time delivery capabilities.",
              },
              {
                title: "Finished Goods Distribution",
                description:
                  "Outbound logistics optimization for finished products to distribution centers and customers.",
              },
              {
                title: "Production Line Integration",
                description:
                  "Connect your production systems with logistics operations for seamless material flow.",
              },
              {
                title: "Compliance & Documentation",
                description:
                  "Manage complex shipping documentation, customs, and regulatory compliance requirements.",
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

      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Streamline Your Manufacturing Logistics?
            </h2>
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

