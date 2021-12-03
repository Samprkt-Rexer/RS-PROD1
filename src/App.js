import './App.css';
import {useState} from 'react'

const App =() => {
 const [ password, setPassword]= useState('');
 const [ email, setEmail]= useState('');
  return (
    <>
    <input
    name="email" 
    value={email}
    onChange={e=>setEmail(e.target.value)}
    
    />
    <input
    name="password" 
    value={password}
    type='password'
    onChange={e=>setPassword(e.target.value)}
    />
    </>
  );
}

export default App;


