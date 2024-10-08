import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import data from "./data";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
