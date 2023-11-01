import React, { useRef, useState } from 'react';
import * as Carbon from 'carbon-connect-js';

const UploadFileForm = ({ setJsonResponse, setIsLoading, accessToken }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelection = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Carbon.uploadFiles({
      accessToken,
      files: [file],
      environment: 'PRODUCTION',
    }).then((response) => {
      if (response.status === 200) {
        setJsonResponse(response);
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="flex justify-center w-full items-center h-full my-6 flex-col">
      <label className="w-64 flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-400 hover:text-white">
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.txt,.md"
          ref={fileInputRef}
          onChange={handleFileSelection}
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-10 mt-4"
        type="button"
        onClick={handleSubmit}
      >
        Upload File
      </button>
      {file && (
        <div className="mt-4 truncate w-64">
          <span className="font-bold">File: </span>
          <span>{file.name}</span>
        </div>
      )}
    </div>
  );
};

export default UploadFileForm;
