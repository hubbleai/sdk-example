import React, { useState } from 'react';
import * as Carbon from 'carbon-connect-js';

const GetUserFilesForm = ({ setJsonResponse, setIsLoading, accessToken }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Carbon.getUserFiles({
      accessToken,
      environment: 'PRODUCTION',
    }).then((response) => {
      setJsonResponse(response);
      setIsLoading(false);
    });
  };

  return (
    <div className="flex justify-center w-full items-center h-full my-6 flex-col">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-10 mt-4"
        type="button"
        onClick={handleSubmit}
      >
        Get User Files
      </button>
    </div>
  );
};

export default GetUserFilesForm;
