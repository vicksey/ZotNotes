import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px 15px',
          borderRadius: '15px 0 0 15px',
          border: '1px solid #ddd',
          outline: 'none',
          width: '100%',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 15px',
          borderRadius: '0 15px 15px 0',
          backgroundColor: '#4a4ae6',
          color: 'white',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
