import { useState } from 'react';
import './App.css';
import Container from './Components/Container';
import List from './Components/List';
function App() {
  const [items,setItems] = useState([]);
  const addItems = (i)=>{
    setItems((prevItems)=>{
      return([...prevItems,i])
    })
  };
  const del=(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((i,index) => {
        return index!==id;
      });
    });
  }
  return (
    <div className='container'>
      <div className='heading'>
      <h1>Todo App</h1>
      <Container add={addItems}/>
      <ul>
        {
          items.map((i,index)=>{
            return(
              <List key={index} inputvalue={i} del={del} id={index}/>
            )
          })
        }
      </ul>
    </div>
    </div>
  );
}

export default App;
