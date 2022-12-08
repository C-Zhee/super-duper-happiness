import React from "react";


function Poem({poem}) {
  return (
    <div>
      {
      poem.map((poem)=>{
        return (
          <div>
          <h3>{poem.title}</h3>
          <p>{poem.content}</p>
          <p> <strong>-{poem.content}</strong></p>
          <button onClick >Mark as read</button>
          </div>
      )
      })
    }
    </div>
  );
}

export default Poem;
