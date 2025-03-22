"use client";
import React, { useEffect, useState } from "react";
import ContentList from "../components/ContentList";

const About = () => {
  const [count, setCount] = useState(0);

  const news = [
    { title: "test 1", detail: "Detail 1", thumb: "/img/products/s1.jpg" },
    { title: "test 2", detail: "Detail 2", thumb: "/img/products/s2.jpg" },
  ];

  // useEffect
  useEffect(()=>{
    // call api, backtick
    // document.title = `Title click=${count}`;

  },[count])
  return (
    <div className="blockContent">
      <h1>About</h1>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <br></br>
      <ContentList
        title="News"
        subtitle="Latest news"
        data={news}
      ></ContentList>
    </div>
  );
};

export default About;
