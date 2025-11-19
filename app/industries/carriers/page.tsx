import Container from "@/components/Container";
import Link from "next/link";

export default function CarriersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-32 dot-pattern">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">For Carriers</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
              Get paid faster and access premium freight with a single digital profile.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Join the Network
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Value Proposition */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12 text-center">
            <p>
              Stop faxing paperwork and chasing payments. Pathwell Connect creates a <strong>Digital Wallet</strong> for your fleet, storing your compliance docs, insurance, and performance history to automate onboarding with thousands of shippers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Pay</h3>
              <p className="text-gray-600">Submit PODs digitally and trigger instant payment workflows.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-Click Onboarding</h3>
              <p className="text-gray-600">Share your "Verified Carrier" profile with any broker or shipper in the network.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 tech-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Load Access</h3>
              <p className="text-gray-600">Get matched with loads that fit your lane preferences and equipment type.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
