import React from 'react';
import { useStore } from './../store';
import { increment, decrement } from './../store/actions';

export default function Home() {
  const [state, dispatch] = useStore();
  return (
    <div className='home'>
      <h1>Contador</h1>
      <h3>{state.counter}</h3>
      <button onClick={() => increment(dispatch)}>Increment</button>
      <button onClick={() => decrement(dispatch)}>Decrement</button>
    </div>
  )
}