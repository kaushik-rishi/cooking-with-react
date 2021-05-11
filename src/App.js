import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState('red');
  
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Class component counter
      <Counter initialCount={0} />
      Functional hooks component counter
      <CounterHooks initialCount={0} />
      <br />
      <button onClick={() => setTheme(prevTheme => prevTheme === 'red' ? 'blue' : 'red')}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}