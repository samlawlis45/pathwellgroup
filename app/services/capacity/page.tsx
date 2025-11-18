import Container from "@/components/Container";
import Link from "next/link";

export default function CapacityServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-primary-blue text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Pathwell Connect Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Carrier Network & Capacity Management</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Streamline carrier onboarding, compliance, and capacity management to build a more reliable and high-performing network.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We help you build and manage a high-performing carrier network. Through centralized onboarding, intelligent capacity programs, and rigorous compliance management, we ensure you have the capacity you need, when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What’s Included</h3>
              <ul className="space-y-4">
                {[
                  "Digital carrier onboarding portal",
                  "Compliance checks and scorecards",
                  "Routing guide development",
                  "Lane-level capacity insights"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary-blue mr-3 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Outcomes</h3>
              <ul className="space-y-6">
                {[
                  { title: "Faster Onboarding", desc: "Get carriers set up and hauling freight in minutes, not days." },
                  { title: "Higher Compliance", desc: "Reduce risk with automated insurance and safety monitoring." },
                  { title: "Better Performance", desc: "Data-driven scorecards help you retain the best carriers." }
                ].map((item) => (
                  <li key={item.title} className="border-b border-gray-800 last:border-0 pb-6 last:pb-0">
                    <h4 className="font-bold text-lg text-primary-blue mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Build a Better Network</h2>
            <p className="text-gray-600 mb-8">
              Optimize your carrier relationships today.
            </p>
            <Link
              href="/contact"
              className="bg-primary-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block"
            >
              Manage Capacity
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

