import { useState } from "react"


export default function DataBindingComponent(){
const [company] = useState({
    name:"Rohini",
    city:"Pune",
    country:"India"
})

    return(<>
          
          <h2>Employee Information</h2>
          <h3>Name: {company.name}</h3>
          <h3>Name: {company.city}</h3>
          <h3>Name: {company.country}</h3>

          
    </>)
}