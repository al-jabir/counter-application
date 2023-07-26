import React, { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
];
export default function App() {
  const [state, setState] = useState(initialState);

  const totalCounter = () => {
    return state.reduce((totalCount, countCur) => totalCount + countCur.count, 0);
  };

  // button click handler

  const incrementCounter = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return {
        ...c,
      };
    });
    setState(updatedCounter);
  };

  const decrementCounter = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return {
        ...c,
      };
    });
    setState(updatedCounter);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {state.map(({ id, count }) => {
          return (
            //showing of the value of the counter
            <Counter key={id} id={id} count={count} increment={incrementCounter} decrement={decrementCounter} />
          );
        })}
        <Stats count={totalCounter()} />
      </div>
    </div>
  );
}
