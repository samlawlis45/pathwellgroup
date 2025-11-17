import Container from "@/components/Container";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Integration & Connectivity Services
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Seamlessly connect your systems, carriers, and supply chain
              partners with Pathwell Connect.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Pillars */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Service Pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "System Integration",
                subtitle: "ERP/TMS/WMS",
                description:
                  "Connect your enterprise systems with our proven integration framework. Seamless data flow between ERP, TMS, and WMS platforms.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Carrier Onboarding",
                description:
                  "Rapidly onboard carriers with automated processes. Reduce time-to-market and ensure compliance across your carrier network.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Data Engineering",
                description:
                  "Transform raw logistics data into actionable insights. Clean, normalize, and structure data for analytics and reporting.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Visibility & Event Tracking",
                description:
                  "Real-time visibility into your supply chain. Track shipments, monitor events, and receive proactive alerts.",
                icon: (
                  <svg
                    className="w-8 h-8"
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
                ),
              },
              {
                title: "Analytics Enablement",
                description:
                  "Enable advanced analytics and reporting across your logistics operations. Custom dashboards and KPI tracking.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Supply Chain Automation",
                description:
                  "Automate repetitive processes and workflows. Reduce manual effort and improve operational efficiency.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-primary-blue font-semibold mb-2">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Intake", description: "Requirements gathering" },
                { step: "2", title: "Mapping", description: "System architecture design" },
                { step: "3", title: "Orchestration", description: "Integration development" },
                { step: "4", title: "QA", description: "Testing & validation" },
                { step: "5", title: "Production", description: "Deployment & support" },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-blue transform translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Connect Your Supply Chain?
            </h2>
            <p className="text-xl mb-8 text-white">
              Let's discuss how Pathwell Connect can integrate your systems and
              streamline your operations.
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

