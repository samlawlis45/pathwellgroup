import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative bg-primary-blue text-white py-20 lg:py-32 overflow-hidden">
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
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        {/* Content */}
        <Container className="relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Integrated Logistics, Connected End-to-End
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white">
              A unified partner delivering enterprise-grade connectivity, transportation
              management, and supply chain performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Speak With Our Team
              </Link>
              <Link
                href="/solutions"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-blue transition-colors"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: The Pathwell Operating Model */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            The Pathwell Operating Model
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pathwell Connect */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pathwell Connect</h3>
              <p className="text-gray-600 mb-4">
                Integration and connectivity services that unify your ERP, TMS, WMS, carriers,
                partners, and operational data into a single operating fabric.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Enterprise System Integration (ERP/TMS/WMS)</li>
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Carrier & Partner Onboarding</li>
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Data Engineering, Visibility & Telemetry</li>
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Workflow Automation & Process Orchestration</li>
              </ul>
              <Link href="/solutions/logistics-platform-services" className="text-primary-blue font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Pathwell Logistics */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pathwell Logistics</h3>
              <p className="text-gray-600 mb-4">
                Enterprise transportation management with modern brokerage, managed services,
                parcel optimization, and performance-driven execution.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Full-Service Brokerage</li>
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Managed Transportation (4PL)</li>
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Parcel Optimization & Audit</li>
                <li className="flex items-start"><span className="text-primary-blue mr-2">•</span>Freight Performance & Cost Management</li>
              </ul>
              <Link href="/solutions/transportation-services" className="text-primary-blue font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Who We Support */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Who We Support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Enterprise Shippers", description: "End-to-end logistics modernization and performance management", link: "/industries/shippers" },
              { title: "Retail & E-Commerce", description: "High-velocity fulfillment, parcel optimization, and visibility", link: "/industries/retail-ecommerce" },
              { title: "Manufacturers", description: "Integrated production, inventory, and transportation flows", link: "/industries/manufacturers" },
              { title: "Carriers & 3PLs", description: "Connectivity, automation, and data-driven operations", link: "/industries/3pls-brokers" },
            ].map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-primary-blue"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: Why Pathwell */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Leading Organizations Choose Pathwell</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Integration-First Architecture</h3>
              <p className="text-gray-600">
                We eliminate operational fragmentation by unifying your systems, partners, and data before optimizing transportation execution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Execution + Advisory Combined</h3>
              <p className="text-gray-600">
                Strategic guidance and hands-on operations delivered together, giving your supply chain both direction and horsepower.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Modern, Scalable Structure</h3>
              <p className="text-gray-600">
                Built for today's supply chain challenges with technology and processes that scale as your operations grow in size and complexity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: Featured Enterprise Solutions */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Enterprise Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Connectivity & Integration",
                description: "Unify ERP, TMS, WMS, carriers, partners, and data flows",
                link: "/solutions/logistics-platform-services",
              },
              {
                title: "Transportation Services",
                description: "Brokerage, 4PL, and execution built around data and performance",
                link: "/solutions/transportation-services",
              },
              {
                title: "Parcel Optimization & Audit",
                description: "Reduce parcel spend with data-driven optimization",
                link: "/solutions/transportation-services/parcel-optimization",
              },
              {
                title: "Supply Chain Analytics",
                description: "Visibility, telemetry, and executive performance intelligence",
                link: "/solutions/supply-chain-technology-services/analytics-reporting",
              },
            ].map((solution, index) => (
              <Link
                key={index}
                href={solution.link}
                className="bg-primary-blue text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-white text-sm mb-4">{solution.description}</p>
                <span className="text-sm font-semibold underline">Learn More →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
