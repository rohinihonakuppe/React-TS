import { Link, Outlet } from "react-router-dom";

export default function AdminComonent(){

    return(<>
            <h2>This is Admin Component</h2>
            <Link to='/admincomonent/homecomponent'>Home</Link> | <Link to='/admincomonent/aboutcomponent'>About</Link>
            <hr/>
            <Outlet/>
    </>)
}