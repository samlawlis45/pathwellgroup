import Container from "@/components/Container";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Careers</h1>
            <p className="text-xl lg:text-2xl text-white">
              Join a team that's transforming the future of logistics.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Work Here */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Work at Pathwell
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation",
                description:
                  "Work with cutting-edge technology and modern logistics solutions.",
              },
              {
                title: "Growth",
                description:
                  "Opportunities to grow your career in a fast-paced, expanding company.",
              },
              {
                title: "Impact",
                description:
                  "Make a real difference in how companies manage their supply chains.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Open Positions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="text-gray-600 text-center">
                We're always looking for talented individuals. Check back soon for
                open positions, or send us your resume at{" "}
                <a
                  href="mailto:careers@pathwellgroup.com"
                  className="text-primary-blue hover:underline"
                >
                  careers@pathwellgroup.com
                </a>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 text-white">
              We'd love to hear from you. Send us your resume or reach out to
              learn more.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

