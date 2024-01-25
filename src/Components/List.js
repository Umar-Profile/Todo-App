import React from 'react'

const List = (props) => {
  return (
    <div className='list' onClick={()=>{props.del(props.id)}}>
        <li>{props.inputvalue}</li>
    </div>
  )
}

export default List