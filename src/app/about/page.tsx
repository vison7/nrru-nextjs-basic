"use client";
import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>About</h1>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default About;
