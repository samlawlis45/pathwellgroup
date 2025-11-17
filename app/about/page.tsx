import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl lg:text-2xl text-white">
              Your integrated logistics partner, combining connectivity and
              execution.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                Pathwell Group is a modern logistics company that combines
                technology-driven connectivity services with hands-on freight
                execution. We believe that the future of logistics lies in
                seamlessly connecting systems, data, and operations.
              </p>
              <p className="text-gray-600 mb-4">
                Our unique model brings together Pathwell Connect—our integration
                and connectivity platform—with Pathwell Logistics—our
                transportation services arm. This integrated approach allows us
                to deliver both strategic advisory and operational execution from
                a single partner.
              </p>
              <p className="text-gray-600">
                We serve shippers, retailers, manufacturers, carriers, and 3PLs
                who are looking for a modern, scalable approach to logistics that
                doesn't sacrifice execution for technology, or vice versa.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Integration First",
                description:
                  "We start by ensuring your systems are properly connected. Connectivity is the foundation of modern logistics.",
              },
              {
                title: "Execution Excellence",
                description:
                  "Technology alone isn't enough. We combine platform services with proven operational expertise.",
              },
              {
                title: "Data-Driven",
                description:
                  "Every decision is informed by data. We provide the visibility and analytics you need to optimize continuously.",
              },
            ].map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Leadership
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              Our leadership team brings decades of combined experience in
              logistics, technology, and supply chain management.
            </p>
            {/* Leadership profiles can be added here */}
          </div>
        </Container>
      </section>
    </div>
  );
}

