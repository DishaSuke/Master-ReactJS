import {useState} from 'react'
import React from 'react'

function App() {

  const [count, setCount] = useState(5);

    const addValue = () => {
      if (count == 20) {
        exit(0)
      }
      else{
        setCount(count + 1);
      }
    }


    const subvalue = () => {
      if (count == 0) {
        exit(0)
      }else{
        setCount(count -1);
      }
    
    }
    return (
    <>
        <h1>The Value = {count}</h1>
        <button onClick={addValue}> Add Value</button>
        <button onClick={subvalue}>sub value</button>
    </>
  )
}

export default App
