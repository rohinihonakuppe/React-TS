import { useParams } from "react-router-dom"


export default function Employee(){
    const params = useParams();
    return(<>

            <h2>This is Employee page - Dynamic Routing </h2>
            <h3>Employee ID: {params.id}</h3>
    </>)
}