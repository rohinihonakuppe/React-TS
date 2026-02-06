

export default function EventDemoComponent(){

    function handleClick(message:string){
        alert(message);
    }
    
return(<>
        <h1>Event Demo Component</h1>
        <button onClick={()=>handleClick("Button was clicked")}>Click me</button>
</>)
}