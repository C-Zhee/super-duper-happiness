import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import { useState, useEffect} from "react"
import Poem from "./Poem"

function App() {
  const [poem, setPoem] = useState([])
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

 const hidePoem =((hide)=>{
  
 })
 
 

  return (
    <div className="app">
      <div className="sidebar">
      
        <button>Show/hide new poem form</button>  
        {true ? <NewPoemForm /> : null}
      
      </div>
       
       {/* <Poem poem={poem}/>  */}
      <PoemsContainer poem={poem} />
      {/* <Poem poem={poem}/> */}
    </div>
  );
}

export default App;
