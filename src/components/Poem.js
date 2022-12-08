import React from "react";


function Poem({title, content, author}) {
  return (
    <div>
          <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <p> <strong>-{author}</strong></p>
          <button onClick >Mark as read</button>
          </div>
    </div>
  );
}

export default Poem;
