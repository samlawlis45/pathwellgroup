"use client";

import Link from "next/link";
import { useState } from "react";

const shipperLinks = [
  { label: "Shipping with Pathwell", href: "/solutions/logistics/shippers" },
  { label: "Shipper Portal", href: "/portal/shippers" },
  { label: "Our People", href: "/our-people" },
];

const carrierLinks = [
  { label: "Hauling with Pathwell", href: "/solutions/logistics/carriers" },
  { label: "Carrier Portal", href: "/portal/carriers" },
];

const connectLinks = [
  { label: "Integration & Connectivity Services", href: "/solutions/integration" },
  { label: "ERP / TMS / WMS Integration", href: "/solutions/integration#erp-integration" },
  { label: "Carrier & Parcel Connectivity", href: "/solutions/integration#carrier-connectivity" },
  { label: "Supplier & Retail Integration", href: "/solutions/integration#supplier-integration" },
  { label: "Visibility & Event Streaming", href: "/solutions/integration#visibility-streaming" },
  { label: "Data Pipelines & Analytics Integration", href: "/solutions/integration#data-pipelines" },
];

const resourceLinks = [
  { label: "Market Insights", href: "/resources#market-insights" },
  { label: "Partnerships", href: "/resources#partnerships" },
  { label: "Blog", href: "/resources#blog" },
  { label: "Case Studies", href: "/resources#case-studies" },
  { label: "News", href: "/resources#news" },
  { label: "Glossary", href: "/resources#glossary" },
];

const primaryLinks = [
  { label: "Platform", href: "/platform/load-board" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Corporate Responsibility", href: "/company/responsibility" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  const mobileDropdowns = [
    { key: "shippers", label: "Shippers", links: shipperLinks },
    { key: "carriers", label: "Carriers", links: carrierLinks },
    { key: "connect", label: "Pathwell Connect", links: connectLinks },
    { key: "resources", label: "Resources", links: resourceLinks },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-blue">
              Pathwell Group
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[{ label: "Shippers", links: shipperLinks }, { label: "Carriers", links: carrierLinks }].map((section) => (
              <div key={section.label} className="relative group">
                <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                  {section.label}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {section.links.map((item) => (
                      <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Pathwell Connect
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {connectLinks.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 ${index === 0 ? "font-semibold text-primary-blue" : "text-gray-700"}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-700 hover:text-primary-blue transition-colors">
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {resourceLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
              Contact
            </Link>
          </div>

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

            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary-blue"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-primary-blue"
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
