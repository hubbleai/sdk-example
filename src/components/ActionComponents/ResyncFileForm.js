import React, { useState } from 'react';
import * as Carbon from 'carbon-connect-js';

const ResyncFileForm = ({ setJsonResponse, setIsLoading, accessToken }) => {
  const [fileId, setFileId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Carbon.resyncFile({
      accessToken,
      fileId,
      environment: 'PRODUCTION',
    }).then((response) => {
      setJsonResponse(response);
      setIsLoading(false);
    });
  };

  return (
    <div className="flex justify-center w-full items-center h-full my-6 flex-col">
      <input
        type="text"
        value={fileId}
        onChange={(e) => setFileId(e.target.value)}
        placeholder="Enter file ID"
        className="w-64 px-4 py-2 border rounded-lg text-black"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-10 mt-4"
        type="button"
        onClick={handleSubmit}
      >
        Resync File
      </button>
    </div>
  );
};

export default ResyncFileForm;
