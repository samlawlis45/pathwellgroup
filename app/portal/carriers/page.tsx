import Container from "@/components/Container";

export default function CarrierPortalPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Carrier Portal</h1>
            <p className="text-xl">
              Manage loads, documents, payments, and real-time communications through the Pathwell carrier workspace.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-700">
              Existing carriers can access the portal via their secure login link. The workspace includes load board
              assignments, document uploads, invoicing, and messaging to keep every haul on schedule.
            </p>
            <p className="text-gray-700">
              Interested in joining the Pathwell carrier network? Email{" "}
              <a href="mailto:capacity@pathwellgroup.com" className="text-primary-blue font-semibold hover:underline">
                capacity@pathwellgroup.com
              </a>{" "}
              to begin onboarding.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

