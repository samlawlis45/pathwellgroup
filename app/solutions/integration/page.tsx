import Container from "@/components/Container";
import Link from "next/link";

export default function IntegrationPage() {
  const capabilities = [
    {
      id: "erp-integration",
      title: "ERP & System Orchestration",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: "The central nervous system of your supply chain. We unify planning, execution, and financial systems into a single source of truth.",
      bullets: [
        "Bi-directional Order Sync",
        "Automated Freight Settlement",
        "Real-time Inventory Visibility",
        "Master Data Management",
      ],
    },
    {
      id: "carrier-connectivity",
      title: "Carrier Connectivity Fabric",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "A universal translation layer connecting you to thousands of carriers, fleets, and parcel networks instantly.",
      bullets: [
        "API Rating & Tendering",
        "Real-time Tracking (ELD/GPS)",
        "Digital POD & Doc Capture",
        "Status Normalization",
      ],
    },
    {
      id: "supplier-integration",
      title: "Supplier & Vendor Portals",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Digitize the first mile. Ensure compliance and visibility from purchase order issuance to dock door arrival.",
      bullets: ["ASN Automation", "Vendor Booking Portals", "Routing Guide Compliance", "Dynamic Appointment Scheduling"],
    },
    {
      id: "data-pipelines",
      title: "Data Pipelines & Intelligence",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Turn raw logistics data into executive intelligence. We pipe normalized data directly into your analytics warehouse.",
      bullets: ["Snowflake/Databricks Connectors", "Spend Analysis", "Carrier Scorecarding", "CO2 Emissions Reporting"],
    },
  ];

  const partnerEcosystem = [
    {
      category: "ERP & Enterprise Systems",
      logos: ["SAP S/4HANA", "Oracle Cloud", "Microsoft D365", "NetSuite", "Infor", "Epicor", "Sage"],
    },
    {
      category: "TMS Platforms",
      logos: ["Oracle OTM", "Blue Yonder", "SAP TM", "MercuryGate", "Manhattan", "Uber Freight", "Kuebix"],
    },
    {
      category: "Visibility & ELD",
      logos: ["project44", "FourKites", "Samsara", "Geotab", "Motive", "MacroPoint", "Tive"],
    },
    {
      category: "E-Commerce & WMS",
      logos: ["Shopify", "Magento", "HighJump", "Manhattan WMS", "Blue Yonder WMS", "Deposco", "Amazon"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              Pathwell Connect™
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              The Operating System for <br/> Modern Logistics.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop building point-to-point connections. Pathwell delivers a scalable integration mesh that unifies your ERP, TMS, WMS, and carrier network into a single ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule a Demo
              </Link>
              <Link
                href="#ecosystem"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Integrations
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Proposition - The "Gap" */}
      <section className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Integration Gap is <br/><span className="text-primary-blue">Slowing You Down.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modern supply chains are fragmented. Your ERP holds the order, your TMS holds the plan, your WMS holds the inventory, and your carriers hold the tracking data.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Pathwell bridges these gaps with a pre-built connectivity layer. We replace brittle legacy connections with standardized APIs and managed pipelines, ensuring data flows instantly between every stakeholder.
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminate manual order entry & check calls",
                  "Normalize data across disparate systems",
                  "Deploy new carriers in days, not weeks",
                  "Real-time financial reconciliation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-800 font-medium">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold text-gray-700">Your ERP (SAP/Oracle)</span>
                  <div className="h-1 flex-1 mx-4 bg-gray-300 rounded overflow-hidden">
                    <div className="h-full bg-red-400 w-1/2 animate-pulse"></div>
                  </div>
                  <span className="text-sm text-red-500 font-semibold">Siloed</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
                <div className="p-6 bg-primary-blue/5 rounded-xl border-2 border-primary-blue border-dashed text-center">
                  <h3 className="text-xl font-bold text-primary-blue mb-2">Pathwell Integration Mesh</h3>
                  <p className="text-sm text-gray-600">Standardized API | EDI | Flat File Translation</p>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded text-center text-sm font-semibold text-gray-600">TMS</div>
                  <div className="p-3 bg-gray-50 rounded text-center text-sm font-semibold text-gray-600">WMS</div>
                  <div className="p-3 bg-gray-50 rounded text-center text-sm font-semibold text-gray-600">Carriers</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Capabilities</h2>
            <p className="text-lg text-gray-600">Everything you need to orchestrate a digital supply chain.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.id} id={cap.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 tech-card group">
                <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                <div className="space-y-2">
                  {cap.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-3"></div>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integration Ecosystem */}
      <section id="ecosystem" className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Connected Ecosystem</h2>
              <p className="text-gray-400 text-lg">
                We maintain active integrations with the world's leading supply chain platforms. 
                Plug into our network and instantly connect with your partners.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link href="/contact" className="text-primary-blue font-semibold hover:text-white transition-colors flex items-center">
                Request an Integration <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerEcosystem.map((section) => (
              <div key={section.category} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 border-b border-gray-700 pb-2">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.logos.map((logo) => (
                    <div key={logo} className="flex items-center group cursor-default">
                      <div className="w-2 h-2 bg-primary-blue rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{logo}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack / Message Types */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Universal Translation Layer</h2>
              <p className="text-gray-600 mb-8">
                Your partners speak different languages—EDI, API, XML, CSV. Pathwell translates them all. 
                Our platform handles the complexity of protocol conversion, validation, and error handling 
                so your core systems receive clean, standardized data.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="font-bold text-gray-900 mb-1">EDI Standards</div>
                  <div className="text-sm text-gray-500">X12, EDIFACT, TRADACOMS</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="font-bold text-gray-900 mb-1">Modern API</div>
                  <div className="text-sm text-gray-500">REST, GraphQL, Webhooks</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="font-bold text-gray-900 mb-1">Legacy File</div>
                  <div className="text-sm text-gray-500">CSV, XML, FTP/SFTP</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="font-bold text-gray-900 mb-1">Streaming</div>
                  <div className="text-sm text-gray-500">Kafka, EventBridge</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col justify-center">
              <h3 className="font-bold text-gray-900 mb-6 text-center">Supported Transaction Sets</h3>
              <div className="space-y-3">
                {[
                  { code: "204", label: "Load Tender" },
                  { code: "990", label: "Response to Tender" },
                  { code: "214", label: "Shipment Status" },
                  { code: "210", label: "Freight Invoice" },
                  { code: "856", label: "Advance Ship Notice (ASN)" },
                  { code: "997", label: "Functional Acknowledgement" }
                ].map((set) => (
                  <div key={set.code} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                    <span className="font-mono font-bold text-primary-blue bg-blue-50 px-2 py-1 rounded">EDI {set.code}</span>
                    <span className="text-gray-600 font-medium">{set.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Connect?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Stop letting integration be the bottleneck. Let's architect a connected supply chain together.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors inline-block"
            >
              Talk to an Integration Architect
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
