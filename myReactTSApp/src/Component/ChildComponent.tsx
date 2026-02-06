

type Props ={
    text: string
}

export default function ChildComponent({text}:Props){
    return(<>
    <h1>Hello, {text}</h1>

    </>)

}