import './App.css';
import {useState} from 'react'

const App =() => {
 const [ like, setLike]= useState(0);
  return (
    <>
    <div>{like}</div>
    {
      console.log({like})
    }
    <i class="bi bi-hand-thumbs-up" onClick={() => setLike(like+1)}></i>
    </>
  );
}

export default App;


