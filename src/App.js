import React from 'react'
import {Header , Footer , Container, Login , Createnewaco, Forgotpass , About , Services} from './Components/index'
import './App.css'

function App() {
    let Component
    switch (window.location.pathname) {
        case "/":
            Component = <Container/>
            break;
        case "/Login":
            Component = <Login/>
            break;
        case "/createnewaccount":
            Component = <Createnewaco/>
            break;
        case "/forgotpassword":
            Component = <Forgotpass/>
            break;
            case "/About":
              Component = <About/>
              break;
              case "/Services":
                Component = <Services/>
                break;            

    }
  return (
    <div>
      <Header/>
    {Component}

    </div>
  )
}

export default App
