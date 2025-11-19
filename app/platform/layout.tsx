import Link from "next/link";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0 z-50 bg-gray-900 text-white">
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 border-b border-gray-800">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              Pathwell<span className="text-primary-blue">Connect</span>
            </Link>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Platform
              </div>
              <Link href="/platform/ledger" className="bg-gray-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <svg className="text-primary-blue mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                IntelligentLedger™
              </Link>
              <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <svg className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Analytics Engine
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <svg className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Control Tower
              </a>
              
              <div className="mt-8 px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Configuration
              </div>
              <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <svg className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-800 p-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary-blue flex items-center justify-center text-white font-bold">
                SL
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Sam Lawlis</p>
                <p className="text-xs font-medium text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:pl-64">
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}

