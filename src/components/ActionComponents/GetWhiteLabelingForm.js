import React from 'react';
import * as Carbon from 'carbon-connect-js';

const GetWhitelabelingForm = ({
  setJsonResponse,
  setIsLoading,
  accessToken,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Carbon.getWhiteLabelData({
      accessToken,
      environment: 'PRODUCTION',
    }).then((response) => {
      if (response.status === 200) {
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
        Generate White Labeling Data
      </button>
    </div>
  );
};

export default GetWhitelabelingForm;
