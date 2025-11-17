import Container from "@/components/Container";
import Link from "next/link";

export default function RetailPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Retail & E-Commerce Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Specialized logistics solutions for retail and e-commerce businesses
              focused on speed, flexibility, and customer satisfaction.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Parcel Optimization",
                description:
                  "Reduce shipping costs through intelligent carrier selection, rate shopping, and package consolidation strategies.",
              },
              {
                title: "Last-Mile Delivery",
                description:
                  "Optimize final-mile delivery with flexible options including same-day, next-day, and scheduled delivery.",
              },
              {
                title: "Returns Management",
                description:
                  "Streamlined reverse logistics to handle returns efficiently and reduce processing costs.",
              },
              {
                title: "Inventory Visibility",
                description:
                  "Real-time inventory tracking across distribution centers and stores for better fulfillment decisions.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Retail Logistics?
            </h2>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

