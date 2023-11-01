import React, { useState } from 'react';
import * as Carbon from 'carbon-connect-js';

const UploadRawTextForm = ({ setJsonResponse, setIsLoading, accessToken }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Carbon.uploadText({
      accessToken,
      contents: text,
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
      <textarea
        // type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text"
        className="w-80 px-4 py-2 border rounded-lg text-black"
        rows="5"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-10 mt-4"
        type="button"
        onClick={handleSubmit}
      >
        Upload Text
      </button>
    </div>
  );
};

export default UploadRawTextForm;
