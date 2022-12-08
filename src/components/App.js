import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import { useState, useEffect} from "react"
import Poem from "./Poem"

function App() {
  const [poem, setPoem] = useState([])
  const [show, setShow] = useState(false)
  // const [hidePoem, setHidePoem] = useState(false)
 

  useEffect(()=>{
    const request = async() =>{
      let req = await fetch ("http://localhost:8004/poems")
      let res = await req.json()
      console.log(res)
      setPoem(res)
    }
    request()
  },[])


 const show1 = () => {
  setShow(!setShow)
 }
 
 

  return (
    <div className="app">
      <div className="sidebar">
      
        <button onClick={()=>{show1()}}>Show/hide new poem form</button>  
        {true ? <NewPoemForm /> : null}
      
      </div>
       
       {/* <Poem poem={poem}/>  */}
      <PoemsContainer poem={poem} />
      {/* <Poem poem={poem}/> */}
    </div>
  );
}

export default App;
