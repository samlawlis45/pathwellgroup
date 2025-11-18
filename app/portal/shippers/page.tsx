import Container from "@/components/Container";

export default function ShipperPortalPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Shipper Portal</h1>
            <p className="text-xl">
              Secure access to shipment visibility, document exchange, analytics, and collaboration tools for Pathwell
              shipper partners.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-700">
              The Pathwell Shipper Portal centralizes load tendering, status updates, invoices, and analytics in a single
              workspace. Current customers can request credentials or log in through their dedicated SSO connection.
            </p>
            <p className="text-gray-700">
              Need access? Contact your Pathwell account team or email{" "}
              <a href="mailto:support@pathwellgroup.com" className="text-primary-blue font-semibold hover:underline">
                support@pathwellgroup.com
              </a>{" "}
              to request onboarding.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

