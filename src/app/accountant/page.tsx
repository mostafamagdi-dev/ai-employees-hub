import Link from 'next/link';

export default function AccountantPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center">
                            ← Back to Hub
                        </Link>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <span className="font-semibold text-gray-900">AI Accountant Workspace</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-12 text-center text-gray-500">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    A
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Accountant Is Ready</h1>
                <p className="max-w-md mx-auto mb-8">
                    This is where the actual AI Accountant interface will be implemented.
                    It will include chat interfaces, file uploads, and financial reports.
                </p>
                <div className="p-6 bg-white border border-dashed border-gray-300 rounded-lg w-full max-w-2xl">
                    <p className="text-sm">Workspace Placeholder Component</p>
                </div>
            </main>
        </div>
    );
}
