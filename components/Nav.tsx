"use client";

import Link from "next/link";
import { useState } from "react";

const productLinks = [
  { label: "Carrier Hub", href: "/products/carrier-hub" },
  { label: "Freight Exchange", href: "/products/freight-exchange" },
  { label: "Visibility Engine", href: "/products/visibility-engine" },
  { label: "Audit Engine", href: "/products/audit-engine" },
  { label: "TMS Bridge", href: "/products/tms-bridge" },
];

const serviceLinks = [
  { label: "Integration & Connectivity", href: "/services/integration" },
  { label: "Visibility & Control Tower", href: "/services/visibility" },
  { label: "Freight Audit & Analytics", href: "/services/audit" },
  { label: "Carrier Network Management", href: "/services/network-management" },
];

const industryLinks = [
  { label: "Shippers", href: "/who-we-serve#shippers" },
  { label: "Brokers & 3PLs", href: "/who-we-serve#brokers" },
  { label: "Carriers", href: "/who-we-serve#carriers" },
  { label: "E-Commerce & Retail", href: "/who-we-serve#ecommerce" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  const mobileDropdowns = [
    { key: "products", label: "Products", links: productLinks },
    { key: "services", label: "Services", links: serviceLinks },
    { key: "industries", label: "Who We Serve", links: industryLinks },
    { key: "company", label: "Company", links: companyLinks },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-blue flex items-center gap-2">
              <span>Pathwell Connect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  {productLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  {serviceLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Who We Serve
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  {industryLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center font-medium">
                Company
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  {companyLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors font-semibold shadow-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary-blue p-2">
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
          <div className="md:hidden pb-4 border-t border-gray-100">
            {mobileDropdowns.map((section) => (
              <div key={section.key} className="border-b border-gray-50">
                <button
                  onClick={() => toggleSubmenu(section.key)}
                  className="w-full px-4 py-3 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span>{section.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === section.key ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                  </svg>
                </button>
                <div className={`bg-gray-50 overflow-hidden transition-all duration-200 ${openSubmenu === section.key ? "max-h-96" : "max-h-0"}`}>
                  {section.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-8 py-2 text-sm text-gray-600 hover:text-primary-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="p-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-primary-blue text-white px-6 py-3 rounded-md font-semibold shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
