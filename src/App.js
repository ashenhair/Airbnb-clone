import React from "react";
import Navbar from "./Navbar.js";
import "./style.css";
import Main from "./Main.js"
import Card from "./Card.js";
import data from "./data.js";


export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
      item = {item}
      />
    )
  }) 

 

  return (
    <div className="app-container">
      <Navbar />
      <Main />
      <section className="cards-list"> 
      {cards} 
      </section>
    </div>
  )
  
  
  
}

