import Container from "@/components/Container";
import Link from "next/link";

export default function AnalyticsEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              The Intelligence Fabric
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Pathwell Connect Analytics Engine
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A logistics-specific data warehouse and analytics layer that unifies your entire supply chain into a single source of truth.
            </p>
          </div>
        </Container>
      </section>

      {/* Value Prop - The Missing Layer */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Missing Layer in <br /><span className="text-primary-blue">Modern Supply Chains.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Most companies have data scattered across 8–20 disparate systems—TMS, ERP, WMS, carrier portals, and audit providers. Collecting this data is easy; modeling it is hard.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The <strong>Pathwell Connect Analytics Engine</strong> is a centralized environment that normalizes, stitches, and models every data stream into clean, query-ready intelligence. It serves as the glue that unifies integration, visibility, audit, and carrier management.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Unified Data Warehouse
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Logistics-Standard Data Models
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Executive Business Dashboards
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              {/* Stack Diagram */}
              <div className="space-y-2 text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Data Sources</div>
              <div className="grid grid-cols-4 gap-2 mb-8">
                {['ERP', 'TMS', 'WMS', 'Carriers'].map(src => (
                  <div key={src} className="bg-white p-3 rounded border border-gray-200 shadow-sm text-xs font-bold text-gray-600">{src}</div>
                ))}
              </div>

              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-gray-300 mb-2"></div>
                <div className="w-full bg-primary-blue text-white p-6 rounded-xl shadow-lg relative z-10">
                  <div className="text-xl font-bold mb-2">Analytics Engine</div>
                  <div className="text-blue-100 text-sm">Normalization • Modeling • Stitching</div>
                </div>
                <div className="h-8 w-px bg-gray-300 mt-2"></div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-primary-blue font-bold text-2xl mb-1">100%</div>
                  <div className="text-xs text-gray-500 uppercase">Spend Visibility</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-primary-blue font-bold text-2xl mb-1">Real-Time</div>
                  <div className="text-xs text-gray-500 uppercase">Performance KPIs</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-gray-50 bg-dot-pattern">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">What's Inside</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Unified Data Warehouse",
                desc: "A managed warehouse environment (Snowflake, BigQuery, etc.) with pre-built ingestion pipelines and daily refreshes.",
                features: ["Normalized Logistics Schemas", "Clean Dimensional Models", "Automated Ingestion"]
              },
              {
                title: "Logistics Data Models",
                desc: "Our secret weapon. Out-of-the-box fact and dimension tables purpose-built for complex supply chains.",
                features: ["Shipment & Order Facts", "Freight Invoice Facts", "Carrier Performance Facts"]
              },
              {
                title: "Business Dashboards",
                desc: "Executive-grade visualizations delivered through Looker, Power BI, or embedded directly in your portal.",
                features: ["Carrier Scorecards", "Spend Waterfalls", "Tender Rejection Heatmaps"]
              },
              {
                title: "Data Services Layer",
                desc: "Advanced analytical capabilities to move from descriptive to predictive intelligence.",
                features: ["Predictive Modeling", "Anomaly Detection", "What-If Simulation"]
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group tech-card">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((feat, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-primary-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Standardized Intelligence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "Shipment Data",
                  context: "Tender → Delivery → Settlement"
                },
                {
                  label: "Transportation Events",
                  context: "Statuses, Milestones, Exceptions"
                },
                {
                  label: "Carrier Performance",
                  context: "OTP, Dwell, Rejections"
                },
                {
                  label: "Freight Audit",
                  context: "Invoice Lines, Accessorials, Variances"
                },
                {
                  label: "Parcel Data",
                  context: "DIMs, Zones, Surcharges"
                },
                {
                  label: "Operational Workflows",
                  context: "Track & Trace, Tendering"
                }
              ].map((useCase, i) => (
                <div key={i} className="border border-gray-100 p-6 rounded-lg bg-gray-50 text-center hover:border-primary-blue transition-colors">
                  <div className="font-bold text-gray-900 mb-2">{useCase.label}</div>
                  <div className="text-sm text-gray-500">{useCase.context}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <Container>
          <h2 className="text-4xl font-bold mb-6">Turn data into your competitive advantage.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop building dashboards from scratch. Deploy a proven logistics data architecture in weeks, not years.
          </p>
          <Link
            href="/contact"
            className="bg-primary-blue text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors shadow-lg inline-block"
          >
            Schedule a Data Strategy Session
          </Link>
        </Container>
      </section>
    </div>
  );
}
