import React from 'react';
import { INCREMENT, DECREMENT } from './../store/constants/actionTypes';
import { useStore } from './../store';

export default function Home() {
  const [state, dispatch] = useStore();
  console.log('TCL: Home -> state', state)
  return (
    <div className='home'>
      <h1>Contador</h1>
      <h3>{state.counter}</h3>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  )
}