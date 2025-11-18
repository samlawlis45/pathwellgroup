import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Pathwell Connect
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Integrated Freight Operations <br /> for Modern Supply Chains
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-blue-50 max-w-3xl mx-auto leading-relaxed font-light">
              Pathwell Connect delivers a unified suite of logistics and connectivity services designed to simplify how shippers, brokers, and carriers integrate, operate, and optimize their freight networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="/services/integration"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Value Proposition - The "Gap" */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bridging the Gap Between Operations & Tech</h2>
            <p className="text-xl text-gray-600">
              Pathwell Connect unifies four historically disconnected areas of logistics into a single, connected operating model.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integration & Connectivity",
                icon: "🔌",
                desc: "Seamless connectivity across ERP, TMS, WMS, and carrier systems.",
                link: "/services/integration",
              },
              {
                title: "Visibility & Control Tower",
                icon: "📡",
                desc: "Real-time shipment tracking and proactive exception management.",
                link: "/services/visibility",
              },
              {
                title: "Freight Audit & Analytics",
                icon: "📊",
                desc: "Modern auditing to uncover cost leakage and improve financials.",
                link: "/services/audit",
              },
              {
                title: "Carrier Network Management",
                icon: "🚛",
                desc: "Centralized onboarding, compliance, and intelligent capacity.",
                link: "/services/capacity",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-blue transition-all tech-card text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary-blue/5 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-blue/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="text-sm font-bold text-primary-blue flex items-center justify-center">
                  Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary-blue">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Shippers</h3>
              <p className="text-gray-600">Streamline operations, improve visibility, reduce freight spend, and enhance carrier collaboration.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary-blue">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Brokers & 3PLs</h3>
              <p className="text-gray-600">Modernize your tech stack, automate key workflows, and expand service capabilities without adding headcount.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary-blue">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Carriers</h3>
              <p className="text-gray-600">Connect directly with your shipper and broker customers through simple, modern integration and operational support.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary-blue">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">E-Commerce & Retail</h3>
              <p className="text-gray-600">Unify parcel and freight workflows, improve fulfillment accuracy, and reduce last-mile costs.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Pathwell Connect */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Pathwell Connect</h2>
            <p className="text-gray-400 text-lg">We bring a unique combination of technical depth and operational grit.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Deep Expertise</h3>
              <p className="text-gray-400">Enterprise integration expertise combined with logistics-first execution.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Onboarding</h3>
              <p className="text-gray-400">Predictable delivery and implementation that gets you live in weeks, not months.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Services</h3>
              <p className="text-gray-400">Expand your capabilities without the overhead of hiring internal teams.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-blue text-white text-center">
        <Container>
          <h2 className="text-4xl font-bold mb-6">Transform Your Freight Operations</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Turn your logistics network into a competitive advantage with Pathwell Connect.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg inline-block"
          >
            Contact Pathwell Connect
          </Link>
        </Container>
      </section>
    </div>
  );
}
