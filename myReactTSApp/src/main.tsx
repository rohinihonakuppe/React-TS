import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
//import CounterComponent from './Component/CounterComponent'
//import  DataBindingComponent  from './Component/DataBindingComponent'
// import EventDemoComponent from './Component/EventDemoComponent'
// import RefHookDemo from './Component/RefHookDemo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <CounterComponent /> */}
    {/* <DataBindingComponent/> */}
    {/* <EventDemoComponent/> */}

    {/* <RefHookDemo/> */}
    <App />
  </StrictMode>,
)
