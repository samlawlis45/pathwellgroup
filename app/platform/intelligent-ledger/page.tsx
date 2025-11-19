"use client";

import { useState } from "react";
import Link from "next/link";

// --- MOCK DATA ---

const INTEGRATION_STATUS = [
  { id: "ERP", name: "SAP S/4HANA", type: "Internal", status: "connected", lastSync: "2 mins ago", count: "14,203 Records" },
  { id: "TMS", name: "Oracle OTM", type: "Internal", status: "connected", lastSync: "30 secs ago", count: "85 Active Loads" },
  { id: "WMS", name: "Manhattan", type: "Internal", status: "connected", lastSync: "5 mins ago", count: "4,500 SKUs" },
  { id: "RISK", name: "Everstream/Weather API", type: "External", status: "connected", lastSync: "10 mins ago", count: "Global Events" },
  { id: "PORT", name: "MarineTraffic", type: "External", status: "connected", lastSync: "1 hour ago", count: "Port Congestion" },
];

const GRAPH_NODES = [
  { id: "SUP-001", name: "Foxconn Shenzhen", type: "Supplier", risk: 78, impact: "High" },
  { id: "PORT-LA", name: "Port of Los Angeles", type: "Port", risk: 45, impact: "Medium" },
  { id: "DC-TX", name: "Dallas Distribution Center", type: "Facility", risk: 12, impact: "Low" },
];

const RISK_METRICS = {
  supplier_risk: { score: 78, trend: "up", label: "Critical", factor: "Labor Strike Risk" },
  route_risk: { score: 45, trend: "stable", label: "Moderate", factor: "Port Congestion" },
  compliance_risk: { score: 12, trend: "down", label: "Low", factor: "UFLPA Clear" },
  financial_impact: { cost: "$12,450", delay: "+4 Days", affected_orders: 3 },
};

const SHIPMENT_DATA = {
  id: "SHP-88392-X12",
  status: "IN_TRANSIT",
  origin: "Shenzhen, CN",
  destination: "Dallas, TX",
  carrier: "Maersk / Swift",
  rate: "$4,250.00",
  margin: "$450.00",
  driver_phone: "+1 (555) 019-2834",
  events: [
    { id: "EVT-001", type: "PO_CREATED", timestamp: "2023-10-20 08:00", auth: "SAP ERP", actor: "Procurement" },
    { id: "EVT-002", type: "PRODUCTION_DELAY", timestamp: "2023-10-22 14:30", auth: "Supplier Portal", actor: "Foxconn Rep", risk: true },
    { id: "EVT-003", type: "BOOKING_CONFIRMED", timestamp: "2023-10-23 09:15", auth: "Maersk API", actor: "Carrier System" },
    { id: "EVT-004", type: "GATE_IN_ORIGIN", timestamp: "2023-10-24 11:00", auth: "Terminal OS", actor: "Port Authority" },
  ],
};

// --- TYPES ---

type ViewMode = "admin" | "shipper" | "carrier";
type LayerTab = 1 | 2 | 3 | 4 | 5;

