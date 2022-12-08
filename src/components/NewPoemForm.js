import React from "react";
import Poem from "./Poem"



function NewPoemForm({readPoems}) {
  


  return (
    <div onClick>
      <Poem readPoems={readPoems}/>
    <form className="new-poem-form">
      <input placeholder="Title" />
      <input placeholder="Author" />
      <textarea placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
    </div>
  );
}

export default NewPoemForm;
