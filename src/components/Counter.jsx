import React from 'react';
import Button from './Button';
import Count from './Count';

export default function Counter({ id, count, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <Button increment={() => increment(id)} decrement={() => decrement(id)} />
    </div>
  );
}
