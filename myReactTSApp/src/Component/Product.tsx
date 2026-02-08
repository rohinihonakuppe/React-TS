import { useSearchParams } from "react-router-dom"

export default function Ptoduct() {
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");
    const price = searchParams.get("price");


    return (<>

        <h2>Product Info - SearchParams</h2>
        <h3>Category : {category}</h3>
        <h3>Price : {price}</h3>

    </>)
}