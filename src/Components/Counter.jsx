import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrament</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter - 1)}>Decrament</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nostrum repellat deleniti quod numquam sint at quia architecto rerum voluptatum amet?
        Ea ut excepturi ullam modi tempora architecto consequatur delectus tenetur.
      </p>
    </div>
  );
}

export default Counter;
