import React, { useState, useEffect } from 'react';

export function ConsoleBox({ output }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Add the output from the fetch command to the logs
    if (output) {
      setLogs(prevLogs => [...prevLogs, output]);
    }
  }, [output]);

  return (
    <div style={{ border: '1px solid black', padding: '10px', height: '500px', overflowY: 'auto', width: '1000px', margin: '10px', fontSize: '14px', borderRadius: '25px', backgroundColor: '#D8BFD8' }}>
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </div>
  );
}
