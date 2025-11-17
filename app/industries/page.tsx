import Container from "@/components/Container";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      name: "Building Materials",
      description:
        "Specialized logistics solutions for building materials companies requiring careful handling, compliance, and efficient distribution.",
      features: [
        "Heavy freight handling",
        "Job site delivery",
        "Compliance & documentation",
        "Supply chain visibility",
      ],
      link: "/contact",
    },
    {
      name: "Retail & E-Commerce",
      description:
        "High-velocity fulfillment, parcel optimization, and visibility for retail and e-commerce businesses.",
      features: [
        "Parcel optimization",
        "Last-mile delivery",
        "Returns management",
        "Inventory visibility",
      ],
      link: "/solutions/retail",
    },
    {
      name: "Manufacturers",
      description:
        "Integrated production, inventory, and transportation flows for manufacturing operations.",
      features: [
        "Raw materials logistics",
        "Finished goods distribution",
        "Production line integration",
        "Compliance & documentation",
      ],
      link: "/solutions/manufacturers",
    },
    {
      name: "Chemicals",
      description:
        "Specialized logistics for chemical companies with unique safety, compliance, and handling requirements.",
      features: [
        "Hazmat compliance",
        "Specialized equipment",
        "Safety protocols",
        "Regulatory expertise",
      ],
      link: "/contact",
    },
    {
      name: "Oil & Gas",
      description:
        "Logistics solutions for oil and gas companies requiring specialized transportation and supply chain management.",
      features: [
        "Specialized equipment",
        "Regulatory compliance",
        "Remote location delivery",
        "Supply chain optimization",
      ],
      link: "/contact",
    },
    {
      name: "Medical Devices & Equipment",
      description:
        "Temperature-controlled and compliance-focused logistics for medical device and equipment companies.",
      features: [
        "Cold chain management",
        "Regulatory compliance",
        "Temperature monitoring",
        "Specialized handling",
      ],
      link: "/contact",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Industries</h1>
            <p className="text-xl lg:text-2xl text-white">
              Specialized logistics solutions tailored to your industry's unique
              needs and challenges.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="text-primary-blue mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={industry.link}
                    className="text-primary-blue font-semibold hover:underline inline-flex items-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Don't See Your Industry?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              We work across many industries and can customize solutions for
              your specific needs.
            </p>
            <Link
              href="/contact"
              className="bg-primary-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
