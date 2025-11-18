import Container from "@/components/Container";
import Link from "next/link";

export default function ResourcesPage() {
  const resourceSections = [
    {
      id: "market-insights",
      title: "Market Insights",
      description:
        "Forward-looking analysis on logistics, transportation, and supply chain resilience.",
      items: [
        {
          label: "Quarterly Freight & Parcel Benchmark",
          link: "#",
        },
        {
          label: "Nearshoring Readiness Assessment",
          link: "#",
        },
        {
          label: "Global Capacity Outlook",
          link: "#",
        },
      ],
    },
    {
      id: "partnerships",
      title: "Partnerships",
      description:
        "Frameworks, playbooks, and co-selling programs for platform, carrier, and investment partners.",
      items: [
        { label: "Technology Partner Program Overview", link: "#"},
        { label: "Strategic Alliance One-Pager", link: "#"},
        { label: "Partner Launch Checklist", link: "#"},
      ],
    },
    {
      id: "blog",
      title: "Blog",
      description:
        "Editorial perspectives from the Pathwell team on modernization, integration, and execution.",
      items: [
        { label: "5 Signals Your Logistics Stack Needs an Upgrade", link: "#"},
        { label: "Carrier Procurement in a Volatile Market", link: "#"},
        { label: "Build vs. Buy for Supply Chain Integration", link: "#"},
      ],
    },
    {
      id: "case-studies",
      title: "Case Studies",
      description:
        "Detailed profiles of how enterprises modernize with Pathwell across industries and modes.",
      items: [
        { label: "Retail Parcel Optimization", link: "#"},
        { label: "MedTech Cold Chain Visibility", link: "#"},
        { label: "Manufacturing Control Tower Buildout", link: "#"},
      ],
    },
    {
      id: "news",
      title: "News",
      description:
        "Announcements, press coverage, and noteworthy milestones across Pathwell Connect and Logistics.",
      items: [
        { label: "Pathwell Launches Integration Services Practice", link: "#"},
        { label: "Strategic Partnership with Leading TMS Vendor", link: "#"},
        { label: "Recognition in Supply Chain IT Innovators List", link: "#"},
      ],
    },
    {
      id: "glossary",
      title: "Glossary",
      description:
        "A working glossary covering logistics, technology, and connectivity terms for your teams.",
      items: [
        { label: "EDI vs. API Reference Guide", link: "#"},
        { label: "Transportation Acronyms Explained", link: "#"},
        { label: "Integration Architecture Components", link: "#"},
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl lg:text-2xl text-white">
              Research, playbooks, and thought leadership to help every supply chain team modernize.
            </p>
          </div>
        </Container>
      </section>

      {/* Sections */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {resourceSections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
              >
                <p className="text-xs font-semibold text-primary-blue uppercase tracking-wide mb-2">
                  {section.title}
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.link} className="text-primary-blue hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to receive the latest market insights, platform launches, and logistics best practices.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
              <button
                type="submit"
                className="bg-primary-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}

