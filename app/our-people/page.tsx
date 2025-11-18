import Container from "@/components/Container";

const teamHighlights = [
  {
    title: "Logistics Strategists",
    description: "Industry veterans guiding brokerage, managed transportation, and operations excellence programs.",
  },
  {
    title: "Integration Engineers",
    description: "Specialists in ERP, TMS, WMS, and data connectivity ensuring every system shares the same truth.",
  },
  {
    title: "Data & Analytics",
    description: "Analysts, scientists, and platform architects transforming supply chain signals into action.",
  },
];

export default function OurPeoplePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary-blue text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Our People</h1>
            <p className="text-xl">
              A multidisciplinary team of logistics operators, technologists, and data experts focused on building
              connected supply chains.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {teamHighlights.map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

