import React from 'react';

export default function Button({ increment, decrement }) {
  return (
    <div className="flex space-x-3">
      <button
        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-400 text-white px-3 py-2 rounded shadow"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}
