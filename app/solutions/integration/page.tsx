import Container from "@/components/Container";
import Link from "next/link";

export default function IntegrationPage() {
  const whatWeSolve = [
    "Fragmented ERP, WMS, and TMS data",
    "Manual processes for order, shipment, and invoice sync",
    "Carrier integrations built differently for every partner",
    "Lack of visibility across modes and providers",
    "Siloed systems at 3PLs, warehouses, vendors, and brokers",
    "Duplicate data entry and inconsistent master data",
    "Brittleness from point-to-point legacy integrations",
  ];

  const integrationCapabilities = [
    {
      id: "erp-integration",
      title: "ERP / TMS / WMS Integration",
      description: "Unify planning, execution, and financial systems:",
      bullets: [
        "Order management",
        "Shipment execution",
        "Fulfillment and inventory sync",
        "ASN and status updates",
        "Invoice and freight bill integration",
      ],
    },
    {
      id: "carrier-connectivity",
      title: "Carrier & Parcel Connectivity",
      description: "Connect to every mode and carrier:",
      bullets: [
        "Truckload, LTL, parcel, final mile",
        "Rate shopping, label generation, tendering",
        "Status, POD, exceptions, invoicing",
      ],
    },
    {
      id: "supplier-integration",
      title: "Supplier & Retail Compliance Integration",
      description: "Support multi-party supply chains:",
      bullets: ["ASN compliance", "Routing and appointment scheduling", "VMI and replenishment signals"],
    },
    {
      id: "visibility-streaming",
      title: "Visibility & Event Streaming",
      description: "Real-time supply chain visibility:",
      bullets: ["Telemetry, IoT, cold chain", "Transportation visibility APIs", "Exception-based event routing"],
    },
    {
      id: "data-pipelines",
      title: "Data Pipelines & Analytics Integration",
      description: "Enable supply chain intelligence:",
      bullets: ["ETL/ELT pipelines", "Consolidated reporting", "Supply chain KPIs"],
    },
  ];

  const deliverySteps = [
    {
      title: "Step 1: Integration Blueprint",
      description: "Model current systems, data flows, and requirements.",
    },
    {
      title: "Step 2: Connectivity Buildout",
      description: "Implement connectors, mappings, and adapters using industry-standard tools.",
    },
    {
      title: "Step 3: Transformation & Orchestration",
      description: "Normalize and route data between systems using canonical models.",
    },
    {
      title: "Step 4: Monitoring & Managed Services",
      description: "SLA-backed support, real-time alerting, and continuous optimization.",
    },
  ];

  const supportedMessages = [
    {
      title: "EDI",
      bullets: ["204, 210, 214, 990, 997", "850, 855, 856, 810", "EDIFACT equivalents"],
    },
    {
      title: "APIs / JSON",
      bullets: ["REST, GraphQL, SOAP", "Webhooks", "OpenAPI / JSON Schema"],
    },
    {
      title: "Files / Legacy",
      bullets: ["Flat files (CSV, TXT)", "XML, Excel, PDF extraction", "SFTP, AS2, FTP"],
    },
  ];

  const toolsAndTech = [
    {
      title: "iPaaS Platforms",
      items: ["Boomi", "MuleSoft", "Workato", "Jitterbit", "Celigo"],
    },
    {
      title: "EDI Integration",
      items: ["Cleo Integration Cloud", "TrueCommerce", "OpenText", "SPS Commerce"],
    },
    {
      title: "Cloud & Event Platforms",
      items: ["AWS (API Gateway, EventBridge, Lambda)", "Azure Integration Services", "Kafka / Confluent"],
    },
    {
      title: "Data Pipelines",
      items: ["Fivetran / Airbyte", "Snowflake", "Databricks", "BigQuery"],
    },
    {
      title: "Monitoring & Observability",
      items: ["Datadog", "New Relic"],
    },
  ];

  const partnerCategories = [
    {
      title: "ERP Partners — Enterprise",
      items: ["SAP ECC / S/4HANA", "Oracle ERP Cloud", "Microsoft Dynamics 365", "Infor LN / CloudSuite", "NetSuite"],
    },
    {
      title: "ERP Partners — Mid-Market",
      items: ["Sage", "Acumatica", "Epicor", "Syspro"],
    },
    {
      title: "TMS Partners",
      items: [
        "Oracle Transportation Management (OTM)",
        "Blue Yonder TMS",
        "SAP TM",
        "MercuryGate",
        "TMW / Trimble",
        "Kuebix",
        "CoyoteGO (API)",
        "FreightPOP",
        "project44 (TMS integrations)",
      ],
    },
    {
      title: "WMS Partners",
      items: [
        "Manhattan Associates",
        "Blue Yonder WMS",
        "SAP EWM",
        "Oracle WMS",
        "Softeon",
        "HighJump / Körber",
        "3PL Central",
        "Deposco",
      ],
    },
    {
      title: "Carrier & Freight API Partners — Parcel",
      items: ["UPS", "FedEx", "USPS", "DHL Express", "Pitney Bowes", "LaserShip / OnTrac"],
    },
    {
      title: "Carrier & Freight API Partners — LTL",
      items: ["XPO", "Old Dominion", "Estes", "Saia", "Day & Ross", "Averitt", "FedEx Freight", "UPS Freight equivalents"],
    },
    {
      title: "Carrier & Freight API Partners — Truckload",
      items: [
        "All major carriers via DAT / Truckstop",
        "EDI 204/990 networks",
        "Carrier-direct APIs",
      ],
    },
    {
      title: "Carrier & Freight API Partners — International",
      items: ["DHL Global Forwarding", "Expeditors", "Maersk", "MSC", "CMA CGM", "Kuehne+Nagel"],
    },
    {
      title: "Visibility, Tracking & Telematics",
      items: ["FourKites", "project44", "MacroPoint", "Samsara", "Geotab", "Motive", "Tive"],
    },
    {
      title: "E-Commerce & Marketplace Integrations",
      items: ["Shopify", "Amazon Seller Central", "Magento", "WooCommerce", "BigCommerce", "ShipStation", "SPS Commerce"],
    },
    {
      title: "Retail & Compliance Networks",
      items: ["Walmart RetailLink", "Target", "Home Depot", "Lowe’s", "Kroger", "GS1 label and ASN compliance networks"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-wide text-sm mb-4 text-white/80">Integration Services</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Integration & Connectivity Services</h1>
            <p className="text-xl lg:text-2xl text-white mb-6">
              Connect every system in your supply chain with seamless, standards-based logistics integration.
            </p>
            <p className="text-white text-lg">
              Pathwell delivers end-to-end integration services that unify your ERP, TMS, WMS, carriers, suppliers, and
              distribution partners into one connected ecosystem. We use industry-standard tools and proven accelerators
              to deliver fast, reliable, scalable connectivity across your entire logistics network.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Solve */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What We Solve</h2>
            <p className="text-gray-600 mb-10">
              Pathwell eliminates integration gaps across every major supply chain workflow and provides a standardized,
              modern architecture that connects every system and automates every flow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatWeSolve.map((item) => (
              <div key={item} className="bg-white p-5 rounded-lg shadow border border-gray-200 flex">
                <span className="text-primary-blue mr-3">•</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core capabilities */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Core Integration Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCapabilities.map((capability) => (
              <div
                key={capability.title}
                id={capability.id}
                className="bg-white p-6 rounded-lg shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we deliver */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How We Deliver</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step) => (
              <div key={step.title} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Supported messages */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Supported Message Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportedMessages.map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {category.bullets.map((bullet) => (
                    <li key={bullet} className="flex">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools & platforms */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tools & Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsAndTech.map((tool) => (
              <div key={tool.title} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {tool.items.map((item) => (
                    <li key={item} className="flex">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integration partners */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Integration Partners</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Below is a representative list of systems Pathwell integrates with. These references indicate compatibility,
            not endorsements or formal affiliations.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Connect Every Partner and Platform</h2>
            <p className="text-xl mb-8 text-white">
              Discover how Pathwell delivers resilient, scalable integration across your supply chain ecosystem.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Speak With Our Integration Team
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

