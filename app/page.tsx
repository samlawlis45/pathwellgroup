import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/AdobeStock_1423472877.mp4" type="video/mp4" />
          <source src="/AdobeStock_1423472877.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10 pointer-events-none"></div>

        <Container className="relative z-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              The Source-of-Truth Layer <br /> for the Modern Supply Chain
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              The data and integration brain + attribution ledger + freight analytics engine. We connect every system, partner, and event into a single governed reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="/technology/intelligent-ledger"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                See the Ledger
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* The Source of Truth (New Section) */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Signal vs. Truth</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Other platforms predict <em>what</em> might go wrong (Signals). Pathwell Connect explains <em>why</em>, <em>where</em> it propagates, <em>who</em> is responsible, and <em>what</em> it will cost (Truth).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrate Everything</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just inject signals. We unify your ERP, TMS, WMS, Carriers, and Parcel data into one governed model.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Govern Attribution</h3>
              <p className="text-gray-600 leading-relaxed">
                Know the lineage, authorship, and trust score of every event. We provide explanation + accountability, not just prediction.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantify Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically trace operational disruptions to financial outcomes. We connect the "Risk Score" to the Invoice.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-lg text-gray-600">
              Pathwell Connect bridges the gap between freight operations and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Integration & Connectivity */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group tech-card">
              <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Integration & Connectivity</h3>
              <p className="text-gray-600 mb-6">
                Seamless connectivity across your ERP, TMS, WMS, carrier systems, marketplaces, and trading partners.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>API and EDI onboarding</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>System-to-system data mapping</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Real-time event orchestration</li>
              </ul>
              <Link href="/services/integration" className="text-primary-blue font-bold hover:underline flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Visibility & Control Tower Services */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group tech-card">
              <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Visibility & Control Tower Services</h3>
              <p className="text-gray-600 mb-6">
                Real-time shipment tracking and proactive exception management across all modes.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Predictive ETA monitoring</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Delay and dwell exceptions</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Carrier event normalization</li>
              </ul>
              <Link href="/services/visibility" className="text-primary-blue font-bold hover:underline flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Freight Audit & Optimization */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group tech-card">
              <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 3.666A5.002 5.002 0 0115 17H9a5.002 5.002 0 010-9.334M15 12h1.5a1.5 1.5 0 011.5 1.5v2.5a1.5 1.5 0 01-1.5 1.5H15M6 15h1.5a1.5 1.5 0 001.5-1.5v-2.5a1.5 1.5 0 00-1.5-1.5H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Freight Audit & Optimization</h3>
              <p className="text-gray-600 mb-6">
                Modern auditing and analytics to uncover cost leakage and improve financial performance.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Invoice validation and variance detection</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Parcel audit and optimization</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Spend dashboards and reporting</li>
              </ul>
              <Link href="/services/audit" className="text-primary-blue font-bold hover:underline flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Carrier Network & Capacity Management */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group tech-card">
              <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Carrier Network & Capacity</h3>
              <p className="text-gray-600 mb-6">
                Build and manage a high-performing carrier network through centralized onboarding and intelligent capacity programs.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Digital carrier onboarding</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Compliance and scorecards</li>
                <li className="flex items-center"><span className="text-primary-blue mr-2">•</span>Market and capacity intelligence</li>
              </ul>
              <Link href="/services/capacity" className="text-primary-blue font-bold hover:underline flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Shippers",
                icon: "🏭",
                description: "Streamline operations, improve visibility, reduce freight spend, and enhance carrier collaboration.",
                link: "/industries/shippers"
              },
              {
                title: "Brokers & 3PLs",
                icon: "🔄",
                description: "Modernize your tech stack, automate key workflows, and expand service capabilities.",
                link: "/industries/brokers"
              },
              {
                title: "Carriers",
                icon: "🚛",
                description: "Connect directly with your shipper and broker customers through simple, modern integration.",
                link: "/industries/carriers"
              },
              {
                title: "E-Commerce",
                icon: "🛒",
                description: "Unify parcel and freight workflows, improve fulfillment accuracy, and reduce last-mile costs.",
                link: "/industries/retail"
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Pathwell Connect */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Pathwell Connect</h2>
            <p className="text-lg text-gray-600">
              We deliver more than just software. We deliver outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="flex items-start">
               <div className="w-6 h-6 bg-primary-blue rounded-full flex-shrink-0 mt-1 mr-4"></div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Enterprise Integration Expertise</h3>
                 <p className="text-gray-600">We understand the complexities of legacy systems and modern APIs.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="w-6 h-6 bg-primary-blue rounded-full flex-shrink-0 mt-1 mr-4"></div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Logistics-First Execution</h3>
                 <p className="text-gray-600">Not just technology consulting—we know how freight actually moves.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="w-6 h-6 bg-primary-blue rounded-full flex-shrink-0 mt-1 mr-4"></div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Onboarding</h3>
                 <p className="text-gray-600">Predictable delivery timelines that get you connected faster.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="w-6 h-6 bg-primary-blue rounded-full flex-shrink-0 mt-1 mr-4"></div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Services</h3>
                 <p className="text-gray-600">Grow without the overhead of massive internal teams.</p>
               </div>
             </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-blue text-white text-center">
        <Container>
          <h2 className="text-4xl font-bold mb-8">
            Transform your freight operations into <br/> a connected, governed logistics network.
          </h2>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-50 transition-colors shadow-lg inline-block"
          >
            Contact Pathwell Connect
          </Link>
        </Container>
      </section>
    </div>
  );
}
