import Container from "@/components/Container";

export default function LoadBoardPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-wide text-sm mb-4 text-white/80">Platform</p>
            <h1 className="text-5xl font-bold mb-4">Pathwell Load Board</h1>
            <p className="text-xl">
              A curated marketplace for trusted carriers to access Pathwell freight opportunities with live visibility
              and rapid confirmation workflows.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">For Carriers</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Browse prioritized Pathwell loads across truckload, LTL, and expedited</li>
                <li>• Accept or counter offers with embedded messaging</li>
                <li>• Upload documents, track status, and manage payments</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">For Shippers</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Extend your network with pre-vetted carriers</li>
                <li>• Monitor tender acceptance and capacity coverage in real time</li>
                <li>• Connect directly to Pathwell Connect and transportation systems</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

