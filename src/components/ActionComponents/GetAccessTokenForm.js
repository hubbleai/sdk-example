import React from 'react';
import * as Carbon from 'carbon-connect-js';

const GetAccessTokenForm = ({
  setJsonResponse,
  setIsLoading,
  apiKey,
  customerId,
  setAccessToken,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Carbon.generateAccessToken({
      apiKey,
      customerId,
      environment: 'PRODUCTION',
    }).then((response) => {
      if (response.status === 200) {
        setAccessToken(response.data.access_token);
        setJsonResponse(response);
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="flex justify-center w-full items-center h-fit my-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-10"
        type="button"
        onClick={handleSubmit}
      >
        Generate Access Token
      </button>
    </div>
  );
};

export default GetAccessTokenForm;
