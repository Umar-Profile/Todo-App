import React, { useState } from 'react'

const Container = (props) => {
    const [input,setInput] = useState('');
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleClick = (e)=>{
        e.preventDefault();
        props.add(input);
        setInput('');
    }
  return (
    <div className='form'>
        <input type='text' placeholder= "add item..." onChange={handleChange} value={input} />
        <button onClick={handleClick}>
          <h4>Add</h4>
          </button>
    </div>
  )
}

export default Container