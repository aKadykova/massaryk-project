import React, { useEffect, useState } from 'react';
import NodeCard from './NodeCard';
import SelectFilter from './SelectFilter';
import './App.css'

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [filter, setFilter] = useState('All');

  const fetchData = () => {
    fetch('http://localhost:8080/api/nodes')
      .then(response => response.json())
      .then(data => setNodes(data))
      .catch(err => console.error('Failed to fetch nodes', err));
  }

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 5000);
    return () => clearInterval(id);
  }, []);

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  const filteredNodes = nodes.filter(node => {
    if (filter === 'All') return true;
    return node.status === filter;
  });

  return(
    <div className="App px-4">
        <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Node Dashboard</h1>
        <div className="max-w-md w-full mx-auto mb-6">
          <SelectFilter onFilterChange={handleFilterChange}/>
        </div>
      <ul className="flex justify-center gap-6 flex-wrap">
        {filteredNodes.map(node => (
          <li key={node.id}><NodeCard node={node} /></li>
        ))}
      </ul>
    </div>
  );
}

export default App
