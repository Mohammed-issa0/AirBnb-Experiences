import React from "react";

export default function Joke(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <span>{props.major}</span>
    </>
  );
}
