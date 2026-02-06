import { useRef } from "react";


const RefHookDemo: React.FC =()=>{
const inputRef = useRef<HTMLInputElement>(null);

const handleClick =()=>{
    inputRef.current?.focus();
};

return(<>
<input type="text" ref={inputRef}></input>
<button onClick={handleClick}>Focus Input</button>

</>)
}

export default RefHookDemo;