import React from "react";
import Poem from "./Poem";


function PoemsContainer({poem}) {
  return (
    <div className="poems-container">
      {
        poem?.map((poem)=>{
          return(
            <div>
              <Poem 
              title={poem.title}
              content={poem.content}
              author={poem.author}
              />
              {/* <p>{poem.content}</p>
              <p>{poem.author}</p> */}
            </div>
          )
        })
      }
      {/* render a list of <Poem> components in here */}
    </div>
  );
}

export default PoemsContainer;
