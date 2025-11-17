import Container from "@/components/Container";
import Link from "next/link";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Supply Chain Technology Services
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Data engineering, visibility, and analytics to power your supply
              chain decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Data Engineering",
                description:
                  "Transform raw logistics data into clean, structured formats. Build data pipelines, normalize information, and ensure data quality across your supply chain.",
                features: [
                  "Data pipeline development",
                  "ETL/ELT processes",
                  "Data normalization",
                  "Quality assurance",
                ],
              },
              {
                title: "Visibility & Telemetry",
                description:
                  "Real-time tracking and monitoring of your supply chain. Get instant alerts, track shipments, and monitor performance metrics.",
                features: [
                  "Real-time tracking",
                  "Event monitoring",
                  "Proactive alerts",
                  "Performance dashboards",
                ],
              },
              {
                title: "Analytics & Reporting",
                description:
                  "Advanced analytics and custom reporting to drive data-driven decisions. KPI tracking, trend analysis, and predictive insights.",
                features: [
                  "Custom dashboards",
                  "KPI tracking",
                  "Trend analysis",
                  "Predictive analytics",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="text-primary-blue mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Transform Your Supply Chain Data
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Let's discuss how our technology services can unlock insights from
              your logistics data.
            </p>
            <Link
              href="/contact"
              className="bg-primary-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

