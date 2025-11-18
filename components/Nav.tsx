"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  const servicesLinks = [
    { label: "Integration & Connectivity", href: "/services/integration" },
    { label: "Visibility & Control Tower", href: "/services/visibility" },
    { label: "Freight Audit & Analytics", href: "/services/audit" },
    { label: "Carrier Network & Capacity", href: "/services/capacity" },
  ];

  const productLinks = [
    { label: "Pathwell Connect Carrier Hub", href: "/products/carrier-hub" },
    { label: "Pathwell Connect Freight Exchange", href: "/products/freight-exchange" },
    { label: "Pathwell Connect Analytics Engine", href: "/products/analytics-engine" },
    { label: "Pathwell Connect Visibility Engine", href: "/products/visibility-engine" },
    { label: "Pathwell Connect Audit Engine", href: "/products/audit-engine" },
    { label: "Pathwell Connect TMS Bridge", href: "/products/tms-bridge" },
  ];

  const technologyLinks = [
    { label: "IntelligentLedger™", href: "/technology/intelligent-ledger" },
  ];

  const whoWeServeLinks = [
    { label: "Shippers", href: "/industries/shippers" },
    { label: "Brokers & 3PLs", href: "/industries/brokers" },
    { label: "Carriers", href: "/industries/carriers" },
    { label: "E-Commerce & Retail", href: "/industries/retail" },
  ];

  const resourceLinks = [
    { label: "Market Insights", href: "/resources#market-insights" },
    { label: "Partnerships", href: "/resources#partnerships" },
    { label: "Blog", href: "/resources#blog" },
    { label: "Case Studies", href: "/resources#case-studies" },
    { label: "News", href: "/resources#news" },
    { label: "Glossary", href: "/resources#glossary" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Our People", href: "/our-people" },
    { label: "Careers", href: "/careers" },
    { label: "Corporate Responsibility", href: "/company/responsibility" },
  ];

  const mobileDropdowns = [
    { key: "services", label: "Services", links: servicesLinks },
    { key: "products", label: "Products", links: productLinks },
    { key: "technology", label: "Technology", links: technologyLinks },
    { key: "who-we-serve", label: "Who We Serve", links: whoWeServeLinks },
    { key: "resources", label: "Resources", links: resourceLinks },
    { key: "company", label: "Company", links: companyLinks },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-blue">
              Pathwell Connect
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {servicesLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {productLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Technology
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {technologyLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Who We Serve Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Who We Serve
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {whoWeServeLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {resourceLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

             {/* Company Dropdown */}
             <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Company
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {companyLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary-blue">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {mobileDropdowns.map((section) => (
              <div key={section.key} className="pl-4 border-l-2 border-gray-200 my-2">
                <button
                  onClick={() => toggleSubmenu(section.key)}
                  className="text-sm font-semibold text-gray-500 mb-2 flex items-center justify-between w-full"
                >
                  <span>{section.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${openSubmenu === section.key ? "rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {openSubmenu === section.key && (
                  <div className="pl-4">
                    {section.links.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-gray-700 hover:text-primary-blue"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenSubmenu(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-primary-blue font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
