import './App.css';
// import Index from './pages/index'
import React, { useState,useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
   
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log({count});
  });

    return (
       <div>
      <p>You clicked {count} times</p>
      {console.log({count})}
         <button onClick={() => setCount(count + 1)}>
       Click me
        </button>
    </div>
    );
  }

 


export default App;
