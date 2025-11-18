import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <section className="relative bg-primary-blue text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* MP4 for maximum browser compatibility */}
          <source src="/AdobeStock_1423472877.mp4" type="video/mp4" />
          {/* MOV for Safari/iOS fallback */}
          <source src="/AdobeStock_1423472877.mov" type="video/quicktime" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10 pointer-events-none"></div>
        
        {/* Content */}
        <Container className="relative z-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Integrated Logistics,<br /> Connected End-to-End.
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              A unified partner delivering enterprise-grade connectivity, transportation
              management, and supply chain performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Speak With Our Team
              </Link>
              <Link
                href="/solutions/integration"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats / Social Proof */}
      <section className="py-10 border-b border-gray-100 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-blue mb-1">98%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-blue mb-1">50k+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Connected Carriers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-blue mb-1">$500M+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Freight Managed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-blue mb-1">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Support & Monitoring</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: The Pathwell Operating Model */}
      <section className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Pathwell Operating Model
            </h2>
            <p className="text-lg text-gray-600">
              We bridge the gap between pure-play technology and traditional logistics execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pathwell Connect */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group tech-card">
              <div className="w-16 h-16 bg-primary-blue/10 text-primary-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pathwell Connect</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Integration and connectivity services that unify your ERP, TMS, WMS, carriers,
                partners, and operational data into a single operating fabric.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Enterprise System Integration</li>
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Carrier & Partner Onboarding</li>
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Data Engineering & Telemetry</li>
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Workflow Automation</li>
              </ul>
              <Link href="/solutions/integration" className="text-primary-blue font-bold hover:underline flex items-center">
                Explore Connectivity <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Pathwell Logistics */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group tech-card">
              <div className="w-16 h-16 bg-primary-blue/10 text-primary-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pathwell Logistics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enterprise transportation management with modern brokerage, managed services,
                parcel optimization, and performance-driven execution.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Digital Freight Brokerage</li>
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Managed Transportation (4PL)</li>
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Parcel Optimization & Audit</li>
                <li className="flex items-start"><span className="text-primary-blue mr-3 font-bold">✓</span>Cost Management</li>
              </ul>
              <Link href="/solutions/logistics/shippers" className="text-primary-blue font-bold hover:underline flex items-center">
                Explore Logistics <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Who We Support */}
      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Who We Support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Enterprise Shippers", icon: "🏢", description: "End-to-end logistics modernization", link: "/solutions/logistics/shippers" },
              { title: "Retail & E-Commerce", icon: "🛒", description: "High-velocity fulfillment & parcel", link: "/solutions/retail" },
              { title: "Manufacturers", icon: "🏭", description: "Production-critical logistics flows", link: "/solutions/manufacturers" },
              { title: "Carriers & 3PLs", icon: "🚛", description: "Network connectivity & automation", link: "/solutions/logistics/carriers" },
            ].map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-gray-100 group text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: Why Pathwell */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Leading Organizations Choose Pathwell</h2>
            <p className="text-gray-400 text-lg">We don't just move freight. We upgrade your entire logistics infrastructure.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-700">
                <svg className="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Integration-First Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                We eliminate operational fragmentation by unifying your systems, partners, and data before optimizing transportation execution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-700">
                <svg className="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Execution + Advisory Combined</h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic guidance and hands-on operations delivered together, giving your supply chain both direction and horsepower.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-700">
                <svg className="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Modern, Scalable Structure</h3>
              <p className="text-gray-400 leading-relaxed">
                Built for today's supply chain challenges with technology and processes that scale as your operations grow in size and complexity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: Featured Enterprise Solutions */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Enterprise Solutions</h2>
              <p className="text-lg text-gray-600">Targeted capabilities for high-performance supply chains.</p>
            </div>
            <Link href="/solutions" className="text-primary-blue font-bold hover:underline mt-4 md:mt-0">
              View All Solutions →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Connectivity & Integration",
                description: "Unify ERP, TMS, WMS, carriers, partners, and data flows.",
                link: "/solutions/integration",
              },
              {
                title: "Transportation Services",
                description: "Brokerage, 4PL, and execution built around data and performance.",
                link: "/solutions/logistics",
              },
              {
                title: "Parcel Optimization",
                description: "Reduce parcel spend with data-driven optimization and audit.",
                link: "/solutions/connect/parcel",
              },
              {
                title: "Supply Chain Analytics",
                description: "Visibility, telemetry, and executive performance intelligence.",
                link: "/solutions/technology",
              },
            ].map((solution, index) => (
              <Link
                key={index}
                href={solution.link}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-primary-blue hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-blue transition-colors">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{solution.description}</p>
                <span className="text-sm font-bold text-primary-blue group-hover:translate-x-1 transition-transform inline-block">Learn More →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
