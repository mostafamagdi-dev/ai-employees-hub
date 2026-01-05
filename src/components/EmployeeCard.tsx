import React from 'react';
import Link from 'next/link';

interface EmployeeCardProps {
    title: string;
    description: string;
    status: 'active' | 'coming_soon' | 'disabled';
    role: string;
    href?: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ title, description, status, role, href }) => {
    const isActive = status === 'active';

    return (
        <div className={`
      relative p-6 rounded-xl border transition-all duration-200
      ${isActive
                ? 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                : 'bg-gray-50 border-gray-200 opacity-75'
            }
    `}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
            ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-500'}
          `}>
                        {title.charAt(0)}
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <p className="text-xs text-gray-500">{role}</p>
                    </div>
                </div>
                <span className={`
          px-2.5 py-0.5 rounded-full text-xs font-medium
          ${isActive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }
        `}>
                    {status === 'active' ? 'Active' : 'Coming Soon'}
                </span>
            </div>

            <p className="text-sm text-gray-600 mb-6 h-10 line-clamp-2">
                {description}
            </p>

            {isActive && href ? (
                <Link href={href} className="w-full block text-center py-2 px-4 border border-blue-600 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
                    Open Workspace
                </Link>
            ) : (
                <button disabled className="w-full py-2 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed">
                    Not Available
                </button>
            )}
        </div>
    );
};

export default EmployeeCard;
