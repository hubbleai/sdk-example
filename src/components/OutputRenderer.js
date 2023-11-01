import React from 'react';
import {
  JsonView,
  allExpanded,
  darkStyles,
  // defaultStyles,
} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

function OutputRenderer({ data, isLoading }) {
  return (
    <div className="shadow-lg px-4 w-6/12 overflow-y-auto h-full py-6">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Output</h1>
          <JsonView
            data={data}
            shouldExpandNode={allExpanded}
            style={darkStyles}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
}

export default OutputRenderer;
