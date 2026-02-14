import React from 'react'

const NodeCard = ({ node: { id, name, status, cpuUsage, memoryUsage } }) => {
    const getColorClass = (usage) => {
        if (usage < 30) return 'bg-green-500'
        if (usage < 70) return 'bg-yellow-500'
        return 'bg-red-500'
    }

    const getStatusColor = (status) => 
    status === 'offline' ? 'border-2 border-red-500' : 'border-2 border-green-500'

    return (
        <div className={`w-80 h-56 rounded-lg ${getStatusColor(status)} overflow-hidden shadow-lg p-6 bg-white hover:shadow-xl transition-shadow flex flex-col justify-between`}>
            <div>
                <h3 className="font-bold text-xl mb-2">
                    {cpuUsage > 80 && (
                        <span className="inline-block mr-2" aria-hidden>
                            🔴
                        </span>
                    )}
                    <span className= 'text-gray-800'>{name}</span>
                </h3>
                <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4`}>{id}</span>
                <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4`}>#{status}</span>
            </div>

            <div className="space-y-4">
                {/* CPU Usage */}
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-gray-700">CPU Usage</label>
                        <span className="text-sm font-bold text-gray-800">{cpuUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className={`h-2 rounded-full ${getColorClass(cpuUsage)} transition-all`}
                            style={{ width: `${cpuUsage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Memory Usage */}
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-gray-700">Memory Usage</label>
                        <span className="text-sm font-bold text-gray-800">{memoryUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className={`h-2 rounded-full ${getColorClass(memoryUsage)} transition-all`}
                            style={{ width: `${memoryUsage}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NodeCard