export default function IntelligentLedgerDashboard() {
  const [activeLayer, setActiveLayer] = useState<LayerTab>(1);
  const [viewMode, setViewMode] = useState<ViewMode>("admin");

  // Helper for GHOST.ATTR logic
  const isVisible = (field: string) => {
    if (viewMode === "admin") return true;
    if (viewMode === "shipper") return !["margin", "driver_phone"].includes(field);
    if (viewMode === "carrier") return !["rate", "margin", "supplier_risk"].includes(field);
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary-blue">
                Pathwell Connect
              </Link>
              <span className="ml-4 px-2 py-1 bg-primary-blue/10 text-primary-blue text-xs font-mono font-semibold rounded">
                INTELLIGENT_LEDGER™ PROTOTYPE
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500 hidden sm:block">
                Logged in as: <span className="font-bold text-gray-900">Demo User</span>
              </div>
              <div className="h-8 w-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                D
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Supply Chain Digital Twin</h1>
          <p className="text-gray-600 mt-2">
            Visualizing the 5-Layer Architecture of Pathwell IntelligentLedger™.
          </p>
        </div>

        {/* Layer Navigation (The Stack) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
          {[
            { id: 1, label: "1. Data & Integration", sub: "The Foundation" },
            { id: 2, label: "2. Ledger Graph", sub: "Digital Twin" },
            { id: 3, label: "3. Risk Engine", sub: "Impact Analysis" },
            { id: 4, label: "4. Governance", sub: "Policy & Control" },
            { id: 5, label: "5. App Modules", sub: "Actionable Insights" },
          ].map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id as LayerTab)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${
                activeLayer === layer.id
                  ? "bg-white border-primary-blue shadow-md ring-1 ring-primary-blue"
                  : "bg-gray-100 border-transparent hover:bg-gray-200 text-gray-500"
              }`}
            >
              <span className={`text-sm font-bold ${activeLayer === layer.id ? "text-primary-blue" : "text-gray-700"}`}>
                {layer.label}
              </span>
              <span className="text-xs text-gray-500 mt-1 hidden md:block">{layer.sub}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[500px]">
          
          {/* LAYER 1: DATA & INTEGRATION */}
          {activeLayer === 1 && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Layer 1: Data & Integration</h2>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">System Status: Healthy</span>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Ingesting and normalizing data from internal ERP/TMS systems and external risk/weather APIs into the <strong>Canonical Logistics Schema (PROC.CN)</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INTEGRATION_STATUS.map((system) => (
                  <div key={system.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-gray-50 rounded-md">
                        {system.id === "ERP" && <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
                        {system.id === "TMS" && <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>}
                        {system.id === "WMS" && <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
                        {system.id === "RISK" && <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        {system.id === "PORT" && <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                      </div>
                      <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        <span className="text-xs font-medium text-green-700 uppercase">Live</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900">{system.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{system.type} Source</p>
                    <div className="flex justify-between text-xs border-t pt-3">
                      <span className="text-gray-500">Last Sync: {system.lastSync}</span>
                      <span className="font-mono text-gray-700">{system.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LAYER 2: INTELLIGENT LEDGER GRAPH */}
          {activeLayer === 2 && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Layer 2: IntelligentLedger™ Graph</h2>
                <div className="text-sm text-gray-500">
                  Viewing Object: <span className="font-mono font-bold text-primary-blue">{SHIPMENT_DATA.id}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                The "Digital Twin" layer. Connecting nodes, edges, and events with <strong>Attribution (AUTH.OBJ)</strong> and <strong>Lineage (PROC.FLOW)</strong>.
              </p>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Graph Visualization (Mock) */}
                <div className="lg:col-span-2 bg-gray-50 rounded-xl border border-gray-200 p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-xs font-mono text-gray-400">GRAPH_VIZ_RENDER</div>
                  
                  {/* Simple Node/Edge Viz */}
                  <div className="flex items-center justify-between relative mt-8 mb-8">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -z-10"></div>
                    
                    {/* Nodes */}
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 z-10 w-40">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <span className="font-bold text-sm text-center">Supplier</span>
                      <span className="text-xs text-gray-500">Shenzhen</span>
                    </div>

                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 z-10 w-40">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <span className="font-bold text-sm text-center">Event</span>
                      <span className="text-xs text-red-500 font-bold">Delay Risk</span>
                    </div>

                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 z-10 w-40">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      </div>
                      <span className="font-bold text-sm text-center">Customer</span>
                      <span className="text-xs text-gray-500">Dallas DC</span>
                    </div>
                  </div>
                </div>

                {/* Event Lineage */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
                  <h3 className="font-bold text-gray-900 mb-4">Event Lineage</h3>
                  <div className="space-y-6 relative border-l-2 border-gray-100 ml-2">
                    {SHIPMENT_DATA.events.map((evt) => (
                      <div key={evt.id} className="pl-6 relative">
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${evt.risk ? 'bg-red-50 border-red-500' : 'bg-white border-primary-blue'}`}></div>
                        <div className="text-sm font-bold text-gray-900">{evt.type}</div>
                        <div className="text-xs text-gray-500 mb-1">{evt.timestamp}</div>
                        <div className="text-xs font-mono bg-gray-50 inline-block px-2 py-1 rounded border border-gray-200">
                          AUTH: {evt.auth}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LAYER 3: RISK & IMPACT ENGINE */}
          {activeLayer === 3 && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Layer 3: Risk & Impact Engine</h2>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Risk Detected</span>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Propagating risk scores through the graph to calculate <strong>Operational Impact</strong> and <strong>Financial Cost (ECON.TAX)</strong>.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-red-500">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Supplier Risk</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{RISK_METRICS.supplier_risk.score}</span>
                    <span className="ml-2 text-sm font-medium text-gray-500">/ 100</span>
                  </div>
                  <div className="mt-2 text-sm text-red-600 font-medium">
                    {RISK_METRICS.supplier_risk.label}: {RISK_METRICS.supplier_risk.factor}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-yellow-500">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Route Risk</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{RISK_METRICS.route_risk.score}</span>
                    <span className="ml-2 text-sm font-medium text-gray-500">/ 100</span>
                  </div>
                  <div className="mt-2 text-sm text-yellow-600 font-medium">
                    {RISK_METRICS.route_risk.label}: {RISK_METRICS.route_risk.factor}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-blue-500">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Est. Delay</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{RISK_METRICS.financial_impact.delay}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Impacts {RISK_METRICS.financial_impact.affected_orders} Orders
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-green-500">
                  <h3 className="text-gray-500 text-sm font-medium uppercase">Est. Cost Impact</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{RISK_METRICS.financial_impact.cost}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Expedite & Detention Fees
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Risk Propagation Path</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="bg-red-100 text-red-800 px-3 py-2 rounded-lg border border-red-200">
                    <strong>Tier 2 Supplier:</strong> Labor Strike
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg border border-yellow-200">
                    <strong>Tier 1 PO:</strong> Production Delay
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg border border-blue-200">
                    <strong>Shipment:</strong> Late Pickup (+2 Days)
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <div className="bg-white text-gray-800 px-3 py-2 rounded-lg border border-gray-300 shadow-sm">
                    <strong>Customer:</strong> Delivery Miss
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LAYER 4: GOVERNANCE & POLICY */}
          {activeLayer === 4 && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Layer 4: Governance & Policy</h2>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  {(["admin", "shipper", "carrier"] as ViewMode[]).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        viewMode === mode
                          ? "bg-white text-primary-blue shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      View as {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Applying <strong>GHOST.ATTR</strong> for selective visibility and <strong>Policy Rules</strong> for automated compliance.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Data Redaction Demo */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Secure Data View</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500">Shipment ID</span>
                      <span className="font-mono text-gray-900">{SHIPMENT_DATA.id}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500">Rate (Financial)</span>
                      {isVisible("rate") ? (
                        <span className="font-mono text-gray-900">{SHIPMENT_DATA.rate}</span>
                      ) : (
                        <span className="bg-gray-200 text-gray-400 px-2 py-1 rounded text-xs font-mono">REDACTED</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500">Margin (Internal)</span>
                      {isVisible("margin") ? (
                        <span className="font-mono text-gray-900">{SHIPMENT_DATA.margin}</span>
                      ) : (
                        <span className="bg-gray-200 text-gray-400 px-2 py-1 rounded text-xs font-mono">REDACTED</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500">Supplier Risk Score</span>
                      {isVisible("supplier_risk") ? (
                        <span className="font-mono text-red-600 font-bold">{RISK_METRICS.supplier_risk.score}</span>
                      ) : (
                        <span className="bg-gray-200 text-gray-400 px-2 py-1 rounded text-xs font-mono">REDACTED</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Active Policies */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Active Policy Triggers</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-500"></div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">High Risk Supplier Alert</p>
                        <p className="text-xs text-gray-500">Triggered when Risk Score &gt; 75. Notifies Procurement.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Margin Erosion Warning</p>
                        <p className="text-xs text-gray-500">Triggered when Est. Cost Impact &gt; $1,000.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">UFLPA Compliance Check</p>
                        <p className="text-xs text-gray-500">Passed. No forced labor entities in lineage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LAYER 5: APPLICATION MODULES */}
          {activeLayer === 5 && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Layer 5: Application Modules</h2>
                <button className="text-primary-blue text-sm font-semibold hover:underline">Customize Dashboard</button>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                The "Head" of the stack. Purpose-built modules for <strong>Logistics, Procurement, Planning, and Compliance</strong> that consume the governed data.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/solutions/risk-logistics" className="block group">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group-hover:border-primary-blue transition-colors h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-blue">Risk-Optimized Logistics</h3>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Predict delay risk by lane/shipment and tie to TMS routing.</p>
                    <div className="bg-gray-50 p-3 rounded text-xs font-mono text-gray-700">
                      Active Alerts: 3 Shipments Delayed
                    </div>
                  </div>
                </Link>

                <Link href="/solutions/risk-procurement" className="block group">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group-hover:border-primary-blue transition-colors h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-blue">Risk-Optimized Procurement</h3>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Supplier scorecards with risk + performance + ESG + cost.</p>
                    <div className="bg-gray-50 p-3 rounded text-xs font-mono text-gray-700">
                      Critical Suppliers: 2 (Strike Risk)
                    </div>
                  </div>
                </Link>

                <Link href="/solutions/compliance-esg" className="block group">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group-hover:border-primary-blue transition-colors h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-blue">Compliance & ESG</h3>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Continuous monitoring of supplier/route compliance and audit trails.</p>
                    <div className="bg-gray-50 p-3 rounded text-xs font-mono text-gray-700">
                      Audit Readiness: 100%
                    </div>
                  </div>
                </Link>

                <div className="block group opacity-75">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">Risk-Optimized Planning</h3>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">Coming Soon</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Feed risk and impact into planning systems (IBP, Oracle, Blue Yonder).</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
