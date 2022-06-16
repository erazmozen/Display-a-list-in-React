import React from "react";
import "./index.css"

export default function App() {
  const names = [
    'Marija',
    'Dragan',
    'Nebojsa',
    'Milanka',
    'Dragutin',
    'Igor',
    'Milutin',
    'Ciga',
  ];
  const namearray = names.map((name) => {
    return <li>{name}</li>;
  });
  return (
    <div className='resoult'>
      <h1>Here is the list:</h1>
      <ol>{namearray}</ol>
    
    </div>
  );
}