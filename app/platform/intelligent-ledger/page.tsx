"use client";

import { useState } from "react";
import Link from "next/link";

// Mock Data for the Ledger
const SHIPMENT_DATA = {
  id: "SHP-88392-X12",
  status: "IN_TRANSIT",
  origin: "Atlanta, GA",
  destination: "Dallas, TX",
  carrier: "Swift Transport",
  rate: "$1,250.00",
  margin: "$150.00",
  driver_name: "John Doe",
  driver_phone: "+1 (555) 019-2834",
  events: [
    {
      id: "EVT-001",
      type: "TENDER_ACCEPTED",
      timestamp: "2023-10-24 08:00:00",
      auth_obj: "Carrier API (EDI 990)",
      confidence: "High",
    },
    {
      id: "EVT-002",
      type: "PICKUP_COMPLETED",
      timestamp: "2023-10-24 14:30:00",
      auth_obj: "Driver Mobile App (GPS)",
      confidence: "Verified",
    },
    {
      id: "EVT-003",
      type: "ETA_UPDATE",
      timestamp: "2023-10-24 16:45:00",
      auth_obj: "Project44 Signal",
      confidence: "Medium",
    },
  ],
};

type ViewMode = "admin" | "shipper" | "carrier";

export default function IntelligentLedgerDashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>("admin");

  // Helper to determine if a field should be visible based on GHOST.ATTR logic
  const isVisible = (field: string) => {
    if (viewMode === "admin") return true;
    if (viewMode === "shipper") {
      return ["rate", "margin", "driver_phone"].includes(field) === false;
    }
    if (viewMode === "carrier") {
      return ["margin"].includes(field) === false;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary-blue">
                Pathwell Connect
              </Link>
              <span className="ml-4 px-2 py-1 bg-gray-100 text-xs font-mono text-gray-500 rounded">
                INTELLIGENT_LEDGER_V1.2
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Logged in as: <span className="font-bold text-gray-900">Demo User</span>
              </div>
              <div className="h-8 w-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                D
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Control Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Object Inspector</h1>
            <p className="text-sm text-gray-500">
              Viewing Canonical Object: <span className="font-mono text-primary-blue">{SHIPMENT_DATA.id}</span>
            </p>
          </div>
          
          {/* Visibility Toggle (GHOST.ATTR Simulator) */}
          <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm flex">
            {(["admin", "shipper", "carrier"] as ViewMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  viewMode === mode
                    ? "bg-primary-blue text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                View as {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: The Object Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">Shipment Details</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {SHIPMENT_DATA.status}
                </span>
              </div>
              
              <div className="p-6 grid grid-cols-2 gap-6">
                {/* Standard Fields */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-400 uppercase">Origin</label>
                  <div className="text-sm font-medium text-gray-900">{SHIPMENT_DATA.origin}</div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-400 uppercase">Destination</label>
                  <div className="text-sm font-medium text-gray-900">{SHIPMENT_DATA.destination}</div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-400 uppercase">Carrier</label>
                  <div className="text-sm font-medium text-gray-900">{SHIPMENT_DATA.carrier}</div>
                </div>

                {/* Protected Fields (GHOST.ATTR) */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-400 uppercase flex items-center">
                    Rate
                    {!isVisible("rate") && <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-1 rounded">REDACTED</span>}
                  </label>
                  <div className={`text-sm font-medium ${isVisible("rate") ? "text-gray-900" : "text-gray-300 blur-sm select-none"}`}>
                    {SHIPMENT_DATA.rate}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-400 uppercase flex items-center">
                    Margin
                    {!isVisible("margin") && <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-1 rounded">REDACTED</span>}
                  </label>
                  <div className={`text-sm font-medium ${isVisible("margin") ? "text-gray-900" : "text-gray-300 blur-sm select-none"}`}>
                    {SHIPMENT_DATA.margin}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-400 uppercase flex items-center">
                    Driver Phone
                    {!isVisible("driver_phone") && <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-1 rounded">REDACTED</span>}
                  </label>
                  <div className={`text-sm font-medium ${isVisible("driver_phone") ? "text-gray-900" : "text-gray-300 blur-sm select-none"}`}>
                    {SHIPMENT_DATA.driver_phone}
                  </div>
                </div>
              </div>

              {/* Patent Metadata Footer */}
              <div className="bg-gray-900 px-6 py-4 border-t border-gray-200 text-white">
                <div className="grid grid-cols-3 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-gray-500 block mb-1">AUTH.OBJ</span>
                    <span className="text-blue-400">SYS_TMS_V2</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">GHOST.ATTR</span>
                    <span className={viewMode === 'admin' ? "text-green-400" : "text-yellow-400"}>
                      {viewMode === 'admin' ? 'FULL_ACCESS' : 'RESTRICTED'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">ECON.ROY</span>
                    <span className="text-purple-400">TRACED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lineage / History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Event Lineage (PROC.FLOW)</h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
                {SHIPMENT_DATA.events.map((event, index) => (
                  <div key={event.id} className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary-blue"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="text-sm font-bold text-gray-900">{event.type}</div>
                        <div className="text-xs text-gray-500 mt-1">{event.timestamp}</div>
                      </div>
                      <div className="mt-2 sm:mt-0 text-right">
                        <div className="text-xs font-mono text-gray-500">AUTH: <span className="text-primary-blue">{event.auth_obj}</span></div>
                        <div className="text-xs font-mono text-gray-500">CONF: <span className="text-green-600">{event.confidence}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: System Health / JSON View */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Raw Object Data</h3>
              <pre className="font-mono text-xs text-green-400 overflow-x-auto p-2 bg-black rounded border border-gray-800">
                {JSON.stringify({
                  ...SHIPMENT_DATA,
                  _meta: {
                    view_context: viewMode,
                    ghost_applied: viewMode !== 'admin'
                  }
                }, null, 2)}
              </pre>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Governance Rules</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Lineage Verified
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Economic Attribution Active
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Ghost Attributes Enforced
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

