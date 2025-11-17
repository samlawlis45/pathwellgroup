"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  
  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-blue">
              Pathwell Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Logistics Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Logistics
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Execution Services
                  </div>
                  <Link href="/solutions/logistics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Freight Brokerage
                  </Link>
                  <Link href="/solutions/logistics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Managed Transportation (4PL)
                  </Link>
                  <Link href="/solutions/connect/parcel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Parcel Optimization
                  </Link>
                  <Link href="/solutions/logistics/cross-border" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Cross-Border Solutions
                  </Link>
                  <Link href="/solutions/logistics/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Project Logistics
                  </Link>
                  <div className="border-t my-1"></div>
                  {/* Shippers Sub-dropdown */}
                  <div className="relative group/sub">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer">
                      <span>Shippers</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="py-2">
                        <Link href="/solutions/logistics/shippers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Shipper Solutions
                        </Link>
                        <Link href="/solutions/technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Visibility & Reporting
                        </Link>
                        <Link href="/solutions/logistics/warehouse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Warehouse & Distribution
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Carriers Sub-dropdown */}
                  <div className="relative group/sub">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer">
                      <span>Carriers</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="py-2">
                        <Link href="/solutions/logistics/carriers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Carrier Solutions
                        </Link>
                        <Link href="/solutions/logistics/carriers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Become a Carrier
                        </Link>
                        <Link href="/carrier-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Carrier Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Solutions
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {/* Integration & Connectivity Sub-dropdown */}
                  <div className="relative group/sub">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer">
                      <span>Integration & Connectivity</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="py-2">
                        <Link href="/solutions/connect" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          System Integration (ERP/TMS/WMS)
                        </Link>
                        <Link href="/solutions/connect" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          API Connectivity
                        </Link>
                        <Link href="/solutions/connect" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          EDI Connectivity
                        </Link>
                        <Link href="/solutions/connect" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Carrier & Partner Onboarding
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* TMS Solutions Sub-dropdown */}
                  <div className="relative group/sub">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer">
                      <span>TMS Solutions</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="py-2">
                        <Link href="/solutions/connect/tms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Oracle Transportation Management (OTM)
                        </Link>
                        <Link href="/solutions/connect/tms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          SAP TM
                        </Link>
                        <Link href="/solutions/connect/tms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Blue Yonder
                        </Link>
                        <Link href="/solutions/connect/tms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Manhattan TMS
                        </Link>
                        <Link href="/solutions/connect/tms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          MercuryGate
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Technology Services Sub-dropdown */}
                  <div className="relative group/sub">
                    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer">
                      <span>Technology Services</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="py-2">
                        <Link href="/solutions/technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Supply Chain Data Engineering
                        </Link>
                        <Link href="/solutions/technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Visibility & Telemetry
                        </Link>
                        <Link href="/solutions/technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Analytics & Reporting
                        </Link>
                        <Link href="/solutions/connect/parcel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Parcel Cloud
                        </Link>
                        <Link href="/solutions/technology/sustainability" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Sustainability & Emissions Intelligence
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Industries
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/industries/building-materials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Building Materials
                  </Link>
                  <Link href="/solutions/retail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Retail & E-Commerce
                  </Link>
                  <Link href="/solutions/manufacturers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Manufacturing
                  </Link>
                  <Link href="/industries/food-beverage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Food & Beverage
                  </Link>
                  <Link href="/industries/grocery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Grocery Retail
                  </Link>
                  <Link href="/industries/chemicals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Chemicals
                  </Link>
                  <Link href="/industries/oil-gas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Oil & Gas
                  </Link>
                  <Link href="/industries/machinery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Industrial Machinery & Equipment
                  </Link>
                  <Link href="/industries/medical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Medical Devices
                  </Link>
                </div>
              </div>
            </div>

            {/* Partners Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Partners
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/partners/consultancy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    iPaas Partners
                  </Link>
                  <Link href="/partners/tech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    FreightTech Partners
                  </Link>
                  <Link href="/partners/pe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Private Equity Partners
                  </Link>
                  <Link href="/partners/tms-wms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    TMS & WMS Partners
                  </Link>
                  <Link href="/partners/developers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Developer/API Partners
                  </Link>
                </div>
              </div>
            </div>

            {/* Insights Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Insights
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Blog
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Case Studies
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Whitepapers
                  </Link>
                  <Link href="/resources/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    In the News
                  </Link>
                  <Link href="/resources/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Events
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-blue transition-colors flex items-center">
                Company
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    About
                  </Link>
                  <Link href="/about#leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Leadership
                  </Link>
                  <Link href="/why-pathwell" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Why Pathwell
                  </Link>
                  <Link href="/company/culture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Culture
                  </Link>
                  <Link href="/company/responsibility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Corporate Responsibility
                  </Link>
                  <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Careers
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-blue"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {/* Logistics */}
            <div className="pl-4 border-l-2 border-gray-200 my-2">
              <button
                onClick={() => toggleSubmenu("logistics")}
                className="text-sm font-semibold text-gray-500 mb-2 flex items-center justify-between w-full"
              >
                <span>Logistics</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openSubmenu === "logistics" ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {openSubmenu === "logistics" && (
                <div className="pl-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Execution Services</div>
                  <Link href="/solutions/logistics" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Freight Brokerage
                  </Link>
                  <Link href="/solutions/logistics" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Managed Transportation (4PL)
                  </Link>
                  <Link href="/solutions/connect/parcel" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Parcel Optimization
                  </Link>
                  <Link href="/solutions/logistics/cross-border" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Cross-Border Solutions
                  </Link>
                  <Link href="/solutions/logistics/projects" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Project Logistics
                  </Link>
                  <div className="border-t my-2"></div>
                  <button
                    onClick={() => toggleSubmenu("logistics-shippers")}
                    className="block py-2 text-gray-700 hover:text-primary-blue flex items-center justify-between w-full"
                  >
                    <span>Shippers</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${(openSubmenu as string) === "logistics-shippers" ? "rotate-90" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {(openSubmenu as string) === "logistics-shippers" && (
                    <div className="pl-4">
                      <Link href="/solutions/logistics/shippers" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Shipper Solutions
                      </Link>
                      <Link href="/solutions/technology" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Visibility & Reporting
                      </Link>
                      <Link href="/solutions/logistics/warehouse" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Warehouse & Distribution
                      </Link>
                    </div>
                  )}
                  <button
                    onClick={() => toggleSubmenu("logistics-carriers")}
                    className="block py-2 text-gray-700 hover:text-primary-blue flex items-center justify-between w-full"
                  >
                    <span>Carriers</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${(openSubmenu as string) === "logistics-carriers" ? "rotate-90" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {(openSubmenu as string) === "logistics-carriers" && (
                    <div className="pl-4">
                      <Link href="/solutions/logistics/carriers" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Carrier Solutions
                      </Link>
                      <Link href="/solutions/logistics/carriers" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Become a Carrier
                      </Link>
                      <Link href="/carrier-login" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Carrier Login
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="pl-4 border-l-2 border-gray-200 my-2">
              <button
                onClick={() => toggleSubmenu("solutions")}
                className="text-sm font-semibold text-gray-500 mb-2 flex items-center justify-between w-full"
              >
                <span>Solutions</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openSubmenu === "solutions" ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {openSubmenu === "solutions" && (
                <div className="pl-4">
                  <button
                    onClick={() => toggleSubmenu("solutions-integration")}
                    className="block py-2 text-gray-700 hover:text-primary-blue flex items-center justify-between w-full"
                  >
                    <span>Integration & Connectivity</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${(openSubmenu as string) === "solutions-integration" ? "rotate-90" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {(openSubmenu as string) === "solutions-integration" && (
                    <div className="pl-4">
                      <Link href="/solutions/connect" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        System Integration (ERP/TMS/WMS)
                      </Link>
                      <Link href="/solutions/connect" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        API Connectivity
                      </Link>
                      <Link href="/solutions/connect" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        EDI Connectivity
                      </Link>
                      <Link href="/solutions/connect" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Carrier & Partner Onboarding
                      </Link>
                    </div>
                  )}
                  <button
                    onClick={() => toggleSubmenu("solutions-tms")}
                    className="block py-2 text-gray-700 hover:text-primary-blue flex items-center justify-between w-full"
                  >
                    <span>TMS Solutions</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${(openSubmenu as string) === "solutions-tms" ? "rotate-90" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {(openSubmenu as string) === "solutions-tms" && (
                    <div className="pl-4">
                      <Link href="/solutions/connect/tms" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Oracle Transportation Management (OTM)
                      </Link>
                      <Link href="/solutions/connect/tms" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        SAP TM
                      </Link>
                      <Link href="/solutions/connect/tms" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Blue Yonder
                      </Link>
                      <Link href="/solutions/connect/tms" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Manhattan TMS
                      </Link>
                      <Link href="/solutions/connect/tms" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        MercuryGate
                      </Link>
                    </div>
                  )}
                  <button
                    onClick={() => toggleSubmenu("solutions-technology")}
                    className="block py-2 text-gray-700 hover:text-primary-blue flex items-center justify-between w-full"
                  >
                    <span>Technology Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${(openSubmenu as string) === "solutions-technology" ? "rotate-90" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {(openSubmenu as string) === "solutions-technology" && (
                    <div className="pl-4">
                      <Link href="/solutions/technology" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Supply Chain Data Engineering
                      </Link>
                      <Link href="/solutions/technology" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Visibility & Telemetry
                      </Link>
                      <Link href="/solutions/technology" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Analytics & Reporting
                      </Link>
                      <Link href="/solutions/connect/parcel" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Parcel Cloud
                      </Link>
                      <Link href="/solutions/technology/sustainability" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                        Sustainability & Emissions Intelligence
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Industries */}
            <div className="pl-4 border-l-2 border-gray-200 my-2">
              <button
                onClick={() => toggleSubmenu("industries")}
                className="text-sm font-semibold text-gray-500 mb-2 flex items-center justify-between w-full"
              >
                <span>Industries</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openSubmenu === "industries" ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {openSubmenu === "industries" && (
                <div className="pl-4">
                  <Link href="/industries/building-materials" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Building Materials
                  </Link>
                  <Link href="/solutions/retail" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Retail & E-Commerce
                  </Link>
                  <Link href="/solutions/manufacturers" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Manufacturing
                  </Link>
                  <Link href="/industries/food-beverage" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Food & Beverage
                  </Link>
                  <Link href="/industries/grocery" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Grocery Retail
                  </Link>
                  <Link href="/industries/chemicals" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Chemicals
                  </Link>
                  <Link href="/industries/oil-gas" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Oil & Gas
                  </Link>
                  <Link href="/industries/machinery" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Industrial Machinery & Equipment
                  </Link>
                  <Link href="/industries/medical" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Medical Devices
                  </Link>
                </div>
              )}
            </div>

            {/* Partners */}
            <div className="pl-4 border-l-2 border-gray-200 my-2">
              <button
                onClick={() => toggleSubmenu("partners")}
                className="text-sm font-semibold text-gray-500 mb-2 flex items-center justify-between w-full"
              >
                <span>Partners</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openSubmenu === "partners" ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {openSubmenu === "partners" && (
                <div className="pl-4">
                  <Link href="/partners/consultancy" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    iPaas Partners
                  </Link>
                  <Link href="/partners/tech" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    FreightTech Partners
                  </Link>
                  <Link href="/partners/pe" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Private Equity Partners
                  </Link>
                  <Link href="/partners/tms-wms" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    TMS & WMS Partners
                  </Link>
                  <Link href="/partners/developers" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Developer/API Partners
                  </Link>
                </div>
              )}
            </div>

            {/* Insights */}
            <div className="pl-4 border-l-2 border-gray-200 my-2">
              <button
                onClick={() => toggleSubmenu("insights")}
                className="text-sm font-semibold text-gray-500 mb-2 flex items-center justify-between w-full"
              >
                <span>Insights</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openSubmenu === "insights" ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {openSubmenu === "insights" && (
                <div className="pl-4">
                  <Link href="/resources" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                  <Link href="/resources" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Case Studies
                  </Link>
                  <Link href="/resources" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Whitepapers
                  </Link>
                  <Link href="/resources/news" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    In the News
                  </Link>
                  <Link href="/resources/events" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Events
                  </Link>
                </div>
              )}
            </div>

            {/* Company */}
            <div className="pl-4 border-l-2 border-gray-200 my-2">
              <button
                onClick={() => toggleSubmenu("company")}
                className="text-sm font-semibold text-gray-500 mb-2 flex items-center justify-between w-full"
              >
                <span>Company</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openSubmenu === "company" ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {openSubmenu === "company" && (
                <div className="pl-4">
                  <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/about#leadership" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Leadership
                  </Link>
                  <Link href="/why-pathwell" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Why Pathwell
                  </Link>
                  <Link href="/company/culture" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Culture
                  </Link>
                  <Link href="/company/responsibility" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Corporate Responsibility
                  </Link>
                  <Link href="/careers" className="block py-2 text-gray-700 hover:text-primary-blue" onClick={() => setIsOpen(false)}>
                    Careers
                  </Link>
                </div>
              )}
            </div>

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
