"use client";

import { useState } from "react";

// Mock Data for the Ledger
const mockObjects = [
  {
    id: "SHP-88392",
    type: "Shipment",
    status: "DELIVERED",
    origin: "Atlanta, GA",
    dest: "Dallas, TX",
    timestamp: "2023-10-24 14:30:00",
    auth: "Carrier API",
    trust: 98,
    cost: 1250.00,
    events: [
      { id: 1, status: "DELIVERED", time: "14:30:00", auth: "Driver App", trust: "High" },
      { id: 2, status: "OUT_FOR_DELIVERY", time: "08:15:00", auth: "GPS Geofence", trust: "Med" },
      { id: 3, status: "ARRIVED_TERMINAL", time: "04:20:00", auth: "Carrier EDI 214", trust: "High" },
    ]
  },
  {
    id: "INV-44210",
    type: "Invoice",
    status: "AUDIT_FLAG",
    origin: "N/A",
    dest: "N/A",
    timestamp: "2023-10-24 10:15:00",
    auth: "EDI 210",
    trust: 100,
    cost: 1450.00,
    events: []
  },
  {
    id: "EVT-99102",
    type: "Exception",
    status: "DWELL_ALERT",
    origin: "Chicago, IL",
    dest: "N/A",
    timestamp: "2023-10-24 09:45:00",
    auth: "IoT Sensor",
    trust: 95,
    cost: 0.00,
    events: []
  },
];

export default function LedgerPage() {
  const [selectedObject, setSelectedObject] = useState(mockObjects[0]);
  const [viewerRole, setViewerRole] = useState<"Admin" | "Shipper" | "Carrier">("Admin");

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">IntelligentLedger™</h1>
          <p className="text-sm text-gray-500">Live Governance Feed</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Simulate Viewer:</span>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(["Admin", "Shipper", "Carrier"] as const).map((role) => (
              <button
                key={role}
                onClick={() => setViewerRole(role)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  viewerRole === role
                    ? "bg-white text-primary-blue shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Feed List */}
        <div className="w-1/3 border-r border-gray-200 bg-white overflow-y-auto">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <input
              type="text"
              placeholder="Search Object ID..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
            />
          </div>
          <ul>
            {mockObjects.map((obj) => (
              <li
                key={obj.id}
                onClick={() => setSelectedObject(obj)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedObject.id === obj.id ? "bg-blue-50 border-l-4 border-l-primary-blue" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-mono text-xs font-bold text-gray-500">{obj.id}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    obj.status === "DELIVERED" ? "bg-green-100 text-green-800" :
                    obj.status === "AUDIT_FLAG" ? "bg-red-100 text-red-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {obj.status}
                  </span>
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">{obj.type}</div>
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{obj.auth}</span>
                  <span>{obj.timestamp.split(" ")[1]}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Object Detail / Governance Panel */}
        <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            
            {/* Main Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h2 className="text-lg font-bold text-gray-900">Object Governance</h2>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">Live Sync</span>
                </div>
              </div>
              
              <div className="p-6 grid grid-cols-2 gap-8">
                {/* AUTH.OBJ Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-1.5 rounded mr-2">
                      <svg className="w-4 h-4 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">AUTH.OBJ (Lineage)</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Source System</span>
                      <span className="font-medium text-gray-900">{selectedObject.auth}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Trust Score</span>
                      <span className="font-medium text-green-600">{selectedObject.trust}/100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Verification</span>
                      <span className="font-mono text-xs text-gray-600">SHA-256...8a9f</span>
                    </div>
                  </div>
                </div>

                {/* GHOST.ATTR Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-1.5 rounded mr-2">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">GHOST.ATTR (Visibility)</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Current Viewer</span>
                      <span className="font-medium text-primary-blue">{viewerRole}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Cost Data</span>
                      {viewerRole === "Carrier" ? (
                        <span className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded">REDACTED</span>
                      ) : (
                        <span className="font-mono text-gray-900">${selectedObject.cost.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Origin/Dest</span>
                      <span className="font-medium text-gray-900">Visible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ECON.ROY Section */}
              <div className="px-6 pb-6">
                 <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-1.5 rounded mr-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">ECON.ROY (Attribution)</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Charge Type</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Trigger Event</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Base Rate</td>
                          <td className="px-4 py-2 text-sm font-mono text-gray-900">${(selectedObject.cost * 0.8).toFixed(2)}</td>
                          <td className="px-4 py-2 text-xs text-gray-500">Tender Acceptance</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Fuel Surcharge</td>
                          <td className="px-4 py-2 text-sm font-mono text-gray-900">${(selectedObject.cost * 0.2).toFixed(2)}</td>
                          <td className="px-4 py-2 text-xs text-gray-500">Weekly Index</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>

            {/* Raw Data View */}
            <div className="bg-gray-900 rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-3 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-300 font-mono">PROC.CN (Canonical JSON)</h3>
                <button className="text-xs text-primary-blue hover:text-white">Copy</button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-xs text-green-400 font-mono">
                  {JSON.stringify(selectedObject, null, 2)}
                </pre>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

