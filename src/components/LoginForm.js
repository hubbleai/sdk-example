// src/LoginForm.js
import React, { useState } from 'react';

function LoginForm({
  apiKey,
  setApiKey,
  customerId,
  setCustomerId,
  setLoggedIn,
}) {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!apiKey || !customerId) {
      setError('Please enter API Key and Customer ID');
      return;
    }
    setLoggedIn(true);
  };

  return (
    <div className="p-4 space-y-4 w-1/4 h-full flex flex-col justify-center items-center mx-auto">
      <input
        type="text"
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        className="w-full p-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Try Carbon
      </button>
      <p className="text-red-500">{error ? error : ''}</p>
    </div>
  );
}

export default LoginForm;
