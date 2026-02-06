import {useState} from 'react'
import  ChildComponent  from './ChildComponent';

export default function CounterComponent(){

    const [count, setCount] = useState(0);

    return(<>
         
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <ChildComponent text={"I am doing good today"} />
        </>)
}
