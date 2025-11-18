import Container from "@/components/Container";
import Link from "next/link";

export default function ResourcesPage() {
  const contentItems = [
    {
      type: "Case Study",
      title: "Reducing Parcel Costs by 23%",
      description:
        "How a major e-commerce retailer optimized their parcel shipping strategy.",
      date: "March 2024",
      link: "#",
    },
    {
      type: "Blog Post",
      title: "The Future of Supply Chain Visibility",
      description:
        "Exploring emerging technologies and trends in supply chain transparency.",
      date: "February 2024",
      link: "#",
    },
    {
      type: "Whitepaper",
      title: "Integration Best Practices for Modern Logistics",
      description:
        "A comprehensive guide to connecting your logistics systems effectively.",
      date: "January 2024",
      link: "#",
    },
    {
      type: "Case Study",
      title: "Streamlining Carrier Onboarding",
      description:
        "How Pathwell Connect reduced onboarding time from weeks to days.",
      date: "December 2023",
      link: "#",
    },
    {
      type: "Blog Post",
      title: "5 Ways to Optimize Your Freight Spend",
      description:
        "Practical strategies for reducing transportation costs without sacrificing service.",
      date: "November 2023",
      link: "#",
    },
    {
      type: "Whitepaper",
      title: "The Integrated Logistics Model",
      description:
        "Why combining connectivity and execution delivers better results.",
      date: "October 2023",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Access case studies, whitepapers, and resources to help optimize your supply chain.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-blue uppercase tracking-wide">
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="mt-4 text-primary-blue font-semibold text-sm group-hover:underline">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to receive the latest insights and updates from Pathwell
              Group.
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

