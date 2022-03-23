import { useState } from 'react';

export default function useLocalStorage( key, initialValue ) {
  const [ storedValue, setStoredValue ] = useState( ()=> {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  })

  function setValue( value ) {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

// HOW TO USE:
// const [user, setUser] = useLocalStorage('user', null)