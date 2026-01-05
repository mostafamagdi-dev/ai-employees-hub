import React from 'react';
import EmployeeCard from './EmployeeCard';

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                                WorkForce One
                            </span>
                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                                HUB
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 text-sm">
                            <span className="text-gray-500">Period:</span>
                            <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded">
                                Q1 2026
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-gray-900">Acting as Controller</p>
                                <p className="text-xs text-gray-500">finance@company.com</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                JD
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-12">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">AI Employees</h1>
                    <p className="mt-2 text-gray-600">Manage and monitor your autonomous workforce.</p>
                </div>

                {/* Employee Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EmployeeCard
                        title="AI Accountant"
                        role="Financial Operations"
                        description="Autonomous bookkeeping, reconciliation, and financial reporting agent."
                        status="active"
                        href="/accountant"
                    />

                    <EmployeeCard
                        title="AI Auditor"
                        role="Compliance & Risk"
                        description="Real-time transaction auditing and anomaly detection system."
                        status="coming_soon"
                    />

                    <EmployeeCard
                        title="AI Analyst"
                        role="FP&A"
                        description="Predictive financial modeling and budget variance analysis."
                        status="coming_soon"
                    />

                    <EmployeeCard
                        title="AI Tax Specialist"
                        role="Tax Compliance"
                        description="Automated tax calculation and filing preparation assistance."
                        status="disabled"
                    />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
