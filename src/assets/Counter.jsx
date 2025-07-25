import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-6 p-8 bg-white shadow-lg rounded-xl border">
        <h1 className="text-3xl font-bold text-gray-800">Counter App</h1>

        <div className="text-5xl font-semibold text-blue-600">{count}</div>


        <div className="space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded"
          >
            -
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
