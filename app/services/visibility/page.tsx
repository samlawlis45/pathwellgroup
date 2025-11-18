import Container from "@/components/Container";
import Link from "next/link";

export default function VisibilityServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Visibility & Control Tower</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Predictability and transparency across all shipments, modes, and partners.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our visibility operations bring predictability and transparency across all shipments, modes, and partners. We combine real-time signals, proactive monitoring, and clear communication to ensure your supply chain stays on track.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Outcomes</h3>
              <ul className="space-y-3">
                {[
                  "Improved OTIF performance",
                  "Reduced uncertainty",
                  "Streamlined operations",
                  "Proactive exception handling"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Shipment Tracking",
                desc: "Activation across carriers and modes via API, ELD, and portal."
              },
              {
                title: "Predictive ETA",
                desc: "Machine learning models to predict arrival times and potential delays."
              },
              {
                title: "Exception Management",
                desc: "Automated workflows to flag and resolve dwell time and delay issues."
              },
              {
                title: "Event Normalization",
                desc: "Standardized status updates regardless of carrier format."
              },
              {
                title: "Escalation Support",
                desc: "Daily communication and intervention for critical shipments."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Gain total visibility today.</h2>
          <Link
            href="/contact"
            className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
}
