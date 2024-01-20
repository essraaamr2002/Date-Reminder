import React ,{useState} from 'react';
import { Button } from 'react-bootstrap';





const  Count = () => {
const [count,setcount]=useState(0);
const [text,settext]=useState('text');
const tex=(e)=>{
    settext(e.target.value);
    console.log(text)
}

  return (
    <div>
      <Button onClick={()=> setcount(count + 1)}>+</Button>
      <Button onClick={()=> setcount(count - 1)}>-</Button> 
      <label>{text} count is {count}</label>   
      <input  type='text'  value={text} onChange={tex} />
      </div>
  )
}

export default Count;
