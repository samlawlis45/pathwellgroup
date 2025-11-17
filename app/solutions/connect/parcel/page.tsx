import Container from "@/components/Container";
import Link from "next/link";

export default function ParcelPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Parcel Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Integration and optimization solutions for parcel shipping
              operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Carrier API Integration",
                description:
                  "Direct integrations with major parcel carriers (UPS, FedEx, USPS, DHL) for real-time rate shopping and label generation.",
              },
              {
                title: "E-Commerce Platform Connectors",
                description:
                  "Connect with Shopify, WooCommerce, Magento, and other e-commerce platforms for seamless order fulfillment.",
              },
              {
                title: "Rate Optimization",
                description:
                  "Automated rate shopping across carriers to find the best service level and price for each shipment.",
              },
              {
                title: "Label Generation",
                description:
                  "Automated label generation and printing with carrier compliance and formatting.",
              },
              {
                title: "Tracking Integration",
                description:
                  "Real-time tracking updates from carriers delivered to your systems and customers.",
              },
              {
                title: "Returns Management",
                description:
                  "Streamlined returns processing with automated return label generation and tracking.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Cost Reduction
              </h3>
              <p className="text-gray-600">
                Reduce parcel shipping costs through intelligent carrier
                selection and rate optimization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Time Savings
              </h3>
              <p className="text-gray-600">
                Automate shipping processes to save time and reduce manual
                errors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Better Customer Experience
              </h3>
              <p className="text-gray-600">
                Provide faster shipping options and better tracking visibility
                to your customers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Parcel Operations?
            </h2>
            <p className="text-xl mb-8 text-white">
              Let's discuss how Pathwell Connect can streamline your parcel
              shipping and reduce costs.
            </p>
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

