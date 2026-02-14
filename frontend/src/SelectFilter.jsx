import React from 'react'

const SelectFilter = ({ onFilterChange }) => {
    const handleClick = (e, value) => {
        e.preventDefault();
        if (onFilterChange) onFilterChange(value);
    }

    return (
          <div className="space-x-1">
            <a className="text-base font-medium text-gray-600 hover:text-gray-800" href="#" onClick={(e)=>handleClick(e, 'All')}><span className="mr-1 text-gray-300">#</span>All</a>
            <a className="text-base font-medium text-gray-600 hover:text-gray-800" href="#" onClick={(e)=>handleClick(e, 'online')}><span className="mr-1 text-gray-300">#</span>Online</a>
        </div>
    )
}

export default SelectFilter
