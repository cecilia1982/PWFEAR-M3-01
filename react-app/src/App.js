import React from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'



let lenguajes = ["HTML", "CSS", "JavaScript", "ES6", "JSX", "React", "Node.js"]

class App extends React.Component {
   render(){

    return (
    <div className="App">
      <Header title="Mi 1er App con React" action="Mas info" link="https://reactjs.org" />
      <Menu links={lenguajes} />

    </div>
  )

   }

}






export default App;
